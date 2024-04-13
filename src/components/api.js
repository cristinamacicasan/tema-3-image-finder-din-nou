

import axios from 'axios';

const API_KEY = '42285080-c22d5f6a90f49c0ab863c2d8a'; 

const fetchImages = async (searchQuery) => {
  try {
    const response = await axios.get(`https://pixabay.com/api/?key=42285080-c22d5f6a90f49c0ab863c2d8a&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};

export { fetchImages };
