/*jshint esversion:6, browser:true, node:true */

// All but *html* are dependent on moment
import moment from 'moment';

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

// three variables that hold html'ed strings
const controls = (data) => {
  const curr = moment(data.iso),
        next = moment(data.iso).add(1, 'month'),
        prev = moment(data.iso).subtract(1, 'month');
  return html`
    <div id="controls">
      <a class="item" href="#/${prev.format('MM')}/${prev.format('YYYY')}">Back one month</a>
      <p class="item">${curr.format('MMMM')}, ${curr.format('YYYY')}</p>
      <a class="item" href="#/${next.format('MM')}/${next.format('YYYY')}">Forward one month</a>
    </div>
  `;
};

const day = (data) => html`
  <li data-iso="${data.iso}">
    <p class="date">${ moment(data.iso).format('D')}</p>
  </li>
`;

const calendar = (data) => html`
  ${controls(data)}
  <ul id="calendar" class="full-width weeks-${data.weekCount}">
    ${data.days.map(data => day(data))}
  </ul>
`;

export { calendar };
export { controls };
