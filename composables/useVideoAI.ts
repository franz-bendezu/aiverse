import type { AsyncState } from "types";

export const useVideoAi = () => {
  const video = useState<Blob | null>("social-video", () => null);
  const videoUrl = useState<string>("social-video-url", () => "");
  const title = useState<string>("social-video-title", () => "");
  const state = useState<AsyncState>("social-video-state");

  async function generate(url: string) {
    video.value = null;
    if (videoUrl.value) {
      URL.revokeObjectURL(videoUrl.value);
      videoUrl.value = "";
    }
    state.value = "loading";
    const res = await $fetch<Blob>(`/api/ai/video`, {
      method: "POST",
      responseType: "blob",
      body: { url },
    });
    console.log(res);
    video.value = res;
    videoUrl.value = URL.createObjectURL(res);
    state.value = "complete";
    return video.value;
  }

  const file = computed(() => new File([video.value!], title.value));

  return {
    generate,
    video,
    state,
    title,
    file,
    videoUrl,
  };
};
