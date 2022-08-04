import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useForm } from "../hooks/useForm";

//function EditProductionForm({updateProduction})
//const EditUserForm = ({ setCurrentUser }) => ..
const EditUserForm = () => {
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

    const {id} = useParams()
    useEffect(() => {
      fetch(`/api/users/${id}`)
      .then(res => res.json())
      .then(handleChange)
    },[])
      //.then(setFormData)

    function handleSubmit(e){
      e.preventDefault()
      //PATCH to `/api/users/${id}`
      fetch(`/api/users/${id}`,{
        method:'PATCH',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(formData)
      })
      .then(res => {
        if(res.ok){
          // hmm, send user anywhere? leave them here to edit some more?
          // seems weird to setCurrentUser - they should already be current_user! Unless admin is changing them?
          //res.json().then(setCurrentUser)  // updateProduction
          //history.push(`/api/users/${user.id}`);
        } else {
          //Display errors
          res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
        }
      })
    }

    return (
      <div className='App'>
      {errors?errors.map(e => <div>{e}</div>):null}
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
       
        <input type='submit' value='Update User Profile' />
      </form>
      {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
      </div>
    )
  }
  
  export default EditUserForm
