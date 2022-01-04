/* eslint-disable no-plusplus */
const select1 = document.getElementById('select1');
const select2 = document.getElementById('select2');
const select3 = document.getElementById('select3');
const select4 = document.getElementById('select4');
const select5 = document.getElementById('select5');
const sort = document.getElementById('select6');
const openers = document.querySelectorAll('.question__opener');
const closers = document.querySelectorAll('.question__closer');
const nav = document.getElementById('navOnSmallSreen');
const toggler = document.getElementById('toggler');
const closeNav = document.getElementById('closeNav');
const checkbox = document.getElementById('checkbox');

for (let i = 0; i < openers.length; i++) {
  const questions = document.querySelectorAll('.question');

  openers[i].addEventListener('click', () => {
    questions[i].className = 'question question--active';
  });

  closers[i].addEventListener('click', () => {
    questions[i].className = 'question';
  });
}

let prevSelect = null;

function getSelect(id) {
  const select = document.getElementById(`${id}-block`);
  const selectSingleTitle = select.querySelector('.select__title');
  const selectSingleLabels = select.querySelectorAll('.select__label');

  // Toggle menu
  if (
    (prevSelect && prevSelect.getAttribute('data-state') === 'active')
    || select.getAttribute('data-state') === 'active'
  ) {
    select.setAttribute('data-state', 'active');
    prevSelect.setAttribute('data-state', '');
  } else {
    select.setAttribute('data-state', 'active');
  }

  prevSelect = select;

  // Close when click to option
  for (let i = 0; i < selectSingleLabels.length; i++) {
    selectSingleLabels[i].addEventListener('click', (event) => {
      selectSingleTitle.textContent = event.target.textContent;
      select.setAttribute('data-state', '');
    });
  }
}

select1.addEventListener('click', (event) => getSelect(event.target.id));
select2.addEventListener('click', (event) => getSelect(event.target.id));
select3.addEventListener('click', (event) => getSelect(event.target.id));
select4.addEventListener('click', (event) => getSelect(event.target.id));
select5.addEventListener('click', (event) => getSelect(event.target.id));
sort.addEventListener('click', (event) => getSelect(event.target.id));
toggler.addEventListener('click', () => {
  nav.className = 'navigation__small-sreen navigation__small-sreen--active';
});
closeNav.addEventListener('click', () => {
  nav.className = 'navigation__small-sreen';
});

checkbox.addEventListener('change', (event) => {
  const check = document.getElementById('check');

  if (event.target.checked) {
    check.className = 'cars-selection__check cars-selection__check--checked';
  } else {
    check.className = 'cars-selection__check';
  }
});
