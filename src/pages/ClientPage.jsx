import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosInstance.js';
import '../styles/clientPage.css';

export default function ClientPage() {
  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState({ clientname: '', Projects: '' });
  const [selectedClient, setSelectedClient] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

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
    if (isEditing) {
      setSelectedClient({ ...selectedClient, [field]: value });
    } else {
      setNewClient({ ...newClient, [field]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const clientData = isEditing ? selectedClient : newClient;
      const response = isEditing
        ? await axios.put(`/clients/${selectedClient._id}`, clientData)
        : await axios.post('/clients', clientData);
      const updatedClients = isEditing
        ? clients.map((client) =>
            client._id === response.data.result._id ? response.data.result : client
          )
        : [...clients, response.data.result];
      setClients(updatedClients);
      resetForm();
    } catch (error) {
      console.error('Failed to submit client:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/clients/${id}`);
      setClients(clients.filter((client) => client._id !== id));
    } catch (error) {
      console.error('Failed to delete client:', error);
    }
  };

  const resetForm = () => {
    setNewClient({ clientname: '', Projects: '' });
    setSelectedClient(null);
    setIsEditing(false);
  };

  return (
    <div className="client-container">
      <div className="client-section">
        <h2>Current Clients</h2>
        <ul className="client-list">
          {clients.map((client) => (
            <li key={client._id}>
              {client.clientname} - {client.Projects}
              <div className="client-actions">
                <button onClick={() => { setSelectedClient(client); setIsEditing(true); }}>Edit</button>
                <button onClick={() => handleDelete(client._id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="client-section">
        <h2>{isEditing ? 'Edit Client' : 'Create Client'}</h2>
        <form className="client-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Client Name"
            value={isEditing ? selectedClient.clientname : newClient.clientname}
            onChange={(e) => handleInputChange(e, 'clientname')}
          />
          <input
            type="text"
            placeholder="Projects"
            value={isEditing ? selectedClient.Projects : newClient.Projects}
            onChange={(e) => handleInputChange(e, 'Projects')}
          />
          <button type="submit">{isEditing ? 'Update' : 'Create'}</button>
          {isEditing && (
            <button type="button" onClick={resetForm}>
              Cancel
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
