import React,{useState} from 'react';
import Joi from 'joi';
import axios from 'axios';

export default function Register() {

  let [error , setError] = useState('');
  let [errorList , setErrorList] = useState([]);
  let [loading , setLoading] = useState(false);


  let [user , setUser] = useState({
    first_name : '',
    last_name : '',
    age : 0,
    email : '',
    password : ''
  });

  function getUser(e){
    let myUser = {...user};    // spread operator
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    console.log(myUser);
  };

  function validateForm(){
    let schema = Joi.object({
      first_name : Joi.string().alphanum().min(3).max(10).required(),
      last_name : Joi.string().alphanum().min(3).max(10).required(),
      age : Joi.number().min(16).max(60).required(),
      email : Joi.string().required().email({tlds : {allow:['com','net']}}),
      password : Joi.string().required().pattern(new RegExp('^[a-z][0-9]{3}$'))
    });
    return schema.validate(user,{abortEarly:false})
  };

  async function submitForm(e){
    e.preventDefault();
    let validationResult = validateForm();
    console.log(validationResult);
    if(validationResult.error){
      setErrorList(validationResult.error.details);
    }else{
      setLoading(true);
      let {data} = await axios.post('https://routeegypt.herokuapp.com/signup',user);
      if(data.message == 'success'){
        window.location.href='/login';
        setLoading(false);
      }else{
        setError(data.message);
        setLoading(false);
      }
    }
  };

  return (
    <div className='my-3'>
      <h1>Registration Form</h1>
      <form onSubmit={submitForm}>

        {errorList.map((error,index)=><div key={index} className='alert alert-danger p-2'>{error.message}</div>)}
        {error?<div className='alert alert-danger'>{error}</div> : ''}

        <div className='my-3'>
          <label htmlFor='first_name'>First Name</label>
          <input onChange={getUser} type='text' className='form-control' name='first_name' />
        </div>
        <div className='my-3'>
          <label htmlFor='last_name'>Last Name</label>
          <input onChange={getUser} type='text' className='form-control' name='last_name' />
        </div>
        <div className='my-3'>
          <label htmlFor='age'>Age</label>
          <input onChange={getUser} type='number' className='form-control' name='age' />
        </div>
        <div className='my-3'>
          <label htmlFor='email'>Email</label>
          <input onChange={getUser} type='email' className='form-control' name='email' />
        </div>
        <div className='my-3'>
          <label htmlFor='password'>Password</label>
          <input onChange={getUser} type='password' className='form-control' name='password' />
        </div>

        <button type='submit'  className='btn btn-primary'>
          {loading?<i className='fa fa-spinner fa-spin'></i>:'Register'}
        </button>

      </form>
    </div>
  )
}
