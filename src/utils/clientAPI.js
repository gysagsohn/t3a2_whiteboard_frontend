import axiosInstance from './axiosInstance';

// Function to fetch all clients from the API
export const fetchClients = async () => {
    const response = await axiosInstance.get('/clients');
    return response.data.result;
};

// Function to create a new client in the API
export const createClient = async (clientData) => {
    const response = await axiosInstance.post('/clients', clientData);
    return response.data;
};

// Function to update an existing client in the API
export const updateClient = async (id, clientData) => {
    const response = await axiosInstance.put(`/clients/${id}`, clientData);
    return response.data;
};

// Function to delete a client from the API
export const deleteClient = async (id) => {
    const response = await axiosInstance.delete(`/clients/${id}`);
    return response.data;
};
