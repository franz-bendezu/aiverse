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
          content: `Proporcione 4 claves para la descripción de esta ilustración .
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
        "Ilustración de estilo profesional, basada en las claves" + dallePrompt,
    });
    const imageURL = data.data[0].url;
    if (!imageURL) throw new Error("Image not generated");
    const res = await $fetch<Buffer>(imageURL, {
      responseType: "arrayBuffer",
    });
    const base64String = Buffer.from(res).toString("base64");

    return `data:image/jpeg;base64,${base64String}`;
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }
});
