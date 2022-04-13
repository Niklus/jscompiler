export function header(data) {
  return /*html*/ `
    <header>
      <a href='#home'><h1>${data.title}</h1></a>
      <div>
        <a class="button" href='#home'>Home</a> 
        <a class="button" href='#about'>About</a>
      </div>
    </header>
  `;
}
