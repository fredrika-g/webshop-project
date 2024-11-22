export const fetchData = async (endpoint, body = null) => {
  const dbUrl = 'http://localhost:3000/';
  const url = `${dbUrl}${endpoint}`;

  try {
    const response = body ? await fetch(url, body) : await fetch(url);

    if (response.status === 200 || response.status === 201) {
      const result = await response.json();
      return result;
    } else {
      throw new Error(`Something went wrong in fetchData: ${endpoint}`);
    }
  } catch (error) {
    console.log(error);
    throw new Error(`An error occured in fetchData: ${error}`);
  }
};
