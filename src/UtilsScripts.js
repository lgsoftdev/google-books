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
