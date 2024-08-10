import axiosInstance from './axiosInstance';

// Fetch all allocations
export const fetchAllocations = async () => {
    try {
        const response = await axiosInstance.get('/allocations');
        return response.data.result;
    } catch (error) {
        console.error('Error fetching allocations:', error);
        throw error;
    }
};

// Fetch an allocation by ID
export const fetchAllocationById = async (id) => {
    try {
        const response = await axiosInstance.get(`/allocations/${id}`);
        return response.data.result;
    } catch (error) {
        console.error(`Error fetching allocation with ID ${id}:`, error);
        throw error;
    }
};

// Create a new allocation
export const createAllocation = async (allocationData) => {
    try {
        const response = await axiosInstance.post('/allocations', allocationData);
        return response.data.result;
    } catch (error) {
        console.error('Error creating allocation:', error);
        throw error;
    }
};

// Update an allocation
export const updateAllocation = async (id, allocationData) => {
    try {
        const response = await axiosInstance.put(`/allocations/${id}`, allocationData);
        return response.data.result;
    } catch (error) {
        console.error(`Error updating allocation with ID ${id}:`, error);
        throw error;
    }
};

// Delete an allocation
export const deleteAllocation = async (id) => {
    try {
        const response = await axiosInstance.delete(`/allocations/${id}`);
        return response.data.result;
    } catch (error) {
        console.error(`Error deleting allocation with ID ${id}:`, error);
        throw error;
    }
};
