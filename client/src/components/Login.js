import React from "react";

class Login extends React.Component {

  state = {
    credentials: {
      username: "",
      password: "",
    }
  }

  handleChange = event =>{
    this.setState({
        credentials: {
            ...this.state.credentials,
            [event.target.name]: event.target.value 
        }
    })
}

  render() {
    return (
      <>
        <h1>Welcome to the Bubble App!</h1>
        <div className='formDiv'>
          
          
          <form>
          <label htmlFor='username' name='username' >Username*</label>
            <input
              type='text'
              name='username'
              value={this.state.credentials.username}
              onChange= {this.handleChange}
            />
            
            <label htmlFor='password' name='password' >Password*</label>
            
            <input
            type= 'password'
            name= 'password'
            value={this.state.credentials.password}
            onChange= {this.handleChange}
            />
          </form>
          <button>Log In</button>
        </div>
      </>
    );
  }
};

export default Login;
