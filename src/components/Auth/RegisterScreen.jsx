import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { setError, unSetError } from "../../actions/ui";
import validator from "validator";
const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    name: "test",
    email: "test@email.com",
    password: "1234",
    password2: "1234",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log("formulario correcto");
      dispatch(unSetError());
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("email is not valid"));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(setError("password should be at least 6 chars"));
      return false;
    }
    dispatch(unSetError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        <div className="auth__alert-error">Hola Mundo</div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          className="auth__input"
          autoComplete="off"
          onChange={handleInputChange}
        />

        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          className="auth__input"
          autoComplete="off"
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          className="auth__input"
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          value={password2}
          className="auth__input"
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;
