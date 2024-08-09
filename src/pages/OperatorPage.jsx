import React, { useEffect, useState } from 'react';
import { fetchOperators, createOperator, updateOperator, deleteOperator } from '../utils/operatorAPI';

export default function OperatorPage() {
    const [operators, setOperators] = useState([]);
    const [currentOperator, setCurrentOperator] = useState({
        operatorName: '',
        licenceClass: '',
        availableDays: []
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        loadOperators();
    }, []);

    const loadOperators = async () => {
        try {
            const operatorsData = await fetchOperators();
            setOperators(operatorsData);
        } catch (error) {
            console.error('Failed to load operators:', error);
        }
    };

    const handleSelectLicenceClass = (licenceClass) => {
        setCurrentOperator(prev => ({ ...prev, licenceClass }));
    };

    const handleToggleDay = (day) => {
        setCurrentOperator(prev => {
            const newDays = prev.availableDays.includes(day) ? 
                prev.availableDays.filter(d => d !== day) : 
                [...prev.availableDays, day];
            return {...prev, availableDays: newDays};
        });
    };

    const handleSubmit = async (event) => {
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
        setCurrentOperator({ operatorName: '', licenceClass: '', availableDays: [] });
        setIsEditing(false);
    };

    return (
        <div>
            <h1>Operator Management</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    name="operatorName" 
                    value={currentOperator.operatorName} 
                    onChange={e => setCurrentOperator(prev => ({ ...prev, operatorName: e.target.value }))}
                    placeholder="Operator Name"
                />
                <div>
                    {['C', 'HR', 'HC'].map(licence => (
                        <button 
                            type="button" 
                            key={licence} 
                            onClick={() => handleSelectLicenceClass(licence)}
                            className={currentOperator.licenceClass === licence ? 'selected' : ''}
                            style={{ background: currentOperator.licenceClass === licence ? 'lightblue' : 'lightgrey' }}>
                            {licence}
                        </button>
                    ))}
                </div>
                <div>
                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(day => (
                        <button 
                            type="button" 
                            key={day} 
                            onClick={() => handleToggleDay(day)}
                            className={currentOperator.availableDays.includes(day) ? 'selected' : ''}
                            style={{ background: currentOperator.availableDays.includes(day) ? 'lightblue' : 'lightgrey' }}>
                            {day}
                        </button>
                    ))}
                </div>
                <button type="submit">{isEditing ? 'Update' : 'Create'}</button>
            </form>
            <ul>
                {operators.map(op => (
                    <li key={op._id}>
                        {op.operatorName} - {op.licenceClass} - Days: {op.availableDays.join(', ')}
                        <button onClick={() => { setCurrentOperator(op); setIsEditing(true); }}>Edit</button>
                        <button onClick={() => deleteOperator(op._id).then(() => setOperators(operators.filter(o => o._id !== op._id)))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
