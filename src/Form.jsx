import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard, updateCard } from './store';

export default function FormComponent({ editingCard, setEditingCard }) {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		id: null,
		title: '',
		name: '',
		lastName: '',
		email: '',
		category: 'default',
		subscribe: false,
	});

	useEffect(() => {
		if (editingCard) {
			setFormData(editingCard);
		}
	}, [editingCard]);

	const handleChange = e => {
		const { name, value, type, checked } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (
			formData.title.trim() &&
			formData.name.trim() &&
			formData.lastName.trim() &&
			formData.email.trim()
		) {
			if (formData.id) {
				dispatch(updateCard(formData));
			} else {
				dispatch(addCard({ ...formData, id: Date.now() }));
			}
			setFormData({
				id: null,
				title: '',
				name: '',
				lastName: '',
				email: '',
				category: 'default',
				subscribe: false,
			});
			setEditingCard(null);
		}
	};

	return (
		<form onSubmit={handleSubmit} className='form-container'>
			<input
				className='input'
				name='name'
				value={formData.name}
				onChange={handleChange}
				placeholder='Name'
			/>
			<input
				className='input'
				name='lastName'
				value={formData.lastName}
				onChange={handleChange}
				placeholder='Last Name'
			/>
			<input
				className='input'
				type='email'
				name='email'
				value={formData.email}
				onChange={handleChange}
				placeholder='Email'
			/>
			<input
				className='input-number'
				type='number'
				name='title'
				value={formData.title}
				onChange={handleChange}
				placeholder='Age'
			/>
			<select
				className='inputss'
				name='jinsi'
				value={formData.category}
				onChange={handleChange}
			>
				<option value='default' disabled>
					Select Gender
				</option>
				<option value='Male'>Male</option>
				<option value='Female'>Female</option>
			</select>

			<button className='button' type='submit'>
				{formData.id ? 'Update' : 'Add'}
			</button>
		</form>
	);
}
