console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
'use strict';

// Selecting the search button element
const searchButton = document.getElementById('submitSearch');

// Selecting the search input element
const searchInput = document.getElementById('searchWord');

// Selecting the image element
const imageElement = document.querySelector('#imageContainer img');

// Selecting the feedback paragraph element
const feedbackParagraph = document.createElement('p');
feedbackParagraph.id = 'feedback';
document.body.appendChild(feedbackParagraph);

// Adding a click event listener 
searchButton.addEventListener('click', () => {
  // Getting the value from the search input element
  const searchTerm = searchInput.value;
  
  // Fetching
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=g31UfaES6kw2BdRJg73mFKgdiqpXHL4l&s=${searchTerm}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Displaying the fetched GIF
      const gifUrl = data.data.images.original.url;
      imageElement.src = gifUrl;
      feedbackParagraph.textContent = ''; // Clearing previous feedback
    })
    .catch(error => {
      // Handling errors
      console.error('Error fetching GIF:', error);
      feedbackParagraph.textContent = 'Failed to fetch GIF. Please try again later.';
    });
});
