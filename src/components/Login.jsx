import React, { useState } from 'react'
import { FaChevronRight, FaLock, FaUser, FaUserAlt } from 'react-icons/fa';
// import { Redirect } from 'react-router';
import "./Login.css"
function Login() {
	// const [details, setDetails] = useState({
	//     name:localStorage.getItem("name") || "",
	//     id:localStorage.getItem("id") || null
	// });
	const [name, setName] = useState("");
	const [id, setId] = useState(null);

	function handleSubmit() {
		// e.preventDefault();
		localStorage.setItem("name", name);
		localStorage.setItem("id", id);
	}

	return (
		<div className='login-panel content has-text-centered'>
			<header className='header'>
				<FaUser className='header-icon' /> <span className='header-text is-white'>Student App</span>
			</header>
			<form className="login" onSubmit={handleSubmit} method='GET'>
				<div className="login__field">
					<FaUserAlt className='login__icon' />
					<input type="text" onChange={(e) => setName(e.target.value)} className="login__input" name="uname" placeholder="Name" required />
				</div>
				<div className="login__field">
					<FaLock className='login__icon' />
					<input type="numeric" onChange={(e) => setId(e.target.value)} className="login__input" name="id" placeholder="Student ID" required />
				</div>
				<button type='submit' className="button login__submit">
					<span className="button__text">Log In</span>
					{/* <Redirect */}
					<FaChevronRight className='button__icon' />
				</button>
			</form>
		</div>
	)
}

export default Login