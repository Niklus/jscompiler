export function download(_event) {
  const filename = this.data.name;
  const text = this.data.output;

  if (!filename || !text) {
    return alert("please choose a file");
  }

  const element = document.createElement("a");

  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );

  element.setAttribute("download", filename);

  element.style.display = "none";

  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
