import axiosInstance from './axiosInstance';

// Fetch all assets
export const fetchAssets = async () => {
    try {
        const response = await axiosInstance.get('/assets');
        return response.data;
    } catch (error) {
        console.error('Error fetching assets:', error);
        throw error;
    }
};

// Fetch an asset by ID
export const fetchAssetById = async (id) => {
    try {
        const response = await axiosInstance.get(`/assets/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching asset with ID ${id}:`, error);
        throw error;
    }
};

// Create a new asset
export const createAsset = async (assetData) => {
    try {
        const response = await axiosInstance.post('/assets', assetData);
        return response.data;
    } catch (error) {
        console.error('Error creating asset:', error);
        throw error;
    }
};

// Update an asset
export const updateAsset = async (id, assetData) => {
    try {
        const response = await axiosInstance.put(`/assets/${id}`, assetData);
        return response.data;
    } catch (error) {
        console.error(`Error updating asset with ID ${id}:`, error);
        throw error;
    }
};

// Delete an asset
export const deleteAsset = async (id) => {
    try {
        const response = await axiosInstance.delete(`/assets/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting asset with ID ${id}:`, error);
        throw error;
    }
};
