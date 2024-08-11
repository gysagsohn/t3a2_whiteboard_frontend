import axiosInstance from './axiosInstance';

// Function to fetch all operators from the API
export const fetchOperators = async () => {
    const response = await axiosInstance.get('/operators');
    return response.data.result;
};

// Function to create a new operator in the API
export const createOperator = async (operatorData) => {
    const response = await axiosInstance.post('/operators', operatorData);
    return response.data.result;
};

// Function to update an existing operator in the API
export const updateOperator = async (id, operatorData) => {
    const response = await axiosInstance.put(`/operators/${id}`, operatorData);
    return response.data.result;
};

// Function to delete an operator from the API
export const deleteOperator = async (id) => {
    await axiosInstance.delete(`/operators/${id}`);
};
