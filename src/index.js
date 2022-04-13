import Reef from "./libs/reef.es.min.js";
import { data } from "./data/index.js";
import { listeners } from "./listeners/index.js";
import { template } from "./template/index.js";
import { pages } from "./pages/index.js";
import { router } from "./utils/router.js";
import { loadBabel } from "./libs/babel.js";

function createApp(page) {
  return new Reef("#app", {
    data,
    listeners,
    template: template(page),
  });
}

(async () => {
  loadBabel();
  const page = await pages(location.hash);
  const app = createApp(page);
  app.render();
})();

window.addEventListener("hashchange", (event) => {
  router(pages, createApp, event);
});
