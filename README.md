# Project: Book Hunt (A Google Books API Search Engine)

## Outline

This project aims to provide users the ability to search for a book inside the Google Books database and to be able to get more details about a certain title.

## Features

- Search field allows user to input a search string. When submitted, book titles are matched in the Google Books database.
- A maximum number of 40 results are returned. If no books have been found, a 'No results found.' warning is shown to the user.
- A maximum of ten book titles are displayed per page. A page dropdown is available to view book titles on the next or previous page.
- Each book is displayed on a white card with image, author, title and description details. Clicking on the image and title will open a modal window with more book information such as the publisher, published date, categories and the full book description.
- A 'go to Top' link is available to scroll from the bottom to the top of the screen.

## Other info related to project requirements

- The book grid is responsive on different screen sizes.
- Async / await is used to retrieve data from api.
- Each component uses its own SCSS file. Variables and mixins are used.
- Book Hunt was built in React, Javascript, HTML and SCSS.
- A public repository on GitHub for the project can be found in https://github.com/lgsoftdev/google-books.
