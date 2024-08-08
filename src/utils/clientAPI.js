import axiosInstance from './axiosInstance';

export const fetchClients = async () => {
    const response = await axiosInstance.get('/clients');
    return response.data.result;
};

export const createClient = async (clientData) => {
    const response = await axiosInstance.post('/clients', clientData);
    return response.data;
};

export const updateClient = async (id, clientData) => {
    const response = await axiosInstance.put(`/clients/${id}`, clientData);
    return response.data;
};

export const deleteClient = async (id) => {
    const response = await axiosInstance.delete(`/clients/${id}`);
    return response.data;
};
