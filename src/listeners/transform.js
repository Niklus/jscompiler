import { UglifyJS } from "../libs/uglify.js";

export async function transform(event) {
  const text = await event.target.files[0].text();
  this.data.name = event.target.files[0].name;
  this.data.input = this.data.minify ? minify(compile(text)) : compile(text);
}

function compile(input) {
  try {
    return Babel.transform(input, {
      presets: ["env"],
    }).code;
  } catch (ex) {
    console.log("ERROR: " + ex.message);
  }
}

function minify(input) {
  return UglifyJS.minify(input).code;
}