import React, { useState } from 'react';
import Layout from '../components/Layout';
import '../css/SalariesAdd.css';

const SalariesAdd = () => {

    const [formData, setFormData] = useState({
        name: '',
        employee: '',
        date: '',
    });
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = {}
        if (!formData.name.trim()) {
            validationErrors.name = 'Name is required'
        }

        if (!formData.employee.trim()) {
            validationErrors.employee = 'Employee is required'
        }

        if (!formData.date.trim()) {
            validationErrors.date = 'Date is required'
        }

        setErrors(validationErrors)

        if (Object.keys(validationErrors).length === 0) {
            alert('Form submitted successfully')
        }
    }

    return (
        <Layout>
            <div className="add">
                <h1 className="add-font">
                    Salaries Form
                </h1>
                <div className="form-container">
                    <form action="/action_page.php" onSubmit={handleSubmit}>
                        <div className="section">
                            <label htmlFor="name" className='labeles'>Name</label><br />
                            <input  onChange={handleChange}
                                type="text"
                                name="name"
                                placeholder="Your name.."
                                className="section-input"
                            /><br />
                            {errors.name && <span className='error'>{errors.name}</span>}
                        </div>
                        <div className="section">
                            <label htmlFor="employee" className='labeles'>Employee</label><br />
                            <input  onChange={handleChange}
                                type="text"
                                name="employee"
                                placeholder="Employee name.."
                                className="section-input"
                            /><br />
                            {errors.employee && <span className='error'>{errors.employee}</span>}
                        </div>
                        <div className="section">
                            <label htmlFor="date" className='labeles'>Date</label><br />
                            <input  onChange={handleChange}
                                type="date"
                                name="date"
                                className="section-input"
                            /><br />
                            {errors.date && <span className='error'>{errors.date}</span>}
                        </div>
                        <input
                            type="submit"
                            value="Submit"
                            className="section-button"
                        />
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default SalariesAdd;
