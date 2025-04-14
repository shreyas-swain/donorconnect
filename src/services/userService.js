import api from './api';

export const getUserProfile = async (userId) => {
  const response = await api.get(`/users/${userId}`);
  return response.data;
};

export const updateUserProfile = async (userId, profileData) => {
  const response = await api.put(`/users/${userId}`, profileData);
  return response.data;
};