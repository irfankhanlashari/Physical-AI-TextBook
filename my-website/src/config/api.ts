// API Configuration
const API_BASE_URL = typeof window !== 'undefined'
  ? (window.location.origin.includes('localhost')
      ? window.location.origin.replace(window.location.port, '8000')
      : process.env.REACT_APP_API_BASE_URL || 'https://your-railway-backend-url.onrender.com')  // Use Railway deployment URL
  : process.env.REACT_APP_API_BASE_URL || 'https://your-railway-backend-url.onrender.com';

export const API_ENDPOINTS = {
  CHAT: `${API_BASE_URL}/api/v1/chat/public`,  // Use public endpoint that doesn't require auth
  CHAT_AUTHENTICATED: `${API_BASE_URL}/api/v1/chat`,  // Keep original for authenticated users
  CHAT_STREAM: `${API_BASE_URL}/api/v1/chat/stream`,
  CHAT_HISTORY: (sessionId: string) => `${API_BASE_URL}/api/v1/chat/history/${sessionId}`,
  INGEST: `${API_BASE_URL}/api/v1/ingest`,
  INGEST_UPLOAD: `${API_BASE_URL}/api/v1/ingest/upload`,
  AUTH_LOGIN: `${API_BASE_URL}/api/v1/auth/login`,
  AUTH_REGISTER: `${API_BASE_URL}/api/v1/auth/register`,
  AUTH_PROFILE: `${API_BASE_URL}/api/v1/auth/profile`,
  TRANSLATE: `${API_BASE_URL}/api/v1/translate`,
  HEALTH: `${API_BASE_URL}/api/v1/health`,
  METRICS: `${API_BASE_URL}/api/v1/metrics`,
};