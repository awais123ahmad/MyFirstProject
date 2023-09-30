import React, { useState } from 'react';
import Layout from '../components/Layout';
import '../css/AddCategory.css';

const AddCategory = () => {

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        image: '',
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
            validationErrors.name = 'Enter Name of Category'
        }

        if (!formData.description.trim()) {
            validationErrors.description = 'Enter Description'
        } else if (formData.description.length < 20) {
            validationErrors.description = 'Minimum 20 Words'
        }

        if (!formData.image.trim()) {
            validationErrors.image = 'Please Select Image'
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            alert('Form Submitted Successfully');
        }
    }


    return (
        <Layout>
            <div className="add">
                <h1 className="add-font">
                    Add here
                </h1>
                <div className="form-container">
                    <form action="/action_page.php" className='asdfff' onSubmit={handleSubmit}>
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
                            <label htmlFor="lname" className='labeles'>Description</label><br />
                            <textarea onChange={handleChange}
                                name='description'
                                cols="30"
                                rows="10"
                                placeholder="Description.."
                                className="section-input">
                            </textarea><br />
                            {errors.description && <span className='error'>{errors.description}</span>}
                        </div>
                        <div className="section">
                            <label htmlFor="lname" className='labeles'>Choose Image</label><br />
                            <input onChange={handleChange}
                                type="file"
                                name="image"
                                className="section-input" /><br />
                            {errors.image && <span className='error'>{errors.image}</span>}
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

export default AddCategory;
