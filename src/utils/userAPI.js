import axios from './axiosInstance';  // Ensure the path matches your project structure

// Fetch all users
export const fetchUsers = async () => {
    try {
        const response = await axios.get('/users');
        return response.data.result;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;  // Rethrowing the error so the calling function can handle it
    }
};

// Create a new user (Signup)
export const createUser = async (userData) => {
    try {
        const response = await axios.post('/users/signup', userData);  // Updated to use '/signup' route
        return response.data.result;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

// Update an existing user
export const updateUser = async (userId, userData) => {
    try {
        const response = await axios.put(`/users/${userId}`, userData);
        return response.data.result;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};

// Delete a user
export const deleteUser = async (userId) => {
    try {
        const response = await axios.delete(`/users/${userId}`);
        return response.data.result;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};

// Login User
export const loginUser = async (userData) => {
    try {
        const response = await axios.post('/users/login', userData);
        return response.data; // Return the full response data, including the token
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};
