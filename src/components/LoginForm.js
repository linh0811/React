import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
    const [formData, setFormData] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    className="form-style"
                    placeholder="Your Email"
                    id="logemail"
                    autoComplete="off"
                    value={formData.email || ''}
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
                    id="logpass"
                    autoComplete="off"
                    value={formData.password || ''}
                    onChange={handleChange}
                />
                <i className="input-icon uil uil-lock-alt"></i>
            </div>
            <button type="submit" className="btn mt-4">Submit</button>
        </form>
    );
}

export default LoginForm;
