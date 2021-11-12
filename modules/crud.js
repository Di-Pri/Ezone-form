const endpoint = "https://kea2semester-d82c.restdb.io/rest/ezone";

const headers = {
  "Content-Type": "application/json; charset=utf-8",
  "x-apikey": "603537b05ad3610fb5bb658d",
  "cache-control": "no-cache",
};

export function post(data, callback) {
  const postData = JSON.stringify(data);
  fetch(endpoint, {
    method: "post",
    headers,
    body: postData,
  })
    .then((res) => res.json())
    .then((data) => {
      callback(data);
      console.log("Posted data:", data);
    });
}
