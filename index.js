export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
      <html>
        <head>
          <title>Cloudflare Worker</title>
        </head>
        <body>
          <h1></h1>
          <p>This page was generated by a Cloudflare Worker.</p>
        </body>
      </html>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
};