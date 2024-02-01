export default async function GetBatteriesRequest(){
  const myHeaders = new Headers();
  const requestOptions = {
    method : "GET",
    headers: myHeaders,
  };
  const resp = await fetch("http://localhost:8080/api/v1/batteries/JSON", requestOptions).then((response) => response.json()).then((result) => result).catch(error => console.log('error', error));;
  return resp;
};
export async function GetBatterieRequest(searchTerm: number){
  console.log(searchTerm);
  const myHeaders = new Headers();
  const requestOptions = {
    method : "GET",
    headers: myHeaders,
  };
  const resp = await fetch("http://localhost:8080/api/v1/batteries/get/" + searchTerm, requestOptions).then((response) => response.json()).then((result) => result).catch(error => console.log('error', error));;
  return resp;
};
