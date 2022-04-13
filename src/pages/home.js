import { form } from "../components/form.js";

export function render(data) {
  return /*html*/ `
    ${form(data)}
  `;
}
