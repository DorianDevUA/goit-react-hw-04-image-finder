import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43520057-d4110ce2722b475a1deefaa82';

axios.defaults.baseURL = BASE_URL;

const fetchGallery = async (searchQuery, page = 1) => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: `${searchQuery}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: `${page}`,
    per_page: 12,
  });

  const response = await axios(`?${searchParams}`);
  return response.data;
};

export default fetchGallery;
