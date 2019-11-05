import axios from "axios";

const url = "https://front-test.beta.aviasales.ru";
export const getSearchId = () => axios(`${url}/search`);
export const getTickets = searchId =>
  axios(`${url}/tickets?searchId=${searchId}`);
