import { useState } from 'react';
import { Provider } from 'react-redux';
import CardList from './Card';
import FormComponent from './Form';
import { store } from './store';
import './style.css';

export default function App() {
	const [editingCard, setEditingCard] = useState(null);
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		const newMode = !isDarkMode;
		setIsDarkMode(newMode);

		if (newMode) {
			document.body.setAttribute('data-theme', 'dark');
		} else {
			document.body.setAttribute('data-theme', 'light');
		}
	};

	return (
		<Provider store={store}>
			<div className='container'>
				<FormComponent editingCard={editingCard} setEditingCard={setEditingCard} />
				<CardList setEditingCard={setEditingCard} />
			</div>
			<div className='App'>
				<button onClick={toggleDarkMode} className='toggle-dark-mode'>
					{isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
				</button>
			</div>
		</Provider>
	);
}
