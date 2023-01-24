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
