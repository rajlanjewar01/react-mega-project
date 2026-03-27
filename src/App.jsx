import './App.css'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Header, Footer } from './components/index';

function App() {
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		authService.getCurrentUser()
		.then((userData) => {
			if(userData) {
				dispatch(login({userData}));
			} else {
				dispatch(logout());
			}
		})
		.finally(() => {
			setLoading(false);
		})
	}, []);

	return !loading ?(
		<div>
			<Header />
			<main>
				main content...
			</main>
			<Footer />
		</div>
	): null
}

export default App
