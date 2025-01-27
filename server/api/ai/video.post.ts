import { type ClientOptions, OpenAI } from "openai";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const url = body.url; // the video URL

  // Setup open AI
  const { OPENAI_API_KEY } = useRuntimeConfig();
  const configuration: ClientOptions = {
    apiKey: OPENAI_API_KEY,
  };
  const openai = new OpenAI(configuration);

  try {
    const { choices } = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      temperature: 0,
      messages: [
        { role: "system", content: "You are a prompt engineer for DALL-E" },
        {
          role: "user",
          content: `Provide 4 keywords for the description of this video.
        ${url}`,
        },
      ],
    });

    if (!choices[0].message?.content) {
      throw new Error("DALL-E prompt not generated");
    }
    const dallePrompt = choices[0].message?.content.trim();

    const { data } = await openai.videos.generate({
      prompt:
        `Professional style video of ${url}, based on keywords` + dallePrompt,
    });
    const videoURL = data[0].url;
    if (!videoURL) throw new Error("Video not generated");
    const result = await $fetch<ArrayBuffer>(videoURL, {
      responseType: "arrayBuffer",
    });
    setHeader(event, "Content-Type", "video/mp4");
    return Buffer.from(new Uint8Array(result));
  } catch (error) {
    console.log(error);
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }
});
