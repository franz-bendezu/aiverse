import { InfuraProvider } from "@ethersproject/providers";

export default defineEventHandler(async (event) => {
  const body = await readMultipartFormData(event);
  if (body?.length === 0) {
    return { statusCode: 400, body: "No files provided" };
  }
  const file = body![0];
  const config = useRuntimeConfig();
  const infuraKeySecret = config.infuraIPFSKeySecret;
  const infuraKey = config.public.infuraIPFSKey;
  const res = await $fetch<{
    Name: string;
    Hash: string;
    Size: string;
  }>("https://ipfs.infura.io:5001/api/v0/add", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from( infuraKey+ ':' + infuraKeySecret).toString('base64')}`    
    },
    body: {
      ...file,
      name: "file",
    },
  });
  return {
    statusCode: 200,
    body: JSON.stringify(res),
  };
});
