import React from 'react';
import Layout from '../components/Layout';
import '../css/Add.css';

const Add = () => {
    return (
        <Layout>
            <div className="add">
                <h1 className="add-font">
                    Add here
                </h1>
                <div className="form-container">
                    <form action="/action_page.php">
                        <div className="section">
                            <label htmlFor="fname" className='labeles'>ID</label><br />
                            <input
                                type="text"
                                id="fname"
                                name="firstname"
                                placeholder="Your name.."
                                className="section-input"
                            />
                        </div>
                        <div className="section">
                            <label htmlFor="fname" className='labeles'>Venue</label><br />
                            <input
                                type="text"
                                id="fname"
                                name="firstname"
                                placeholder="Your name.."
                                className="section-input"
                            />
                        </div>
                        <div className="section">
                            <label htmlFor="fname" className='labeles'>Date</label><br />
                            <input
                                type="text"
                                id="fname"
                                name="firstname"
                                placeholder="Your name.."
                                className="section-input"
                            />
                        </div>
                        <div className="section">
                            <label htmlFor="lname" className='labeles'>Persons</label><br />
                            <input
                                type="text"
                                id="lname"
                                name="lastname"
                                placeholder="Your Country name.."
                                className="section-input"
                            />
                        </div>
                        <div className="section">
                            <label htmlFor="lname" className='labeles'>PR/PR</label><br />
                            <input
                                type="text"
                                id="lname"
                                name="lastname"
                                placeholder="Your State name.."
                                className="section-input"
                            />
                        </div>
                        <div className="section">
                            <label htmlFor="fname" className='labeles'>Types</label><br />
                            <input
                                type="text"
                                id="fname"
                                name="firstname"
                                placeholder="Your City name.."
                                className="section-input"
                            />
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

export default Add;
