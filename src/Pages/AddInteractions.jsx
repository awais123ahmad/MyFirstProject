import React, { useState } from 'react';
import Layout from '../components/Layout';
import '../css/AddInteractions.css';

const AddInteractions = () => {

    const [formData, setFormData] = useState({
        venue: '',
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
        if (!formData.venue.trim()) {
            validationErrors.venue = 'Name is required'
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
                    <form action="/action_page.php" className='asdf' onClick={handleSubmit}>
                    <div className="section">
                            <label htmlFor="fname" className='labeles'>Venue</label><br />
                            <input
                                type="text"
                                name="venue"
                                placeholder="Your name.."
                                className="section-input"
                                onChange={handleChange}
                            /><br />
                            {errors.venue && <span className='error'>{errors.venue}</span>}
                        </div>
                        <div className="section">
                            <label htmlFor="fname" className='labeles'>Date</label><br />
                            <input
                                type="date"
                                name="date"
                                placeholder="Your name.."
                                className="section-input"
                                onChange={handleChange}
                            /><br />
                            {errors.date && <span className='error'>{errors.date}</span>}
                        </div>
                        <div className="section">
                            <label htmlFor="fname" className='labeles'>Time</label><br />
                            <input
                                type="text"
                                name="time"
                                placeholder="Your name.."
                                className="section-input"
                                onChange={handleChange}
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

export default AddInteractions;
