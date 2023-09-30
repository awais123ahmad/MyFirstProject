import React, { useState } from 'react';
import Layout from '../components/Layout';
import '../css/AddHistories.css';

const AddHistories = () => {

    const [formData, setFormData] = useState({
        name: '',
        city: '',
        email: '',
        phone: '',
        address: ''
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

        if (!formData.city.trim()) {
            validationErrors.city = 'City is required'
        }

        if (!formData.email.trim()) {
            validationErrors.email = 'Email is required'
        } else if (/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = 'Email is not valid'
        }

        if (!formData.phone.trim()) {
            validationErrors.phone = 'Phone is required'
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
                            <input onChange={handleChange}
                                type="text"
                                name="name"
                                placeholder="Your name.."
                                className="section-input"
                            /><br />
                            {errors.name && <span className='error'>{errors.name}</span>}
                        </div>
                        <div className="section">
                            <label htmlFor="fname" className='labeles'>City</label><br />
                            <input onChange={handleChange}
                                type="text"
                                name="city"
                                placeholder="Your City.."
                                className="section-input"
                            /><br />
                            {errors.city && <span className='error'>{errors.city}</span>}
                        </div>
                        <div className="section">
                            <label htmlFor="fname" className='labeles'>Email</label><br />
                            <input onChange={handleChange}
                                type="email"
                                name="email"
                                placeholder="Your Email.."
                                className="section-input"
                            /><br />
                            {errors.email && <span className='error'>{errors.email}</span>}
                        </div>
                        <div className="section">
                            <label htmlFor="lname" className='labeles'>Phone</label><br />
                            <input onChange={handleChange}
                                type="number"
                                name="phone"
                                placeholder="Your Phone.."
                                className="section-input"
                            /><br />
                            {errors.phone && <span className='error'>{errors.phone}</span>}
                        </div>
                        <div className="section">
                            <label htmlFor="lname" className='labeles'>Address</label><br />
                            <input onChange={handleChange}
                                type="text"
                                name="address"
                                placeholder="Your Adress.."
                                className="section-input"
                            /><br />
                            {errors.address && <span className='error'>{errors.address}</span>}
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

export default AddHistories;
