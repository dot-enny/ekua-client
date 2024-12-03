import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export const SignUp = () => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

	const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
        navigate('/auth/verify');
		// setIsLoading(true);
		// const formData = new FormData(e.target as HTMLFormElement);
		// const { username, email, password } = Object.fromEntries(formData);
	};

	return (
		<div>
			<h2>Create an Account</h2>
			<form onSubmit={handleSignUp}>
				<input type="text" placeholder="username" name="username" required />
				<input type="email" placeholder="email" name="email" required />
				<input type="password" placeholder="password" name="password" required />
				<button disabled={isLoading}>{isLoading ? 'Loading...' :'Sign Up'}</button>
				<div className="auth-form__secondary-cta">
					<span>Already have an account ?</span>
					<Link to="/auth/sign-in">Login</Link>
				</div>
			</form>
		</div>
	)
}
