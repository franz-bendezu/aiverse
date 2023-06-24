export default defineEventHandler(async (event) => {
  const body = await readMultipartFormData(event);
  if (body?.length === 0) {
    return { statusCode: 400, body: "No files provided" };
  }
  const fileData = body![0];
  const config = useRuntimeConfig();
  const infuraKeySecret = config.infuraIPFSKeySecret;
  const infuraKey = config.public.infuraIPFSKey;
  const formData = new FormData();
  const buffer = new Uint8Array(fileData.data);
  const file = new File([buffer], fileData.filename!);
  formData.append("file", file);
  const res = await $fetch<{
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
  return {
    statusCode: 200,
    body: JSON.stringify(res),
  };
});
