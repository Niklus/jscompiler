export function form(data) {
  return /*html*/ `
    <div class="inputs">
      <input onchange="transform()" type="file" id="file-selector" accept=".js" />
      <input class="button-primary" onclick="download()" type="button" id="dwn-btn" value="Download" />
    </div>
  `;
}
