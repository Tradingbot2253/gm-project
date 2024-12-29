

function Signup() {
  return (
    <>
	
      <center >
        <h1>Welcome to the Smart Energy Project Portal</h1> </center>
        <hr></hr>
		
        <center><h1>Register</h1></center>
        <br></br>
        <form className="gg" method="post" action="http://greatminds.42web.io/data_check.php">
          <div className="input-g">
            <i className="fas fa-user"></i>
            <label className="label_deg"></label>
            <input
			className="input"
              type="text"
              name="username"
              placeholder="Firstname"
              required
              minLength={3}
              maxLength={20}
              aria-required
            ></input>
          </div>

          <div className="input-g">
            <i className="fas fa-user"></i>
            <label className="label_deg"></label>
            <input
			className="input"
              type="text"
              name="Sname"
              placeholder="Secondname"
              required
              minLength={3}
              maxLength={20}
            ></input>
          </div>

          <div className="input-f">
            <i className="fas fa-email"></i>
            <label className="label_deg"></label>
            <input
			className="input"
              type="email"
              name="email"
              placeholder="email"
              required
              minLength={3}
              maxLength={30}
            ></input>
          </div>

          <div className="input-g">
            <i className="fas fa-lock"></i>
			<label className="password"></label>
            <input
			
			className="input"
              type="password"
              name="password"
              id="password"
              placeholder="password"
              required
            ></input>
          
            <p className="recover">
              <a href="#">Recover password</a>
            </p>

            <button
              type="submit"
              name="submit"
              className="btn btn-primary"
              value="Sign up"
              id="signUpButton"
            >Sign Up</button>
          </div>

          <p className="or">--------------Or-----------------</p>
          <div className="icons">
            <i className="fab fa-google"></i>
            <i className="fab fa-facebook"></i>
          </div>
		  <div> 
<p>Have account?</p>
<button id="signUpButton" className="links"><a href="/SignIn">SignIn</a></button>
</div>
        </form>
     
     
    </>
  );
}

export default Signup;
