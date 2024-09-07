import axios from "axios";

export async function fetchEvents({ signal, keyword }) {
  let url = `http://api.birajshrestha.com.np/api/events`;

  if (keyword !== undefined) {
    url = `http://api.birajshrestha.com.np/api/events?keyword=${keyword}`;
  }

  const response = await axios.get(url, { signal: signal });
  return response.data.data;
}

export async function createEvent(data) {
  const response = axios.post(
    "http://api.birajshrestha.com.np/api/events",
    data
  );

  console.log(response);
}
