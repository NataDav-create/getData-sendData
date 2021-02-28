const getData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error by address ${url}, status of error is ${response}`);
  }
  return await response.json();
};

const data = getData('database/dataBase.json').then((data) => {
  console.log(data)
});

const sendData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    body: data,
  });
  if (!response.ok) {
    throw new Error(`Error by address ${url}, status of error is ${response}`);
  }
  return await response.json();
}


// const queryString = 'https://jsonplaceholder.typicode.com/todos/1';
// const getData = async (url) => {
//   const response = await fetch(url);
//   if (!response.ok) {
//     throw new Error(`Error by address ${url}, status of error is ${response}`);
//   }
//   let data = await response.json();
//   let result = await data;
//   console.log(result)
//   return result;
// };

// getData(queryString)