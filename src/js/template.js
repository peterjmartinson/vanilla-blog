/*jshint esversion:6, browser:true, node:true */

// general function
const html = (literal, ...cooked) => {
  let result = '';
  cooked.forEach( (cook,i) => {
    let lit = literal[i];
    if (Array.isArray(cook)) {
      cook = cook.join('');
    }
    result += lit;
    result += cook;
  });
  result += literal[literal.length - 1];
  return result;
};

const article = (data) => {
  const test = 'Consectetur repellat voluptate placeat veritatis nesciunt rem? Voluptatem vero quibusdam veniam consectetur molestias totam. Voluptatibus ex libero maiores labore ex pariatur magni commodi. Doloribus et corporis est culpa obcaecati recusandae.';
  return html`
    <div id="article">
      <p class="data">Here is the hash text:</p>
      <p class="thedata">${data}</p>
      <p class="stuff">Here is the text:</p>
      <p class="body">${test}</p>
      <p class="endstuff">End of the text</p>
    </div>
  `;
};

export { article };

