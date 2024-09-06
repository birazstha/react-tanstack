import axios from "axios";

export async function fetchEvents() {
  const response = await axios.get("http://127.0.0.1:8000/api/events");
  return response.data.data;
}
