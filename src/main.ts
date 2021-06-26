import { serve, serveStatic } from "https://deno.land/x/sift@0.3.2/mod.ts";

import homePage from "./pages/home.jsx";
import notFoundPage from "./pages/404.jsx";
import showFeel from "./pages/showFeel.jsx";

serve({
  "/": homePage,
  "/feel/:feel": showFeel, 
  404: notFoundPage,
  "/style.css": serveStatic("assets/style.css", {
    baseUrl: import.meta.url,
    intervene: (request, response) => {
      console.log("in intervene");
      response.headers.set("content-type", "text/css; charset=utf-8");
      return response;
    },
    })
});
