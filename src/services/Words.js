import axios from "axios";
import { ApiEndpoint } from "../settings/API";

export const getRawData = api => {
  return axios.get(api).then(response => {
    return response.data.feed.entry;
  });
};

export const getWords = () => {
  return getRawData(ApiEndpoint).then(result => {
    const words = [];

    for (let i = 0; i < result.length; i += 1) {
      words.push(result[i].content.$t);
    }

    return words;
  });
};
