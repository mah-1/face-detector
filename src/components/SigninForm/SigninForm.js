import React from 'react';


class SigninForm extends React.Component{
	constructor(props){
		super(props);
		this.state={
			signInEmail:'',
			signInPassword:''

		}
	}

onEmailChange = (event) => {
	this.setState({signInEmail:event.target.value})
}
onPasswordChange=(event) => {
	this.setState({signInPassword:event.target.value})
}
onSigninSubmit = () => {
	fetch('https://fathomless-cove-80327.herokuapp.com/signin', {
      method: 'post',
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password:this.state.signInPassword

      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }


render()
	{
		const {onRouteChange} = this.props;
		return(
			<div className='mt6'>
			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 h-auto center">
				<main className="pa4 black-80">
				  <div className="measure center">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="center f4 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
					        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        type="email" 
					        autoComplete="email" 
					        name="email-address"  
					        id="email-address"
					        onChange={this.onEmailChange}
				        />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6"  htmlFor="password">Password</label>
				        <input 
					        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        type="password"  
					        autoComplete="current-password"
					        name="password"  
					        id="password"
					        onChange={this.onPasswordChange}
				        />
				      </div>
				      <div className="center">
				      <input 
					      onClick={this.onSigninSubmit} 
					      className="b ph3 pv2 input-reset br-pill  b--black bg-transparent grow pointer f6 dib"  
					      type="submit" 
					      value="Sign in"
				      />
				    </div>
				    <div className="center lh-copy mt3">
				      <a onClick={()=> onRouteChange('register')} href="#0" className=" f6 link dim black db pointer">Register</a>
				      
				    </div>
				    </fieldset>
				    
				  </div>
				</main>
				</article>
			</div>

		)}





	

}





export default SigninForm;