import React, { useState } from 'react';
import { axiosWithAuth } from '../utills/axiosWithAuth'

const Login = props => {

  const [user, setUser] = useState({

    username: '',
    password: '',

  }
  )
console.log(user)
  const handleChange = event => {
    setUser({

      ...user,
      [event.target.name]: event.target.value

    })
  }

  const handleLogin = event => {
    event.preventDefault();
    axiosWithAuth()
      .post('/api/login', user)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        props.history.push('/bubbles')
      })
      .catch(err => console.log('Login Error:', err))
  }


  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div className='formDiv'>


        <form onSubmit={handleLogin}>
          <label htmlFor='username' name='username' >Username*</label>
          <input
            type='text'
            name='username'
            value={user.username}
            onChange={handleChange}
          />

          <label htmlFor='password' name='password' >Password*</label>

          <input
            type='password'
            name='password'
            value={user.password}
            onChange={handleChange}
          />
          <button >Log In</button>
        </form>
        
      </div>
    </>
  );

};

export default Login;
