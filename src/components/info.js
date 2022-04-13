export function info(data) {
  let htmlStr = "";

  Array.from(data.files).forEach((item) => {
    htmlStr += /*html*/ `
    <p>Name: ${item.name}</p>
    <p>Type: ${item.type}</p>
    <p>Size: ${item.size}</p>
    `;
  });

  return /*html*/ `
    <div class="info">
       ${htmlStr}
    </div>
  `;
}
