import React, { useState } from 'react';
import Layout from '../components/Layout';
import '../css/AddIncome.css';

const AddIncome = () => {

    const [formData, setFormData] = useState({
        name: '',
        date: '',
        venue: '',
        note: ''
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

        if (!formData.date.trim()) {
            validationErrors.date = 'Date is required'
        }

        if (!formData.venue.trim()) {
            validationErrors.venue = 'Venue Name is required'
        }

        if (!formData.note.trim()) {
            validationErrors.note = 'Note is required'
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
                            <label htmlFor="lname" className='labeles'>Note</label><br />
                            <textarea onChange={handleChange}
                                name= 'note'
                                cols="30"
                                rows="10"
                                placeholder="Note.."
                                className="section-input">
                            </textarea><br />
                            {errors.note && <span className='error'>{errors.note}</span>}
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

export default AddIncome;
