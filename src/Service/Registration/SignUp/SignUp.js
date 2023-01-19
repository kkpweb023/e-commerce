import React, { useEffect } from 'react';
import './SignUp.css';

import { Link, useNavigate } from 'react-router-dom';
import sign from '../../../Images/sign.png';


const SignUp = () => {

    const navigate = useNavigate();


    useEffect(() => {
        const auth = localStorage.getItem('user');
        auth ? navigate('/') : navigate('/signUp');
    }, [navigate])




    return (

        <section className="background-radial-gradient overflow-hidden">

            <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                <div className="row gx-lg-5 align-items-center mb-5">

                    <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>


                        <div className="bg-glass rounded-3 form_div d-flex" >

                            <img src={sign} alt="" style={{ width: "40%" }} />


                            <div className="card-body px-4 py-4 px-md-5">
                                <h2 className="fw-bold text-center pt-4">Sign Up</h2>
                                <form>

                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="form3Example1">Name</label>
                                        <input type="text" id={"form3Example1"} className="form-control w-100 shadow-none" />

                                    </div>


                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form3Example3">Email address</label>
                                        <input type="email" id="form3Example3" className="form-control w-100 shadow-none" />

                                    </div>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form3Example4">Password</label>
                                        <input type="password" id="form3Example4" className="form-control w-100 shadow-none" />

                                    </div>

                                    <button type="submit" className="btn btn-primary w-100 btn-block mb-4 shadow-none">
                                        Sign up
                                    </button>

                                    <p>Have already an account? <Link to={'/login'} className="link-info">Login here</Link></p>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </section>

    )
}

export default SignUp;