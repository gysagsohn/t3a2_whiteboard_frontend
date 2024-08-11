import React, { useEffect, useState } from 'react';
import { fetchAssets, createAsset, updateAsset, deleteAsset } from '../utils/assetAPI';
import axiosInstance from '../utils/axiosInstance';
import '../styles/assetPage.css';

export default function AssetPage() {
    // State variables to manage assets, asset type options, and license class options
   const [assets, setAssets] = useState([]);
   const [assetTypeOptions, setAssetTypeOptions] = useState([]);
   const [licenceClassOptions, setLicenceClassOptions] = useState([]);
    // State variables to manage new asset data and selected asset for editing
   const [newAsset, setNewAsset] = useState({
       assetnumber: '',
       assetType: [],
       rego: '',
       licenceClass: []
   });
   const [selectedAsset, setSelectedAsset] = useState(null);
   const [isEditing, setIsEditing] = useState(false);

    // useEffect hook to load assets and options when the component mounts
   useEffect(() => {
       const loadAssets = async () => {
           try {
               const assetsData = await fetchAssets();
               setAssets(assetsData || []);
           } catch (error) {
               console.error('Failed to load assets', error);
           }
       };

       const loadAssetTypeOptions = async () => {
           try {
               const response = await axiosInstance.get('/assets/asset-types');
               setAssetTypeOptions(response.data.assetTypes || []);
           } catch (error) {
               console.error('Failed to load asset type options', error);
           }
       };

       const loadLicenceClassOptions = async () => {
           try {
               const response = await axiosInstance.get('/assets/licence-classes');
               setLicenceClassOptions(response.data.licenceClasses || []);
           } catch (error) {
               console.error('Failed to load licence class options', error);
           }
       };

       // Load assets and options when the component mounts
       loadAssets();
       loadAssetTypeOptions();
       loadLicenceClassOptions();
   }, []);

     // Function to handle creating a new asset
   const handleCreateAsset = async () => {
       try {
           const createdAsset = await createAsset(newAsset);
           setAssets([...assets, createdAsset.result]);
            // Reset the new asset form after creation
           setNewAsset({ assetnumber: '', assetType: [], rego: '', licenceClass: [] });
       } catch (error) {
           console.error('Failed to create asset', error);
       }
   };

   // Function to handle updating an existing asset
   const handleUpdateAsset = async () => {
       if (selectedAsset) {
           try {
               const updatedAsset = await updateAsset(selectedAsset._id, selectedAsset);
                // Update the assets list with the updated asset
               setAssets(assets.map(a => a._id === updatedAsset.result._id ? updatedAsset.result : a));
               setSelectedAsset(null);
               setIsEditing(false); // Exit editing mode
           } catch (error) {
               console.error('Failed to update asset', error);
           }
       }
   };

   // Function to handle deleting an asset
   const handleDeleteAsset = async (id) => {
       try {
           await deleteAsset(id);
           // Remove the deleted asset from the list
           setAssets(assets.filter(a => a._id !== id));
       } catch (error) {
           console.error('Failed to delete asset', error);
       }
   };

    // Function to handle changes in form input fields
   const handleInputChange = (e) => {
       const { name, value } = e.target;

       if (isEditing && selectedAsset) {
        // Update the selected asset in editing mode
           setSelectedAsset(prev => ({ ...prev, [name]: value }));
       } else {
        // Update the new asset data
           setNewAsset(prev => ({ ...prev, [name]: value }));
       }
   };

    // Function to handle changes in asset type or license class selection
   const handleSelectionChange = (type, field) => {
       setNewAsset(prev => ({
           ...prev,
           [field]: [type]
       }));
   };

   // Function to handle selection of an asset for editing
   const handleAssetSelection = (asset) => {
       setSelectedAsset(asset);
       setIsEditing(true); // Enter editing mode
   };

   return (
       <div className="asset-container">
           <h1>Asset Management</h1>

           <section className="asset-section">
               <h2>Asset List</h2>
               <ul className="asset-list">
                   {assets.map(asset => (
                       <li key={asset._id}>
                           {asset.assetnumber} - {Array.isArray(asset.assetType) ? asset.assetType.join(', ') : ''} - {asset.rego} - {Array.isArray(asset.licenceClass) ? asset.licenceClass.join(', ') : ''}
                           <div className="asset-actions">
                               <button onClick={() => handleAssetSelection(asset)}>Edit</button>
                               <button onClick={() => handleDeleteAsset(asset._id)}>Delete</button>
                           </div>
                       </li>
                   ))}
               </ul>
           </section>

           <section className="asset-section">
               <h2>{isEditing ? 'Edit Asset' : 'Create Asset'}</h2>
               <div className="asset-form">
                   <input
                       type="text"
                       name="assetnumber"
                       value={isEditing ? selectedAsset.assetnumber : newAsset.assetnumber}
                       onChange={handleInputChange}
                       placeholder="Asset Number"
                   />
                   <input
                       type="text"
                       name="rego"
                       value={isEditing ? selectedAsset.rego : newAsset.rego}
                       onChange={handleInputChange}
                       placeholder="Rego"
                   />
                   <div className="asset-selection">
                       <p>Select Asset Type:</p>
                       {assetTypeOptions.map(type => (
                           <button
                               key={type}
                               onClick={() => handleSelectionChange(type, 'assetType')}
                           >
                               {type}
                           </button>
                       ))}
                   </div>
                   <div className="asset-selection">
                       <p>Select Licence Class:</p>
                       {licenceClassOptions.map(type => (
                           <button
                               key={type}
                               onClick={() => handleSelectionChange(type, 'licenceClass')}
                           >
                               {type}
                           </button>
                       ))}
                   </div>
                   <button onClick={isEditing ? handleUpdateAsset : handleCreateAsset}>
                       {isEditing ? 'Update' : 'Create'}
                   </button>
                   {isEditing && (
                       <button
                           onClick={() => {
                               setSelectedAsset(null);
                               setIsEditing(false);
                           }}
                       >
                           Cancel
                       </button>
                   )}
               </div>
           </section>
       </div>
   );
}
