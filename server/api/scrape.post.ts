export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const url = body.url; // the article URL

  const html = await $fetch<string>(url);

  return {
    title: getTitle(html),
  };
});

function getTitle(html: string) {
  const regexH1 = /<h1[^>]*>([^<]*)<\/h1>/i;
  const regexTitle = /<title[^>]*>([^<]*)<\/title>/i;
  const matchH1 = regexH1.exec(html);
  const matchTitle = regexTitle.exec(html);
  const title = matchH1 ? matchH1[1] : matchTitle ? matchTitle[1] : "";
  return title;
}
