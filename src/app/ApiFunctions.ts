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
  console.log("searchQuery", searchQuery);
  const request = new Request(`${serverURL}/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Headers": "Content-Type",
    },
    mode: "cors",
    body: JSON.stringify({ searchQuery: searchQuery }),
  });
  return fetch(request)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
