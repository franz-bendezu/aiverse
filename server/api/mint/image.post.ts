export default defineEventHandler(async (event) => {
  const body = await readMultipartFormData(event);
  if (body?.length === 0) {
    return { statusCode: 400, body: "No files provided" };
  }
  const fileData = body![0];
  const config = useRuntimeConfig();

  const infuraKeySecret = config.infuraIPFSKeySecret;
  const infuraKey = config.public.infuraIPFSKey;
  const infuraURL = config.public.infuraIPFSURL;

  const formData = new FormData();
  const buffer = new Uint8Array(fileData.data);
  const file = new File([buffer], fileData.filename!);
  formData.append("file", file);
  const hashResponse = await $fetch<{
    Name: string;
    Hash: string;
    Size: string;
  }>("https://ipfs.infura.io:5001/api/v0/add", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        infuraKey + ":" + infuraKeySecret
      ).toString("base64")}`,
    },
    body: formData,
  });
  const metaData = {
    name: "Meme NFT",
    description: "NFTs are so hot right now",
    image: infuraURL + "/ipfs/" + hashResponse.Hash,
    attributes: [
      { trait_type: "meme", value: "So Hot Right Now" },
      { trait_type: "event", value: "EthDenver 2022" },
    ],
  };
  const formDataMetaData = new FormData();
  formDataMetaData.append(
    "file",
    new File([JSON.stringify(metaData)], "data.json", {
      type: "application/json",
    })
  );
  const metaDataResponse = await $fetch<{
    Name: string;
    Hash: string;
    Size: string;
  }>("https://ipfs.infura.io:5001/api/v0/add", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        infuraKey + ":" + infuraKeySecret
      ).toString("base64")}`,
    },
    body: formDataMetaData,
  });
  return {
    statusCode: 200,
    body: {
      file: hashResponse,
      metaData: metaDataResponse,
    },
  };
});
