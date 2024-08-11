import React, { useEffect, useState } from 'react';
import { fetchOperators, createOperator, updateOperator, deleteOperator } from '../utils/operatorAPI';
import '../styles/operatorPage.css'; 

 // Define the OperatorPage component
export default function OperatorPage() {
    // State variables for managing operators and the current operator being edited or created
    const [operators, setOperators] = useState([]);
    const [currentOperator, setCurrentOperator] = useState({
        operatorName: '',
        licenceClass: '',
        availableDays: []
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
         // Load operators when the component mounts
        loadOperators();
    }, []);

    const loadOperators = async () => {
        // Function to fetch and set the list of operators
        try {
            const operatorsData = await fetchOperators();
            setOperators(operatorsData);
        } catch (error) {
            console.error('Failed to load operators:', error);
        }
    };

    const handleSelectLicenceClass = (licenceClass) => {
        // Update the licence class for the current operator
        setCurrentOperator(prev => ({ ...prev, licenceClass }));
    };

    const handleToggleDay = (day) => {
        // Toggle the selected days for the current operator
        setCurrentOperator(prev => {
            const newDays = prev.availableDays.includes(day) ?
                prev.availableDays.filter(d => d !== day) :
                [...prev.availableDays, day];
            return { ...prev, availableDays: newDays };
        });
    };

    const handleSubmit = async (event) => {
        // Handle form submission for creating or updating an operator
        event.preventDefault();
        try {
            const response = isEditing ? await updateOperator(currentOperator._id, currentOperator) : await createOperator(currentOperator);
            setOperators(isEditing ? operators.map(op => op._id === response._id ? response : op) : [...operators, response]);
            resetForm();
        } catch (error) {
            console.error('Failed to submit operator:', error);
        }
    };

    const resetForm = () => {
        // Reset the form to its initial state
        setCurrentOperator({ operatorName: '', licenceClass: '', availableDays: [] });
        setIsEditing(false);
    };

    return (
        <div className="operator-container">
            <h1>Operator Management</h1>
            <section className="operator-section">
                <h2>Current Operators</h2>
                <ul className="operator-list">
                    {operators.map(op => (
                        <li key={op._id}>
                            {op.operatorName} - {op.licenceClass} - Days: {op.availableDays.join(', ')}
                            <div className="operator-actions">
                                <button onClick={() => { setCurrentOperator(op); setIsEditing(true); }}>Edit</button>
                                <button onClick={() => deleteOperator(op._id).then(() => setOperators(operators.filter(o => o._id !== op._id)))}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="operator-section">
                <h2>{isEditing ? 'Edit Operator' : 'Create Operator'}</h2>
                <form className="operator-form" onSubmit={handleSubmit}>
                    <input
                        name="operatorName"
                        value={currentOperator.operatorName}
                        onChange={e => setCurrentOperator(prev => ({ ...prev, operatorName: e.target.value }))}
                        placeholder="Operator Name"
                    />
                    <div className="operator-selection">
                        <p>Select Licence Class:</p>
                        {['C', 'HR', 'HC'].map(licence => (
                            <button
                                type="button"
                                key={licence}
                                onClick={() => handleSelectLicenceClass(licence)}
                                className={currentOperator.licenceClass === licence ? 'selected' : ''}
                            >
                                {licence}
                            </button>
                        ))}
                    </div>
                    <div className="operator-selection">
                        <p>Select Available Days:</p>
                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(day => (
                            <button
                                type="button"
                                key={day}
                                onClick={() => handleToggleDay(day)}
                                className={currentOperator.availableDays.includes(day) ? 'selected' : ''}
                            >
                                {day}
                            </button>
                        ))}
                    </div>
                    <button type="submit">{isEditing ? 'Update' : 'Create'}</button>
                    {isEditing && (
                        <button onClick={resetForm}>Cancel</button>
                    )}
                </form>
            </section>
        </div>
    );
}
