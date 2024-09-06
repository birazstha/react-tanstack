import axios from "axios";

export async function fetchEvents() {
  const response = await axios.get("http://api.birajshrestha.com.np/api/events");
  return response.data.data;
}
