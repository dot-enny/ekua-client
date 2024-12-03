import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export const SignIn = () => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    navigate('/');

	const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
        navigate('/');
		// const formData = new FormData(e.target as HTMLFormElement);
		// const { username, email, password } = Object.fromEntries(formData);
	};

	return (
		<div>
			<h2>Welcome Back;</h2>
			<form onSubmit={handleSignIn}>
				<input type="email" placeholder="email" name="email" required />
				<input type="password" placeholder="password" name="password" required />
				<button disabled={isLoading}>{isLoading ? 'Loading...' :'Sign In'}</button>
				<div className="auth-form__secondary-cta">
					<span>Don't have an account yet ?</span>
					<Link to="/auth/sign-up">Register</Link>
				</div>
			</form>
		</div>
	)
}
