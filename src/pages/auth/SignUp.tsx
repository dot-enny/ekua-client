import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from 'axios';

const BASE_URL = 'http://enny123-001-site1.qtempurl.com/api/';

export const SignUp = () => {
    const navigate = useNavigate();

	const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const { firstname, lastname, email, password, confirmPassword } = Object.fromEntries(formData) as { [key: string]: string };

		console.log({ firstname, lastname, email, password, confirmPassword });
		signUpMutation({ firstname, lastname, email, password, confirmPassword });
	};

	const signUp = async (userData: { firstname: string; lastname: string; email: string; password: string; confirmPassword: string }) => {
		const response = await axios.post(`${BASE_URL}auth/register/`, userData, {
			headers: {
				"Content-Type": "application/json",
				// "Access-Control-Request-Method": "*",
				// "Origin": "http://localhost:5173",
				// "Access-Control-Allow-Origin": "*",
			},
			withCredentials: true, // If credentials like cookies are required
		}
		);
		return response.data;
	};

	const { mutateAsync: signUpMutation, isPending } = useMutation({
		mutationFn: signUp,
		onSuccess: (data: any) => {
			console.log('User signed up successfully:', data);
			navigate('/');
		},
		onError: (error: any) => {
			console.error('Error signing up:', error);
		},
	});

	return (
		<div>
			<h2>Create an Account</h2>
			<form onSubmit={handleSignUp}>
				<input type="text" placeholder="firstname" name="firstname" required />
				<input type="text" placeholder="lastname" name="lastname" required />
				<input type="email" placeholder="email" name="email" required />
				<input type="password" placeholder="password" name="password" required />
				<input type="password" placeholder="confirm password" name="confirmPassword" required />
				<button disabled={isPending}>{isPending ? 'Loading...' :'Sign Up'}</button>
				<div className="auth-form__secondary-cta">
					<span>Already have an account ?</span>
					<Link to="/auth/sign-in">Login</Link>
				</div>
			</form>
		</div>
	)
}