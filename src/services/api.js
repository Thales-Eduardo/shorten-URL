import axios from "axios";

export const key = "8ae3ef4e00ae74ca035e0f6642ea8b93f67a4f02";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${key}`,
  },
});

export default api;

// 8ae3ef4e00ae74ca035e0f6642ea8b93f67a4f02

// fetch("https://api-ssl.bitly.com/v4/shorten", {
//   method: "POST",
//   headers: {
//     Authorization: "Bearer {TOKEN}",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     long_url: "https://dev.bitly.com",
//     domain: "bit.ly",
//     group_guid: "Ba1bc23dE4F",
//   }),
// });
