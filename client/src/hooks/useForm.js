import { useState } from 'react'
// from SENG-LIVE-042522-PHASE-2 - 9 - useForm.js

// use other hooks inside of this custom hook such as useState, useEffect
// the function needs to return an object: this object is going to contain is key value pairs.
// the keys are arbitrary, the values are the methods that have been defined inside of this hook.
// Typically, lets keep the key names the same as the method names
export const useForm = (initialState) => {

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    //console.log("e_target", e.target)
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const reset = () => {
      setFormData(initialState)
  }

  const editFormValues = (formData) => {
      setFormData(formData)
  }

  return {
      // key: value key= we can name anything we want, value= this is the method we are making accesible from inside this custom hook
      formData, 
      handleChange, 
      reset, 
      editFormValues // editFormValues: editFormValues
  }

};
