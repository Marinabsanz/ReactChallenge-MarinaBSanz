import { AnyARecord } from "dns";


export const getDataFromApi = () => {
  const url = "http://localhost:3000/api/v1/posts";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const eachData = data.results.map((info:any) => {
        return {
          id: info.id,
          title: info.title,
          content: info.content,
          lat: info.lat,
          gender: info.gender,
          image_url: info.image_url,
          long: info.long,
          created_at: info.created_at,
          updated_at: info.updated_at,
        };
      });
        
      console.table(eachData);

      return eachData;
    });
};

export default getDataFromApi;
