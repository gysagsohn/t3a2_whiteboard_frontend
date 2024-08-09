import axiosInstance from './axiosInstance';

export const fetchOperators = async () => {
    const response = await axiosInstance.get('/operators');
    return response.data.result;
};

export const createOperator = async (operatorData) => {
    const response = await axiosInstance.post('/operators', operatorData);
    return response.data.result;
};

export const updateOperator = async (id, operatorData) => {
    const response = await axiosInstance.put(`/operators/${id}`, operatorData);
    return response.data.result;
};

export const deleteOperator = async (id) => {
    await axiosInstance.delete(`/operators/${id}`);
};
