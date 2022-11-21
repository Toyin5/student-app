import React, { useState, useEffect } from 'react'
import { FaChevronRight, FaLock, FaUser, FaUserAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import "./Login.css"
function Login() {
	const [name, setName] = useState("");
	const [id, setId] = useState(null);
	const navigate = useNavigate();
	const user = localStorage.getItem("name");

	function handleSubmit(e) {
		e.preventDefault();
		localStorage.setItem("name", name);
		localStorage.setItem("id", id);
		navigate("/home")
	}


	useEffect(() => {
		if (user) {
			navigate("/home")
		}
	}, [user, navigate])

	return (
		<div className='login-panel content has-text-centered'>
			<header className='header'>
				<FaUser className='header-icon' /> <span className='header-text is-white'>Student App</span>
			</header>
			<form className="login" onSubmit={handleSubmit}>
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