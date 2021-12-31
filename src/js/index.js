/* eslint-disable no-plusplus */
// const selectSingle = document.querySelector('.select');
// const selectSingleTitle = selectSingle.querySelector('.select__title');
// const selectSingleLabels = selectSingle.querySelectorAll('.select__label');

// // Toggle menu
// selectSingleTitle.addEventListener('click', () => {
//   if (selectSingle.getAttribute('data-state') === 'active') {
//     selectSingle.setAttribute('data-state', '');
//   } else {
//     selectSingle.setAttribute('data-state', 'active');
//   }
// });

// // Close when click to option
// for (let i = 0; i < selectSingleLabels.length; i++) {
//   selectSingleLabels[i].addEventListener('click', (evt) => {
//     selectSingleTitle.textContent = evt.target.textContent;
//     selectSingle.setAttribute('data-state', '');
//   });
// }

const select1 = document.getElementById('select1');
const select2 = document.getElementById('select2');
const select3 = document.getElementById('select3');
const select4 = document.getElementById('select4');
const select5 = document.getElementById('select5');
const sort = document.getElementById('select6');

function getSelect(id) {
  const select = document.getElementById(`${id}-block`);
  const selectSingleTitle = select.querySelector('.select__title');
  const selectSingleLabels = select.querySelectorAll('.select__label');

  // Toggle menu
  if (select.getAttribute('data-state') === 'active') {
    select.setAttribute('data-state', '');
  } else {
    select.setAttribute('data-state', 'active');
  }

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
