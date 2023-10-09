import * as requesterService from '../RequesterService/requesterService';


const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export const GetData = async () => {
  let data = {};
  await requesterService
    .GetDados()
    .then((res) => {
      data = res.data
    })
    .catch((error) => {
      console.log(error)
      return false;
    });

  return data;
};
