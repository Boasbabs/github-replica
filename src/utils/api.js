/**
 * API
 * This holds the object to make various API calls
 */
import axios from "axios";
import { API_PATH_BASE } from "./constants";

export const userAPICall = {
  getBio(username) {
    username = username.toLowerCase().trim();
    return axios.get(`${API_PATH_BASE}/${username}`).then(response => {
      return response.data;
    });
  },
  getRepos(username) {
    username = username.toLowerCase().trim();
    return axios.get(`${API_PATH_BASE}/${username}/repos`).then(response => {
      return response.data;
    });
  },
  getFollowers(username) {
    username = username.toLowerCase().trim();
    return axios.get(`${API_PATH_BASE}/${username}/followers`).then(response => {
      return response.data;
    });
  },
  getFollowing(username) {
    username = username.toLowerCase().trim();
    return axios.get(`${API_PATH_BASE}/${username}/following`).then(response => {
      return response.data;
    });
  },
};
