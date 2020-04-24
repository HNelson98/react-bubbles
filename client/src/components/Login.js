import React from "react";

class Login extends React.Component {

  state = {
    credentials: {
      username: "",
      password: "",
    }
  }


  render() {
    return (
      <>
        <h1>Welcome to the Bubble App!</h1>
        <div className='formDiv'>
          <br/>
          <label htmlFor='username' name='username' >Username*</label>
          <form>
            <input
              type='text'
              name='username'
              value={this.state.credentials.username}
            />
            <br />
            <label htmlFor='password' name='password' >Password*</label>
            <br />
            <input
            type= 'password'
            name= 'password'
            value={this.state.credentials.password}
            />
          </form>
        </div>
      </>
    );
  }
};

export default Login;
