import React, { useState } from 'react';
import Layout from '../components/Layout';
import '../css/AddLocation.css';

const AddLocation = () => {

    const [formData, setFormData] = useState({
        name: '',
        country: '',
        state: '',
        city: '',
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

        if (!formData.country.trim()) {
            validationErrors.country = 'Country is required'
        }

        if (!formData.state.trim()) {
            validationErrors.state = 'State is required'
        }

        if (!formData.city.trim()) {
            validationErrors.city = 'City is required'
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
                    <form action="/action_page.php" className='asdffff' onSubmit={handleSubmit}>
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
                            <label htmlFor="lname" className='labeles'>Country</label><br />
                            <input
                                type="text"
                                name="country"
                                placeholder="Your Country name.."
                                className="section-input"
                                onChange={handleChange}
                            /><br />
                            {errors.country && <span className='error'>{errors.country}</span>}
                        </div>
                        <div className="section">
                            <label htmlFor="lname" className='labeles'>State</label><br />
                            <input
                                type="text"
                                name="state"
                                placeholder="Your State name.."
                                className="section-input"
                                onChange={handleChange}
                            /><br />
                            {errors.state && <span className='error'>{errors.state}</span>}
                        </div>
                        <div className="section">
                            <label htmlFor="fname" className='labeles'>City</label><br />
                            <input
                                type="text"
                                name="city"
                                placeholder="Your City name.."
                                className="section-input"
                                onChange={handleChange}
                            /><br />
                            {errors.city && <span className='error'>{errors.city}</span>}
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

export default AddLocation;
