import html from "./templates/index.html";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    console.debug("path:", pathname);

    return new Response(html, {
      headers: { "content-type": "text/html" },
    });
  },

  async scheduled(event, env, ctx) {
    // ctx.waitUntil(cloudflareToGeoJson(env));
  },
};
