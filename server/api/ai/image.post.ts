import { Configuration, OpenAIApi } from "openai";
import fs from "fs";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const url = body.url; // the article URL

  // Setup open AI
  const { OPENAI_API_KEY } = useRuntimeConfig();
  const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  try {
    const { data: prompt } = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      temperature: 0,
      messages: [
        { role: "system", content: "You are a prompt enginer for DALL-E" },
        {
          role: "user",
          content: `Provide 4 keywords for the description of this image .
        ${url}`,
        },
      ],
    });

    if (!prompt?.choices[0].message?.content) {
      throw new Error("DALL-E prompt not generated");
    }
    const dallePrompt = prompt?.choices[0].message?.content.trim();

    const { data } = await openai.createImage({
      prompt:
        `Professional style image of  ${url}, based on keywords` + dallePrompt,
    });
    const imageURL = data.data[0].url;
    if (!imageURL) throw new Error("Image not generated");
    const result = await $fetch<ArrayBuffer>(imageURL, {
      responseType: "arrayBuffer",
    });
    setHeader(event, "Content-Type", "image/png");
    return Buffer.from(new Uint8Array(result));
  } catch (error) {
    console.log(error);
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }
});
