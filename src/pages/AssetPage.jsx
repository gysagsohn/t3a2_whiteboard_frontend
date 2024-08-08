import React, { useEffect, useState } from 'react';
import { fetchAssets, createAsset, updateAsset, deleteAsset } from '../utils/assetAPI';

export default function AssetPage() {
    const [assets, setAssets] = useState([]);
    const [newAsset, setNewAsset] = useState({
        assetnumber: '',
        assetType: [],
        rego: '',
        licenceClass: []
    });
    const [selectedAsset, setSelectedAsset] = useState(null);

    useEffect(() => {
        loadAssets();
    }, []);

    const loadAssets = async () => {
        try {
            const data = await fetchAssets();
            if (data && data.result) {
                setAssets(data.result);
            } else {
                setAssets([]);
                console.error('No assets data found');
            }
        } catch (error) {
            console.error('Failed to load assets', error);
        }
    };

    const handleCreateAsset = async () => {
        try {
            const createdAsset = await createAsset(newAsset);
            setAssets([...assets, createdAsset]);
            setNewAsset({ assetnumber: '', assetType: [], rego: '', licenceClass: [] });
        } catch (error) {
            console.error('Failed to create asset', error);
        }
    };

    const handleUpdateAsset = async (id) => {
        try {
            const updatedAsset = await updateAsset(id, {
                ...selectedAsset,
                assetType: selectedAsset.assetType.split(', '),
                licenceClass: selectedAsset.licenceClass.split(', ')
            });
            setAssets(assets.map(a => a._id === id ? updatedAsset : a));
            setSelectedAsset(null);
        } catch (error) {
            console.error('Failed to update asset', error);
        }
    };

    const handleDeleteAsset = async (id) => {
        try {
            await deleteAsset(id);
            setAssets(assets.filter(a => a._id !== id));
        } catch (error) {
            console.error('Failed to delete asset', error);
        }
    };

    const handleInputChange = (e, setFunction, field) => {
        if (field === 'assetType' || field === 'licenceClass') {
            const values = e.target.value.split(',').map(item => item.trim());
            setFunction(prev => ({ ...prev, [field]: values }));
        } else {
            setFunction(prev => ({ ...prev, [field]: e.target.value }));
        }
    };

    return (
        <div>
            <h1>Asset Page</h1>
            <ul>
                {assets.map(a => (
                    <li key={a._id}>
                        {a.assetnumber} - {a.assetType.join(', ')} - {a.rego} - {a.licenceClass.join(', ')}
                        <button onClick={() => handleDeleteAsset(a._id)}>Delete</button>
                        <button onClick={() => setSelectedAsset({
                            ...a,
                            assetType: a.assetType.join(', '),
                            licenceClass: a.licenceClass.join(', ')
                        })}>Edit</button>
                    </li>
                ))}
            </ul>
            <div>
                <h2>Create Asset</h2>
                <input type="text" placeholder="Asset Number" value={newAsset.assetnumber} onChange={(e) => handleInputChange(e, setNewAsset, 'assetnumber')} />
                <input type="text" placeholder="Asset Type" value={newAsset.assetType.join(', ')} onChange={(e) => handleInputChange(e, setNewAsset, 'assetType')} />
                <input type="text" placeholder="Rego" value={newAsset.rego} onChange={(e) => handleInputChange(e, setNewAsset, 'rego')} />
                <input type="text" placeholder="Licence Class" value={newAsset.licenceClass.join(', ')} onChange={(e) => handleInputChange(e, setNewAsset, 'licenceClass')} />
                <button onClick={handleCreateAsset}>Create</button>
            </div>
            {selectedAsset && (
                <div>
                    <h2>Edit Asset</h2>
                    <input type="text" placeholder="Asset Number" value={selectedAsset.assetnumber} onChange={(e) => handleInputChange(e, setSelectedAsset, 'assetnumber')} />
                    <input type="text" placeholder="Asset Type" value={selectedAsset.assetType} onChange={(e) => handleInputChange(e, setSelectedAsset, 'assetType')} />
                    <input type="text" placeholder="Rego" value={selectedAsset.rego} onChange={(e) => handleInputChange(e, setSelectedAsset, 'rego')} />
                    <input type="text" placeholder="Licence Class" value={selectedAsset.licenceClass} onChange={(e) => handleInputChange(e, setSelectedAsset, 'licenceClass')} />
                    <button onClick={() => handleUpdateAsset(selectedAsset._id)}>Update</button>
                    <button onClick={() => setSelectedAsset(null)}>Cancel</button>
                </div>
            )}
        </div>
    );
}
