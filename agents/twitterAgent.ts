import createAgent from ".";

export const twitterAgent = createAgent((context) => {
  return {
    messages: [
      {
        role: "system",
        content:
          "Eres una influencer en las redes sociales que comparte un nuevo contenido multimedia",
      },
      {
        role: "user",
        content: `Crea un tweet sobre el siguiente contenido: ${context.url}. Utilice saltos de línea para facilitar la lectura. ¡DEBE tener menos de 280 caracteres! DEBE incluir URL`,
      },
    ],
    max_tokens: 350,
  };
});
