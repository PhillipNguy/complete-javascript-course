'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal');
const closeModal = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

console.log(btnOpenModel);

for (let x = 0; x < btnOpenModel.length; x++) {
  btnOpenModel[x].addEventListener('click', openModal);
}

btnCloseModel.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !model.classList.contains('hidden')) {
    closeModal();
  }
});
