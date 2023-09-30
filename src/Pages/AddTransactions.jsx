import React, { useState } from 'react';
import Layout from '../components/Layout';
import '../css/AddTransactions.css';

const AddTransactions = () => {

    const [formData, setFormData] = useState({
        name: '',
        employee: '',
        date: '',
        time: ''
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
            validationErrors.employee = 'Employee Name is required'
        }

        if (!formData.date.trim()) {
            validationErrors.date = 'Date is required'
        }

        if (!formData.time.trim()) {
            validationErrors.time = 'Time is required'
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
                    Add here
                </h1>
                <div className="form-container">
                    <form action="/action_page.php" className='asdf' onSubmit={handleSubmit}>
                        <div className="section">
                            <label htmlFor="fname" className='labeles'>Name</label><br />
                            <input onChange={handleChange}
                                type="text"
                                name="name"
                                placeholder="Your name.."
                                className="section-input"
                            /><br />
                            {errors.name && <span className='error'>{errors.name}</span>}
                        </div>
                        <div className="section">
                            <label htmlFor="fname" className='labeles'>Employee</label><br />
                            <input onChange={handleChange}
                                type="text"
                                name="employee"
                                placeholder="Your name.."
                                className="section-input"
                            /><br />
                            {errors.employee && <span className='error'>{errors.employee}</span>}
                        </div>
                        <div className="section">
                            <label htmlFor="fname" className='labeles'>Date</label><br />
                            <input onChange={handleChange}
                                type="date"
                                name="date"
                                placeholder="Your name.."
                                className="section-input"
                            /><br />
                            {errors.date && <span className='error'>{errors.date}</span>}
                        </div>
                        <div className="section">
                            <label htmlFor="lname" className='labeles'>Time</label><br />
                            <input onChange={handleChange}
                                type="text"
                                name="time"
                                placeholder="Your Country name.."
                                className="section-input"
                            /><br />
                            {errors.time && <span className='error'>{errors.time}</span>}
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

export default AddTransactions;
