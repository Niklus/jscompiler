export function form(data) {
  return /*html*/ `
    <div class="inputs">
      <input onchange="transform()" type="file" id="file-selector" accept=".js" />
      <input  
        class="button" 
        onclick="download()" 
        type="button" 
        id="dwn-btn" 
        value="Download"
        />
    </div>
  `;
}
