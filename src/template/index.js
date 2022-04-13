import { header } from "../components/header.js";

export function template(page) {
  return function (data, _elem) {
    return /*html*/ `
      ${header(data)}
      <div class="pages">
        ${page.render(data)}
      </div>
  `;
  };
}
