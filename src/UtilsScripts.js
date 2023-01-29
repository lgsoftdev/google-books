export const ITEMS_PER_PAGE = 10;
const TITLE_UNKNOWN = 'ZZZ';
const MONTHS = [
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

export const fetchData = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
      },
    });
    return await response.json();
  } catch (error) {
    console.log('Error fetchData', error.message);
  }
};

export const cleanBookDetails = (volumeInfoDetails) => {
  const cleanDetails = { ...volumeInfoDetails };

  try {
    if (!cleanDetails.imageLinks)
      cleanDetails.imageLinks = {
        smallThumbnail: '',
      };

    !cleanDetails.authors
      ? (cleanDetails.authors = 'Author Unknown')
      : (cleanDetails.authors = cleanDetails.authors.join(', '));

    !cleanDetails.categories
      ? (cleanDetails.categories = 'Unknown')
      : (cleanDetails.categories = cleanDetails.categories.join(', '));

    !cleanDetails.description
      ? (cleanDetails.description = '')
      : (cleanDetails.description = cleanDetails.description.replaceAll(
          '�',
          "'"
        ));
  } catch (error) {
    console.log('Error cleanBookDetails', error.message);
  } finally {
    return cleanDetails;
  }
};

//SOURCE https://www.scaler.com/topics/javascript-sort-an-array-of-objects/
export const sortAscending = (object, sortBy) => {
  if (!object) return object;

  const sorted = [...object];
  sorted.sort((a, b) => {
    try {
      const nameA = !a[sortBy] ? TITLE_UNKNOWN : a[sortBy].toUpperCase(); // ignore upper and lowercase
      const nameB = !b[sortBy] ? TITLE_UNKNOWN : b[sortBy].toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    } catch (error) {
      console.log('Error sortAscending', a, b, error.message);
    }
  });

  return sorted;
};

export const getFormattedDate = (date) => {
  const dateObj = new Date(date);
  try {
    if (!dateObj) return 'Unknown';

    return `${dateObj.getDate()} ${
      MONTHS[dateObj.getMonth()]
    } ${dateObj.getFullYear()}`;
  } catch (error) {
    return 'Error retrieving date';
  }
};

export const getNumberOfGroups = (itemsArray, itemsPerGroup) => {
  const remainder = itemsArray.length % itemsPerGroup > 0 ? 1 : 0;
  const numberOfGroups =
    parseInt(itemsArray.length / itemsPerGroup) + remainder;
  return numberOfGroups;
};
