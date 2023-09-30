import React, { useState } from 'react';
import Layout from '../components/Layout';
import '../css/AddBookings.css';

const AddBookings = () => {

    const [formData, setFormData] = useState({
        id: '',
        venue: '',
        date: '',
        persons: '',
        perperson: '',
        type: ''
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
        if (!formData.id.trim()) {
            validationErrors.id = 'ID is required'
        }

        if (!formData.venue.trim()) {
            validationErrors.venue = 'Venue Name is required'
        }

        if (!formData.date.trim()) {
            validationErrors.date = 'Date is required'
        }

        if (!formData.persons.trim()) {
            validationErrors.persons = 'Persons is required'
        }

        if (!formData.perperson.trim()) {
            validationErrors.perperson = 'Per/Person Rate is required'
        }

        if (!formData.type.trim()) {
            validationErrors.type = 'Type is required'
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
                            <label htmlFor="fname" className='labeles'>ID</label><br />
                            <input onChange={handleChange}
                                type="text"
                                name="id"
                                placeholder="Your ID.."
                                className="section-input"
                            /><br />
                            {errors.id && <span className='error'>{errors.id}</span>}
                        </div>
                        <div className="section">
                            <label htmlFor="fname" className='labeles'>Venue</label><br />
                            <input onChange={handleChange}
                                type="text"
                                name="venue"
                                placeholder="Your Venue.."
                                className="section-input"
                            /><br />
                            {errors.venue && <span className='error'>{errors.venue}</span>}
                        </div>
                        <div className="section">
                            <label htmlFor="fname" className='labeles'>Date</label><br />
                            <input onChange={handleChange}
                            type="date"
                                name="date"
                                className="section-input"
                            /><br />
                            {errors.date && <span className='error'>{errors.date}</span>}
                        </div>
                        <div className="section">
                            <label htmlFor="lname" className='labeles'>Persons</label><br />
                            <input onChange={handleChange}
                                type="text"
                                name="persons"
                                placeholder="Your Persons.."
                                className="section-input"
                            /><br />
                            {errors.persons && <span className='error'>{errors.persons}</span>}
                        </div>
                        <div className="section">
                            <label htmlFor="lname" className='labeles'>PR/PR</label><br />
                            <input onChange={handleChange}
                                type="text"
                                name="perperson"
                                placeholder="Your PerPerson Rate.."
                                className="section-input"
                            /><br />
                            {errors.perperson && <span className='error'>{errors.perperson}</span>}
                        </div>
                        <div className="section">
                            <label htmlFor="fname" className='labeles'>Types</label><br />
                            <input onChange={handleChange}
                                type="text"
                                name="type"
                                placeholder="Venue Type.."
                                className="section-input"
                            /><br />
                            {errors.type && <span className='error'>{errors.type}</span>}
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

export default AddBookings;
