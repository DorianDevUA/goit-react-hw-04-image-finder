import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43520057-d4110ce2722b475a1deefaa82';

axios.defaults.baseURL = BASE_URL;

export const fetchGallery = async (searchQuery, page = 1) => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: `${searchQuery}`,
    page: `${page}`,
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const response = await axios(`?${searchParams}`);
  console.log(response);
  return response.data;
};
