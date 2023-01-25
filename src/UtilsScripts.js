export const fetchData = async (url) => {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  });
  return await response.json();
};

export const cleanBookDetails = (volumeInfoDetails) => {
  const cleanDetails = { ...volumeInfoDetails };

  if (!cleanDetails.imageLinks)
    cleanDetails.imageLinks = {
      smallThumbnail: '../src/assets/transparent.png',
    };

  !cleanDetails.authors
    ? (cleanDetails.authors = 'Author Unknown')
    : (cleanDetails.authors = cleanDetails.authors.join(', '));

  !cleanDetails.categories
    ? (cleanDetails.categories = 'Unknown')
    : (cleanDetails.categories = cleanDetails.categories.join(', '));

  return cleanDetails;
};

//SOURCE https://www.scaler.com/topics/javascript-sort-an-array-of-objects/
export const sortAscending = (object, sortBy) => {
  if (!object) return object;

  const sorted = [...object];
  sorted.sort((a, b) => {
    const nameA = a[sortBy].toUpperCase(); // ignore upper and lowercase
    const nameB = b[sortBy].toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return sorted;
};

export const getFormattedDate = (date) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dateObj = new Date(date);

  if (!dateObj.getDate()) return 'Unknown';

  return `${dateObj.getDate()} ${
    months[dateObj.getMonth()]
  } ${dateObj.getFullYear()}`;
};
