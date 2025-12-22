// Get the base API URL from environment variable
// In production (Vercel), this will be your Render backend URL
// In development, it will be empty (uses Vite proxy)
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

// Helper to construct full API URLs
export const getApiUrl = (path) => {
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${API_BASE_URL}${cleanPath}`;
};
