import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAllocations } from '../utils/allocationAPI';
import { fetchAssets } from '../utils/assetAPI';
import { fetchClients } from '../utils/clientAPI';
import { fetchOperators } from '../utils/operatorAPI';
import '../styles/dashbaordPage.css'; // Corrected the typo in the import

// Define the DashboardPage component
export default function DashboardPage() {
  // Set up state variables to store data for allocations, assets, clients, and operators
  const [allocations, setAllocations] = useState([]);
  const [assets, setAssets] = useState([]);
  const [clients, setClients] = useState([]);
  const [operators, setOperators] = useState([]);
  // Initialize the useNavigate hook for page navigation
  const navigate = useNavigate();

  // Load data when the component is mounted
  useEffect(() => {
    loadAllocations();
    loadAssets();
    loadClients();
    loadOperators();
    // Empty dependency array means this runs once when the component mounts
  }, []);

  // Function to fetch and set allocations data
  const loadAllocations = async () => {
    try {
      const data = await fetchAllocations();
      setAllocations(data || []);
    } catch (error) {
      console.error('Failed to load allocations', error);
    }
  };

  // Function to fetch and set assets data
  const loadAssets = async () => {
    try {
      const data = await fetchAssets();
      setAssets(data || []);
    } catch (error) {
      console.error('Failed to load assets', error);
    }
  };

  // Function to fetch and set clients data
  const loadClients = async () => {
    try {
      const data = await fetchClients();
      setClients(data || []);
    } catch (error) {
      console.error('Failed to load clients', error);
    }
  };

  // Function to fetch and set operators data
  const loadOperators = async () => {
    try {
      const data = await fetchOperators();
      setOperators(data || []);
    } catch (error) {
      console.error('Failed to load operators', error);
    }
  };

  return (
    <div className="dashboard-container">
      <section className="dashboard-section">
        <h2>Allocations</h2>
        <ul className="dashboard-list">
          {allocations.map(allocation => (
            <li key={allocation._id}>
              {/* Fallback for asset number */}
              {allocation.asset?.assetnumber || 'No Asset Assigned'} - 
              {/* Fallback for operator name */}
              {allocation.operator?.operatorName || 'No Operator Assigned'} - 
              {/* Fallback for client name */}
              {allocation.client?.clientname || 'No Client Assigned'} - 
              {allocation.shiftType}
            </li>
          ))}
        </ul>
        <button onClick={() => navigate('/allocation')}>Go to Allocations</button>
      </section>

      <section className="dashboard-section">
        <h2>Assets</h2>
        <ul className="dashboard-list">
          {assets.map(asset => (
            <li key={asset._id}>
              {asset.assetnumber} - 
              {/* Fallback for asset type */}
              {asset.assetType?.join(', ') || 'No Asset Type'} - 
              {asset.rego}
            </li>
          ))}
        </ul>
        <button onClick={() => navigate('/asset')}>Go to Assets</button>
      </section>

      <section className="dashboard-section">
        <h2>Clients</h2>
        <ul className="dashboard-list">
          {clients.map(client => (
            <li key={client._id}>
              {client.clientname} - 
              {/* Fallback for projects */}
              {client.Projects || 'No Projects Assigned'}
            </li>
          ))}
        </ul>
        <button onClick={() => navigate('/client')}>Go to Clients</button>
      </section>

      <section className="dashboard-section">
        <h2>Operators</h2>
        <ul className="dashboard-list">
          {operators.map(operator => (
            <li key={operator._id}>
              {operator.operatorName} - 
              {/* Fallback for licence class */}
              {operator.licenceClass?.join(', ') || 'No Licence Class'} - 
              {/* Fallback for available days */}
              Days: {operator.availableDays?.join(', ') || 'No Available Days'}
            </li>
          ))}
        </ul>
        <button onClick={() => navigate('/operator')}>Go to Operators</button>
      </section>
    </div>
  );
}
