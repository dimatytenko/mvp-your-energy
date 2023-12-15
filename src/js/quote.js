import { ApiServices } from './ApiServices';
import { LocalStorage } from './LocalStorage';

const apiServices = new ApiServices();
const localStorage = new LocalStorage();

const quoteText = document.querySelector('.quote-text-js');
const quoteAuthor = document.querySelector('.quote-author-js');

async function updateQuote() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const fullDate = `${day}.${month}.${year}`;

  const storedQuote = localStorage.getData('quote');

  if (storedQuote && storedQuote.date === fullDate) {
    updateDOM(storedQuote.data);
    // return;
  } else {
    try {
      const newQuote = await apiServices.getQuoteOfTheDay();
      const localData = {
        date: fullDate,
        data: newQuote,
      };
      localStorage.setData('quote', localData);

      updateDOM(newQuote);
    } catch (error) {
      console.error('Error fetching the quote:', error);
    }
  }
}

function updateDOM(quoteData) {
  quoteText.textContent = quoteData.quote;
  quoteAuthor.textContent = quoteData.author;
}

updateQuote();
