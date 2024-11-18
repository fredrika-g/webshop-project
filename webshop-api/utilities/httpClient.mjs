export const fetchData = async (endpoint, body = null) => {
  const url = `${process.env.BASE_URL}${process.env.DB_PORT}/${endpoint}`;
  try {
    const response = body ? await fetch(url, body) : await fetch(url);
    console.log(response);

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error(
        `Something went wrong in fetchData function: ${endpoint}`
      );
    }
  } catch (error) {
    console.log(error);
    throw new Error(`An error occured in fetchData: ${error}`);
  }
};
