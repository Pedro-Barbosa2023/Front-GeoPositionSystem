import * as requesterService from '../RequesterService/requesterService';


const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export const GetData = async () => {
  let dadosLocais = {};
  await requesterService
    .GetDados()
    .then((res) => {
      dadosLocais = res.data;
    })
    

  return { dadosLocais };
};

