function SignIn(){
    return(
     <center>
        <form method="POST" action="http://greatminds.42web.io/db-connect.php" >
        <h1>Login</h1>
        <div >
					<label className="label_deg">USERNAME</label>
					<input className="input" type="text" name="name" placeholder="FirstName" required></input>
				</div>
				<div>
					<label className="label_deg">PASSWORD</label>
					<input className="input" type="password" name="password" placeholder="Password" required maxLength={20} minLength={8}></input>
				</div>
				<div>

					<input className="btn btn-primary" type="submit" name="submit"value="Login"></input>
				</div>
				<h4>Registered yet?</h4>
				<a href="/SignUp">click here</a>
                </form>
     </center>
    );
}

export default SignIn