import type { AsyncState } from "types";

function base64ToFile(base64String: string, fileName: string) {
  // Remove the prefix from the base64 string
  const base64Data = base64String.replace(
    /^data:image\/(png|jpeg|jpg);base64,/,
    ""
  );

  // Convert the base64 string to a Blob
  const byteCharacters = atob(base64Data);
  const byteArrays = [];
  for (let i = 0; i < byteCharacters.length; i++) {
    byteArrays.push(byteCharacters.charCodeAt(i));
  }
  const byteArray = new Uint8Array(byteArrays);
  const blob = new Blob([byteArray], { type: "image/jpeg" });

  // Create a File object from the Blob
  const file = new File([blob], fileName, { type: "image/jpeg" });

  return file;
}
export const useImageAi = () => {
  const image = useState<string>("social-image", () => "");
  const title = useState<string>("social-image-title", () => "");
  const state = useState<AsyncState>("social-image-state");
  async function generate(url: string) {
    image.value = "";
    state.value = "loading";
    const res = await $fetch<string>(`/api/ai/image`, {
      method: "POST",
      body: { url },
    });
    image.value = res;
    state.value = "complete";
    return image.value;
  }

  const file = computed(() => base64ToFile(image.value, title.value));

  return {
    generate,
    image,
    state,
    title,
    file,
  };
};
