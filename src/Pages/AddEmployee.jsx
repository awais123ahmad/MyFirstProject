import React, { useState } from 'react';
import Layout from '../components/Layout';
import '../css/AddEmployee.css';
import Validation from '../utils/Validation';

const AddEmployee = () => {

    const [values, setValues] = useState({
        name: '',
        city: '',
        email: '',
        phone: '',
        address: ''
    })
    const [errors, setErrors] = useState({})
    function handleInput(event) {
        const newObj = {...values, [event.target.name]:  event.target.value}
        setValues(newObj)
    }

    function handleValidation(event){
        event.preventDefault();
        setErrors(Validation(values));
    }
    return (
        <Layout>
            <div className="add">
                <h1 className="add-font">
                    Add here
                </h1>
                <div className="form-container">
                    <form action="/action_page.php" className='asdf' onSubmit={handleValidation}>
                        <div className="section">
                            <label htmlFor="fname" className='labeles'>Name</label><br />
                            <input onChange={handleInput}
                                type="text"
                                name="name"
                                placeholder="Your name.."
                                className="section-input"
                            /><br />
                            {errors.name && <span className='error'>{errors.name}</span>}
                        </div>
                        <div className="section">
                            <label htmlFor="fname" className='labeles'>City</label><br />
                            <input onChange={handleInput}
                                type="text"
                                name="city"
                                placeholder="Your City.."
                                className="section-input"
                            /><br />
                            {errors.city && <span className='error'>{errors.city}</span>}
                        </div>
                        <div className="section">
                            <label htmlFor="fname" className='labeles'>Email</label><br />
                            <input onChange={handleInput}
                                type="email"
                                name="email"
                                placeholder="Your Email.."
                                className="section-input"
                            /><br />
                            {errors.email && <span className='error'>{errors.email}</span>}
                        </div>
                        <div className="section">
                            <label htmlFor="lname" className='labeles'>Phone</label><br />
                            <input onChange={handleInput}
                                type="number"
                                name="phone"
                                placeholder="Your Phone.."
                                className="section-input"
                            /><br />
                            {errors.phone && <span className='error'>{errors.phone}</span>}
                        </div>
                        <div className="section">
                            <label htmlFor="lname" className='labeles'>Address</label><br />
                            <input onChange={handleInput}
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

export default AddEmployee;
