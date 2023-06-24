import createAgent from ".";

export const facebookAgent = createAgent((context) => {
  return {
    messages: [
      {
        role: "system",
        content:
          "Eres un influencer amigable en las redes sociales que comparte un nuevo contenido de medios.",
      },
      {
        role: "user",
        content: `Crea una publicación en Facebook para promocionar el siguiente contenido: ${context.url}. Use saltos de línea para facilitar la lectura`,
      },
    ],
  };
});
