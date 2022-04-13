export function header(data) {
  return /*html*/ `
    <header>
      <h1>${data.title}</h1>
      <div>
        <a class="button" href='#home'>Home</a> 
        <a class="button" href='#about'>About</a>
      </div>
    </header>
  `;
}
