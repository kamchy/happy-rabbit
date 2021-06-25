addEventListener("fetch", (event) => {
  event.respondWith(
    new Response("Hello deno people", {
      status: 200,
      headers: { "content-type": "text/plain" },
    }),
  );
});
