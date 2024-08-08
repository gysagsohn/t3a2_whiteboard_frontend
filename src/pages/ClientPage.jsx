import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosInstance.js';  // Ensure this path is correct

export default function ClientPage() {
    const [clients, setClients] = useState([]);
    const [newClient, setNewClient] = useState({ clientname: '', Projects: '' });
    const [selectedClient, setSelectedClient] = useState(null);

    useEffect(() => {
        fetchClients();
    }, []);

    const fetchClients = async () => {
        try {
            const response = await axios.get('/clients');
            setClients(response.data.result);
        } catch (error) {
            console.error('Failed to fetch clients:', error);
        }
    };

    const handleInputChange = (event, field) => {
        const { value } = event.target;
        if (selectedClient) {
            setSelectedClient({ ...selectedClient, [field]: value });
        } else {
            setNewClient({ ...newClient, [field]: value });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const clientData = selectedClient || newClient;
            const response = selectedClient ? await axios.put(`/clients/${selectedClient._id}`, clientData) : await axios.post('/clients', clientData);
            const updatedClients = selectedClient ? clients.map(client => client._id === response.data.result._id ? response.data.result : client) : [...clients, response.data.result];
            setClients(updatedClients);
            setSelectedClient(null);
            setNewClient({ clientname: '', Projects: '' });
        } catch (error) {
            console.error('Failed to submit client:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/clients/${id}`);
            setClients(clients.filter(client => client._id !== id));
        } catch (error) {
            console.error('Failed to delete client:', error);
        }
    };

    return (
        <div>
            <h1>Clients</h1>
            <ul>
                {clients.map(client => (
                    <li key={client._id}>
                        {client.clientname} - {client.Projects}
                        <button onClick={() => setSelectedClient(client)}>Edit</button>
                        <button onClick={() => handleDelete(client._id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Client Name" value={selectedClient ? selectedClient.clientname : newClient.clientname} onChange={(e) => handleInputChange(e, 'clientname')} />
                <input type="text" placeholder="Projects" value={selectedClient ? selectedClient.Projects : newClient.Projects} onChange={(e) => handleInputChange(e, 'Projects')} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
