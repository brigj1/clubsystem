import { useState } from 'react'
// from SENG-LIVE-042522-PHASE-2 - 9 - useForm.js

export const useForm = (initialState) => {

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
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
