export const fetchData = async (endpoint, body = null) => {
  const url = `${process.env.BASE_URL}${process.env.DB_PORT}/${endpoint}`;

  try {
    const response = body ? await fetch(url, body) : await fetch(url);

    if (response.status === 200) {
      const result = await response.json();
      console.log(result);
      return result;
    } else {
      throw new Error(`Something went wrong in fetchData: ${endpoint}`);
    }
  } catch (error) {
    console.log(error);
    throw new Error(`An error occured in fetchData: ${error}`);
  }
};
