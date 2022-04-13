export async function router(pages, createApp, event) {
  const hash = location.hash;
  if (hash === "" || hash === "#home" || hash === "#about") {
    const newPage = await pages(hash);
    createApp(newPage).render();
  } else {
    history.replaceState(null, "", event.oldURL);
  }
}
