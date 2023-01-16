import AwesomeLibrary from './modules/awesomeLibrary.js';
import {
  form, tabBtns, operationsContents, title, author,
} from './modules/usableData.js';
import LuxonTime from './modules/luxon.js';

const newLibrary = new AwesomeLibrary();

const displayTabSection = (selectedTab) => {
  const clickedContent = document.querySelector(`.tab_content_${selectedTab.dataset.tab}`);
  operationsContents.forEach((operationsContent) => {
    if (clickedContent !== operationsContent) {
      operationsContent.classList.remove('active');
      operationsContent.classList.add('hide');
    }
    clickedContent.classList.add('active');
    clickedContent.classList.remove('hide');
  });
};

const clearInputFields = (title, author) => {
  title.value = '';
  author.value = '';
};

tabBtns.forEach((tabBtn) => {
  tabBtn.addEventListener('click', () => {
    displayTabSection(tabBtn);
  });
});

window.addEventListener('load', () => {
  newLibrary.displayBooks();
  LuxonTime.displayTime();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  newLibrary.addBookDetails();
  clearInputFields(title, author);
});