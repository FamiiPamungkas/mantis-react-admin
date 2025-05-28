import { create } from 'zustand/react';

const useAuthStore = create((setState) => ({
  token: localStorage.getItem('token'),
  refreshToken: localStorage.getItem('refreshToken'),
  isAuthenticated: !!localStorage.getItem('token'),
  login: (token, refreshToken) => {
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
    setState({ token, refreshToken, isAuthenticated: true });
  },
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    setState({ token: null, refreshToken: null, isAuthenticated: false });
  }
}));

export default useAuthStore;
