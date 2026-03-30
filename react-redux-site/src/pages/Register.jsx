import { use, useState } from "react";
import { useDispatch } from 'react-redux';
import { register } from "../features/auth/authSlice";

const Register = ()=>{
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(register(form));
    };


    return(
        <div className="container">
            <h2>Регистрация</h2>

            <form onSubmit={handleSubmit}>
                <input
                name="email"
                placeholder="Введите Email"
                onChange={handleChange}
                />

                <input 
                name="password"
                placeholder="Придумайте пароль"
                onChange={handleChange}
                />

                <button type="submit">Регистрация</button>

            </form>

        </div>
    );
};

export default Register;