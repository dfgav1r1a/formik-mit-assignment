import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()
 const formik = useFormik({
  initialValues: {
    email: '',
    password: ''
  },
  onSubmit: values => {
    console.log('Form Data:', values);
    alert('Login successful!')
  },
  validate: values => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Field required.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Username should be an email.'
    }
    if (!values.password) errors.password = 'Field required.';
    return errors;
  }
 });

  return (
    <form onSubmit={formik.handleSubmit} style={{width: '15%', margin: '10px', padding: '10px', border: 'solid 2px orange', borderRadius: '10px'}}>
      <div>Email</div>
      <input type='text' id='emailField' name='email' onChange={formik.handleChange} value={formik.values.email} ></input>
      {formik.errors.email ? <div style={{color:'red'}} id='emailError'>{formik.errors.email}</div> : null}
      <div></div>
      <div>Password</div>
      <input type='text' id='pswField' name='password' onChange={formik.handleChange} value={formik.values.password}></input>
      {formik.errors.password ? <div style={{color:'red'}} id='pswError'>{formik.errors.password}</div> : null}
      <div style={{margin: '5px 0'}}>
        <button type='submit' id='submitBtn'>Submit</button>
      </div>  
    </form>
  );
}

export default App;