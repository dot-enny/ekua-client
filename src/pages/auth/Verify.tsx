import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Verify = () => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    navigate('/');

	const handleVerify = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
        navigate('/');
		setIsLoading(true);
		// const formData = new FormData(e.target as HTMLFormElement);
		// const { username, email, password } = Object.fromEntries(formData);
	};

	return (
		<div>
			<h2>Welcome Back;</h2>
			<form onSubmit={handleVerify}>
				<input type="number" placeholder="enter code" name="code" required />
				<button disabled={isLoading}>{isLoading ? 'Loading...' :'Verify'}</button>
			</form>
		</div>
	)
}
