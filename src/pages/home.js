import { form } from "../components/form.js";
import { info } from "../components/info.js";

export function render(data) {
  return /*html*/ `
    <div class="home">
      <h2 style="font-size: 20px;">
        Minify and Convert ECMAScript 2015+ code into a 
        backwards compatible version of JavaScript
      </h2>
      ${form(data)}
      ${info(data)}
    </div>
  `;
}
