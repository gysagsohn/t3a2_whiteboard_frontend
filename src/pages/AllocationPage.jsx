import React, { useEffect, useState } from 'react';
import { fetchAllocations, createAllocation, updateAllocation, deleteAllocation } from '../utils/allocationAPI';
import { fetchAssets } from '../utils/assetAPI';
import { fetchClients } from '../utils/clientAPI';
import { fetchOperators } from '../utils/operatorAPI';
import '../styles/allocationPage.css';

// State hooks to manage data for allocations, assets, clients, and operators
export default function AllocationPage() {
   const [allocations, setAllocations] = useState([]);
   const [assets, setAssets] = useState([]);
   const [clients, setClients] = useState([]);
   const [operators, setOperators] = useState([]);
// State for managing the form data for a new or selected allocation
   const [newAllocation, setNewAllocation] = useState({
       asset: '',
       operator: '',
       client: '',
       date: '',
       shiftType: '',
   });
   const [selectedAllocation, setSelectedAllocation] = useState(null);
   const [isEditing, setIsEditing] = useState(false);

   useEffect(() => {
        // Load data when the component mounts
       loadAllocations();
       loadAssets();
       loadClients();
       loadOperators();
   }, []);

   const loadAllocations = async () => {
    // Fetch assets from the backend and update state
       try {
           const data = await fetchAllocations();
           setAllocations(data || []);
       } catch (error) {
           console.error('Failed to load allocations', error);
       }
   };

   const loadAssets = async () => {
    // Fetch clients from the backend and update state
       try {
           const data = await fetchAssets();
           setAssets(data || []);
       } catch (error) {
           console.error('Failed to load assets', error);
       }
   };

   const loadClients = async () => {
     // Fetch operators from the backend and update state
       try {
           const data = await fetchClients();
           setClients(data || []);
       } catch (error) {
           console.error('Failed to load clients', error);
       }
   };

   const loadOperators = async () => {
    // Handle the creation of a new allocation
       try {
           const data = await fetchOperators();
           setOperators(data || []);
       } catch (error) {
           console.error('Failed to load operators', error);
       }
   };

   const handleCreateAllocation = async () => {
    // Handle the updating of an existing allocation
       try {
           const createdAllocation = await createAllocation(newAllocation);
           setAllocations([...allocations, createdAllocation]);
           resetForm();
       } catch (error) {
           console.error('Failed to create allocation', error);
       }
   };

   const handleUpdateAllocation = async () => {
    // Handle the deletion of an allocation
       if (selectedAllocation) {
           try {
               const updatedAllocation = await updateAllocation(selectedAllocation._id, selectedAllocation);
               setAllocations(allocations.map(a => a._id === updatedAllocation._id ? updatedAllocation : a));
               resetForm();
           } catch (error) {
               console.error('Failed to update allocation', error);
           }
       }
   };

   const handleDeleteAllocation = async (id) => {
     // Handle the deletion of an allocation
       try {
           await deleteAllocation(id);
           setAllocations(allocations.filter(a => a._id !== id));
       } catch (error) {
           console.error('Failed to delete allocation', error);
       }
   };

   const handleInputChange = (e) => {
    // Handle input changes for form fields
       const { name, value } = e.target;
       if (isEditing && selectedAllocation) {
           setSelectedAllocation(prev => ({ ...prev, [name]: value }));
       } else {
           setNewAllocation(prev => ({ ...prev, [name]: value }));
       }
   };

   const handleSelectionChange = (value, field) => {
        // Set the selected allocation for editing
       if (isEditing && selectedAllocation) {
           setSelectedAllocation(prev => ({ ...prev, [field]: value }));
       } else {
           setNewAllocation(prev => ({ ...prev, [field]: value }));
       }
   };

   const handleAllocationSelection = (allocation) => {
        // Set the selected allocation for editing
       setSelectedAllocation(allocation);
       setIsEditing(true);
   };

   const resetForm = () => {
    // Reset the form to its initial state
       setNewAllocation({
           asset: '',
           operator: '',
           client: '',
           allocationDate: '',
           shiftType: '',
           date: ''
       });
       setSelectedAllocation(null);
       setIsEditing(false);
   };

   return (
       <div className="allocation-container">
           <section className="allocation-section">
               <h2>Current Allocations</h2>
               <ul className="allocation-list">
                   {allocations.map(allocation => (
                       <li key={allocation._id}>
                           {allocation.asset.assetnumber} - {allocation.operator.operatorName} - {allocation.client.clientname} - {allocation.shiftType}
                           <div className="allocation-actions">
                               <button onClick={() => handleAllocationSelection(allocation)}>Edit</button>
                               <button onClick={() => handleDeleteAllocation(allocation._id)}>Delete</button>
                           </div>
                       </li>
                   ))}
               </ul>
           </section>

           <section className="allocation-section">
               <h2>{isEditing ? 'Edit Allocation' : 'Create Allocation'}</h2>
               <div className="allocation-form">
                   <select name="asset" value={isEditing ? selectedAllocation.asset._id : newAllocation.asset} onChange={(e) => handleSelectionChange(e.target.value, 'asset')}>
                       <option value="">Select Asset</option>
                       {assets.map(asset => (
                           <option key={asset._id} value={asset._id}>{asset.assetnumber}</option>
                       ))}
                   </select>
                   <select name="operator" value={isEditing ? selectedAllocation.operator._id : newAllocation.operator} onChange={(e) => handleSelectionChange(e.target.value, 'operator')}>
                       <option value="">Select Operator</option>
                       {operators.map(operator => (
                           <option key={operator._id} value={operator._id}>{operator.operatorName}</option>
                       ))}
                   </select>
                   <select name="client" value={isEditing ? selectedAllocation.client._id : newAllocation.client} onChange={(e) => handleSelectionChange(e.target.value, 'client')}>
                       <option value="">Select Client</option>
                       {clients.map(client => (
                           <option key={client._id} value={client._id}>{client.clientname}</option>
                       ))}
                   </select>
                   <input type="date" name="date" value={isEditing ? selectedAllocation.date : newAllocation.date} onChange={handleInputChange} />
                   <select name="shiftType" value={isEditing ? selectedAllocation.shiftType : newAllocation.shiftType} onChange={handleInputChange}>
                       <option value="">Select Shift Type</option>
                       <option value="Day">Day</option>
                       <option value="Night">Night</option>
                   </select>
                   <button onClick={isEditing ? handleUpdateAllocation : handleCreateAllocation}>
                       {isEditing ? 'Update' : 'Create'}
                   </button>
                   {isEditing && (
                       <button onClick={resetForm}>
                           Cancel
                       </button>
                   )}
               </div>
           </section>
       </div>
   );
}
