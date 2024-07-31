import React, { useState } from 'react';

const RegisterForm = ({ onRegister }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        rePassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-style"
                    placeholder="Your Full Name"
                    id="name"
                    autoComplete="off"
                    value={formData.name}
                    onChange={handleChange}
                />
                <i className="input-icon uil uil-user"></i>
            </div>
            <div className="form-group mt-2">
                <input
                    type="email"
                    name="email"
                    className="form-style"
                    placeholder="Your Email"
                    id="email"
                    autoComplete="off"
                    value={formData.email}
                    onChange={handleChange}
                />
                <i className="input-icon uil uil-at"></i>
            </div>
            <div className="form-group mt-2">
                <input
                    type="password"
                    name="password"
                    className="form-style"
                    placeholder="Your Password"
                    id="password"
                    autoComplete="off"
                    value={formData.password}
                    onChange={handleChange}
                />
                <i className="input-icon uil uil-lock-alt"></i>
            </div>
            <div className="form-group mt-2">
                <input
                    type="phone"
                    name="phone"
                    className="form-style"
                    placeholder="Your Phone"
                    id="phone"
                    autoComplete="off"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <i className="input-icon uil uil-phone"></i>
            </div>
            <div className="form-group mt-2">
                <input
                    type="password"
                    name="rePassword"
                    className="form-style"
                    placeholder="Nhập lại password"
                    id="rePassword"
                    autoComplete="off"
                    value={formData.rePassword}
                    onChange={handleChange}
                />
                <i className="input-icon uil uil-lock-alt"></i>
            </div>
            <button type="submit" className="btn mt-4">Submit</button>
        </form>
    );
};

export default RegisterForm;
