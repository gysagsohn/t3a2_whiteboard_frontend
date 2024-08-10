import React, { useEffect, useState } from 'react';
import { fetchAssets, createAsset, updateAsset, deleteAsset } from '../utils/assetAPI';
import axiosInstance from '../utils/axiosInstance';
import '../styles/assetPage.css';

export default function AssetPage() {
   const [assets, setAssets] = useState([]);
   const [assetTypeOptions, setAssetTypeOptions] = useState([]);
   const [licenceClassOptions, setLicenceClassOptions] = useState([]);
   const [newAsset, setNewAsset] = useState({
       assetnumber: '',
       assetType: [],
       rego: '',
       licenceClass: []
   });
   const [selectedAsset, setSelectedAsset] = useState(null);
   const [isEditing, setIsEditing] = useState(false);

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

       loadAssets();
       loadAssetTypeOptions();
       loadLicenceClassOptions();
   }, []);

   const handleCreateAsset = async () => {
       try {
           const createdAsset = await createAsset(newAsset);
           setAssets([...assets, createdAsset.result]);
           setNewAsset({ assetnumber: '', assetType: [], rego: '', licenceClass: [] });
       } catch (error) {
           console.error('Failed to create asset', error);
       }
   };

   const handleUpdateAsset = async () => {
       if (selectedAsset) {
           try {
               const updatedAsset = await updateAsset(selectedAsset._id, selectedAsset);
               setAssets(assets.map(a => a._id === updatedAsset.result._id ? updatedAsset.result : a));
               setSelectedAsset(null);
               setIsEditing(false);
           } catch (error) {
               console.error('Failed to update asset', error);
           }
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

   const handleInputChange = (e) => {
       const { name, value } = e.target;

       if (isEditing && selectedAsset) {
           setSelectedAsset(prev => ({ ...prev, [name]: value }));
       } else {
           setNewAsset(prev => ({ ...prev, [name]: value }));
       }
   };

   const handleSelectionChange = (type, field) => {
       setNewAsset(prev => ({
           ...prev,
           [field]: [type]
       }));
   };

   const handleAssetSelection = (asset) => {
       setSelectedAsset(asset);
       setIsEditing(true);
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
