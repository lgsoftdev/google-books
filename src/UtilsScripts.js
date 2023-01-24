export const fetchData = async (url, queryString) => {
  let inputUrl = url;
  if (queryString.length > 0) inputUrl = inputUrl.concat('?', queryString);

  const response = await fetch(inputUrl, {
    headers: {
      Accept: 'application/json',
    },
  });
  return await response.json();
};

export const cleanBookDetails = (volumeInfoDetails) => {
  const cleanDetails = { ...volumeInfoDetails };

  if (!cleanDetails.imageLinks)
    cleanDetails.imageLinks.smallThumbnail = '../src/assets/transparent.png';

  if (!cleanDetails.authors) cleanDetails.authors = '?';

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
