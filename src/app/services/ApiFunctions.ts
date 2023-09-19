import axios from "axios";

export let serverURL = "https://cacarrot-server.herokuapp.com/news";
export let socketURL = "https://cacarrot-server.herokuapp.com/";
export const localServerURL = "http://localhost:5000/news";
export const localSocketURL = "http://localhost:5000/";

if (process.env.NODE_ENV == `development`) {
  serverURL = localServerURL;
  socketURL = localSocketURL;
}

export function getNews({ queryKey }: any) {
  const [_, searchQuery] = queryKey;
  return axios
    .get(`${serverURL}/all?searchQuery=${searchQuery}`)
    .then((res) => res.data);
}
