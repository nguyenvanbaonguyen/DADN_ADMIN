import axiosClient, { axiosClientNoToken } from '../axiosClient';

const authApi = {
  login: params => axiosClientNoToken.post('/api/v1/auth/login', params),
  refreshToken: refresh_token => {
    const url = '/api/v1/auth/refresh-token';
    return axiosClientNoToken.post(url, { refresh_token });
  },
  getUserInfo: () => {
    const url = '/api/v1/users/me';
    return axiosClient.get(url);
  },
  getAllUser: () => {
    const url = '/api/v1/users';
    return axiosClient.get(url);
  },
  getAllDevice: () => {
    const url = '/api/v1/devices';
    return axiosClient.get(url);
  },
  getAllPet: () => {
    const url = '/api/v1/pets';
    return axiosClient.get(url);
  },
  getUser: (user_id) => {
    const url = `/api/v1/users/${user_id}`;
    return axiosClient.get(url);
  },
  getDevice: (device_id) => {
    const url = `/api/v1/devices/${device_id}`;
    return axiosClient.get(url);
  },
  getPet: (pet_id) => {
    const url = `/api/v1/pets/${pet_id}`;
    return axiosClient.get(url);
  },
  activeDevice: (device_id) => {
    const url = `/api/v1/devices/${device_id}/activate`;
    return axiosClient.patch(url);
  },
  deactiveDevice: (device_id) => {
    const url = `/api/v1/devices/${device_id}/deactivate`;
    return axiosClient.patch(url);
  },

};

export default authApi;
