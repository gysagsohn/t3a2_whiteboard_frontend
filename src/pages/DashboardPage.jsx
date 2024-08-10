import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAllocations } from '../utils/allocationAPI';
import { fetchAssets } from '../utils/assetAPI';
import { fetchClients } from '../utils/clientAPI';
import { fetchOperators } from '../utils/operatorAPI';

export default function DashboardPage() {
    const [allocations, setAllocations] = useState([]);
    const [assets, setAssets] = useState([]);
    const [clients, setClients] = useState([]);
    const [operators, setOperators] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadAllocations();
        loadAssets();
        loadClients();
        loadOperators();
    }, []);

    const loadAllocations = async () => {
        try {
            const data = await fetchAllocations();
            setAllocations(data || []);
        } catch (error) {
            console.error('Failed to load allocations', error);
        }
    };

    const loadAssets = async () => {
        try {
            const data = await fetchAssets();
            setAssets(data || []);
        } catch (error) {
            console.error('Failed to load assets', error);
        }
    };

    const loadClients = async () => {
        try {
            const data = await fetchClients();
            setClients(data || []);
        } catch (error) {
            console.error('Failed to load clients', error);
        }
    };

    const loadOperators = async () => {
        try {
            const data = await fetchOperators();
            setOperators(data || []);
        } catch (error) {
            console.error('Failed to load operators', error);
        }
    };

    return (
        <div>
            <h1>Dashboard</h1>

            <section>
                <h2>Allocations</h2>
                <ul>
                    {allocations.map(allocation => (
                        <li key={allocation._id}>
                            {allocation.asset.assetnumber} - {allocation.operator.operatorName} - {allocation.client.clientname} - {allocation.shiftType}
                        </li>
                    ))}
                </ul>
                <button onClick={() => navigate('/allocation')}>Go to Allocations</button>
            </section>

            <section>
                <h2>Assets</h2>
                <ul>
                    {assets.map(asset => (
                        <li key={asset._id}>
                            {asset.assetnumber} - {asset.assetType.join(', ')} - {asset.rego}
                        </li>
                    ))}
                </ul>
                <button onClick={() => navigate('/asset')}>Go to Assets</button>
            </section>

            <section>
                <h2>Clients</h2>
                <ul>
                    {clients.map(client => (
                        <li key={client._id}>
                            {client.clientname} - {client.Projects}
                        </li>
                    ))}
                </ul>
                <button onClick={() => navigate('/client')}>Go to Clients</button>
            </section>

            <section>
                <h2>Operators</h2>
                <ul>
                    {operators.map(operator => (
                        <li key={operator._id}>
                            {operator.operatorName} - {operator.licenceClass.join(', ')} - Days: {operator.availableDays.join(', ')}
                        </li>
                    ))}
                </ul>
                <button onClick={() => navigate('/operator')}>Go to Operators</button>
            </section>
        </div>
    );
}
