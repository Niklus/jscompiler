export function pages(route) {
  switch (route) {
    case "":
    case "#home":
      return import("./home.js");
      break;
    case "#about":
      return import("./about.js");
      break;
  }
}
