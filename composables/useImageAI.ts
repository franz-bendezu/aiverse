import type { AsyncState } from "types";
export const useImageAi = () => {
  const image = useState<string>("social-image", () => "");
  const title = useState<string>("social-image-title", () => "");
  const state = useState<AsyncState>("social-image-state");
  async function generate(url: string) {
    image.value = "";
    state.value = "loading";
    const res = await $fetch<string>(`/api/image`, {
      method: "POST",
      body: { url },
    });
    image.value = res;
    state.value = "complete";
    return image.value;
  }

  return {
    generate,
    image,
    state,
    title,
  };
};
