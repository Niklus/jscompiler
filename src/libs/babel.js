import { codeStr } from "./babel/release.js";

export function loadBabel() {
  const script = document.createElement("script");
  script.textContent = window.atob(codeStr());
  document.head.append(script);
}
