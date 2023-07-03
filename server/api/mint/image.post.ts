export default defineEventHandler(async (event) => {
  const body = await readMultipartFormData(event);
  const fileData = body?.find((item) => item.name === "file");
  if (!fileData) {
    return { statusCode: 400, body: "No file provided" };
  }

  const fileName = body?.find((item) => item.name === "name")?.data;

  const fileDescription = body?.find(
    (item) => item.name === "description"
  )?.data;

  const filePrompt = body?.find((item) => item.name === "prompt")?.data;
  const fileGenerator = body?.find((item) => item.name === "generator")?.data;

  const config = useRuntimeConfig();

  const infuraKeySecret = config.infuraIPFSKeySecret;
  const infuraKey = config.public.infuraIPFS.key;
  const infuraURL = config.public.infuraIPFS.url;

  const formData = new FormData();
  const buffer = new Uint8Array(fileData.data);
  const file = new File(
    [buffer],
    fileData.filename! || fileName?.toString() || ""
  );
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
  const imageUrl = infuraURL + "/ipfs/" + hashResponse.Hash;

  const metaData = {
    name: hashResponse.Name,
    description: fileDescription || "",
    image: imageUrl,
    attributes: [
      { trait_type: "generator", value: fileGenerator || "Dalle-E" },
      {
        trait_type: "prompt",
        value: filePrompt,
      },
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
    file: hashResponse,
    metaData: metaDataResponse,
    metaDataURL: infuraURL + "/ipfs/" + metaDataResponse.Hash,
  };
});
