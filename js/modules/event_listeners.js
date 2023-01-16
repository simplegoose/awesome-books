import { DateTime } from './luxon.js';

// eslint-disable-next-line import/prefer-default-export
export const addEventListerers = (awesomeBooksInstance, dateTimeInstance) => {
  const booksList = document.getElementById('books_list');
  const date = document.querySelector('.date');

  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const auther = document.getElementById('auther_input').value;
    const title = document.getElementById('title_input').value;

    const data = { title, auther, id: Math.ceil((Math.random() * Math.random()) * 100) };
    awesomeBooksInstance.addBook(data);

    awesomeBooksInstance.renderBooks(booksList);
    awesomeBooksInstance.saveToLocalStorage();
    e.target.reset();
  });

  const setTime = () => {
    date.textContent = dateTimeInstance.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  };

  window.addEventListener('load', () => {
    awesomeBooksInstance.loadLocalStorageData();
    awesomeBooksInstance.renderBooks(booksList);

    const navButton = document.getElementsByClassName('nav_buttons')[1];
    for (let x = 2; x < navButton.classList.length; x += 1) {
      document.getElementById(navButton.classList[x]).style.display = 'none';
    }

    navButton.style.color = 'blue';
    setInterval(setTime, 1000);
  });

  function handler() {
    for (let x = 2; x < this.classList.length; x += 1) {
      document.getElementById(this.classList[x]).style.display = 'none';
    }

    document.querySelectorAll('.nav_buttons').forEach((button) => {
      button.style.color = null;
    });

    document.getElementById(this.classList[1]).style.display = null;
    this.style.color = 'blue';
  }

  for (let x = 0; x < document.getElementsByClassName('nav_buttons').length; x += 1) {
    document.getElementsByClassName('nav_buttons')[x].addEventListener('click', handler);
  }
};