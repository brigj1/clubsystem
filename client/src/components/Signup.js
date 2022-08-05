import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { useForm } from "../hooks/useForm";

const SignUp = ({ setCurrentUser }) => {
    const initialState = {
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
    };

    const { formData, handleChange, reset } = useForm(initialState);
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    // const {
    //     first_name,
    //     last_name,
    //     username,
    //     email,
    //     password,
    //     password_confirmation
    // } = formData

    //function onSubmit(e)
    function handleSubmit(e) {
        e.preventDefault()
        const configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...formData }),
        };
       
        //fetch("/api/me", configObj)
        //fetch("/api/users", configObj)
        fetch("/api/signup", configObj)
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setCurrentUser(user)
                    // history.push('/clubs')
                    history.push(`/api/users/${user.id}`);
                    reset();
                })
            }else {
                res.json().then(json => {
                  console.error(json)  // can remove this line
                  setErrors(Object.entries(json.errors))
                })
            }
        })
    };
       
    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     setFormData({ ...formData, [name]: value })
    //   }
    return (
      <> 
         <br />
         <h4>Sign up for an account!</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first_name">First Name: </label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          onChange={handleChange}
          value={formData.first_name}
        />
        <label htmlFor="last_name">Last Name: </label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          onChange={handleChange}
          value={formData.last_name}
        />
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
          value={formData.username}
        />
       
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <label htmlFor="password_confirmation">Confirm Password: </label>
        <input
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          onChange={handleChange}
          value={formData.password_confirmation}
        />
        
       
        <input type='submit' value='Sign up!' />
      </form>
      {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
        </>
    )
}

export default SignUp