import React, { useState } from 'react';
import Layout from '../components/Layout';
import '../css/AddCustomer.css';

const AddCustomer = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        address: '',
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

        if (!formData.email.trim()) {
            validationErrors.email = 'email is required'
        } else if (/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = 'Email is not valid'
        }

        if (!formData.phone.trim()) {
            validationErrors.phone = 'Phone is required'
        } else if (formData.phone.length < 6) {
            validationErrors.phone = 'Phone is not valid'
        }

        if (!formData.city.trim()) {
            validationErrors.city = 'City is required'
        }

        if (!formData.address.trim()) {
            validationErrors.address = 'Address is required'
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
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name.."
                                className="section-input"
                                onChange={handleChange}
                            /><br />
                            {errors.name && <span className='error'>{errors.name}</span>}
                        </div>
                        <div className="section">
                            <label htmlFor="lname" className='labeles'>Email</label><br />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Country name.."
                                className="section-input"
                                onChange={handleChange}
                            /><br />
                            {errors.email && <span className='error'>{errors.email}</span>}
                        </div>
                        <div className="section">
                            <label htmlFor="lname" className='labeles'>Phone</label><br />
                            <input
                                type="number"
                                name="phone"
                                placeholder="Your State name.."
                                className="section-input"
                                onChange={handleChange}
                            /><br />
                            {errors.phone && <span className='error'>{errors.phone}</span>}
                        </div>
                        <div className="section">
                            <label htmlFor="fname" className='labeles'>City</label><br />
                            <select
                                type="text"
                                name="city"
                                placeholder="Your City name.."
                                className="section-input"
                                onChange={handleChange}
                            ><option value="apple">Lahore</option>
                            <option value="apple">Lahore</option>
                            <option value="apple">Lahore</option>
                            <option value="apple">Lahore</option>
                            <option value="apple">Lahore</option>
                            <option value="apple">Lahore</option>
                                </select><br />
                            {errors.city && <span className='error'>{errors.city}</span>}
                        </div>
                        <div className="section">
                            <label htmlFor="fname" className='labeles'>Address</label><br />
                            <input
                                type="text"
                                name="address"
                                placeholder="Your City name.."
                                className="section-input"
                                onChange={handleChange}
                            /><br />
                            {errors.address && <span className='error'>{errors.address}</span>}
                        </div>
                        <input
                            type="submit"
                            value="Submit"
                            className="section-button"
                            onChange={handleChange}
                        />

                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default AddCustomer;
