import axios from "axios";

const KEY = "AIzaSyBLQ7tW1fctaXszWQ7ZLe6XpX0tDa03J4Q";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxresult: 5,
    key: KEY,
    type: "video",
  },
});
