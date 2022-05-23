const API_URL = import.meta.env.VITE_API_URL
const API_SEARCH_URL = import.meta.env.VITE_API_SEARCH_URL
const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY

export const fetchPhotos = (page: number = 1) =>
  `${API_URL}?page=${page}&per_page=20&client_id=${ACCESS_KEY}`

export const searchPhotos = (searchTerm: string, page: number = 1) =>
  `${API_SEARCH_URL}?query=${searchTerm}&page=${page}&per_page=15&client_id=${ACCESS_KEY}`
