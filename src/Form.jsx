import React, { useState } from 'react';

const Form = ({ addUser }) => {
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		phone: '',
		birthDate: '',
		hobbies: [],
		country: '',
		comment: '',
	});

	const handleChange = e => {
		const { name, value, type, checked } = e.target;
		if (type === 'checkbox') {
			setFormData({
				...formData,
				hobbies: checked
					? [...formData.hobbies, value]
					: formData.hobbies.filter(hobby => hobby !== value),
			});
		} else {
			setFormData({ ...formData, [name]: value });
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		addUser(formData);
		setFormData({
			fullName: '',
			email: '',
			phone: '',
			birthDate: '',
			hobbies: [],
			country: '',
			comment: '',
		});
	};

	return (
		<div className='card shadow-sm'>
			<div className='card-body'>
				<h5 className='card-title text-center text-primary'>Add User</h5>
				<form onSubmit={handleSubmit}>
					<div className='mb-3'>
						<input
							type='text'
							name='fullName'
							placeholder='Name & Surname'
							className='form-control'
							value={formData.fullName}
							onChange={handleChange}
							required
						/>
					</div>
					<div className='mb-3'>
						<input
							type='email'
							name='email'
							placeholder='Email'
							className='form-control'
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className='mb-3'>
						<input
							type='tel'
							name='phone'
							placeholder='Phone Number'
							className='form-control'
							value={formData.phone}
							onChange={handleChange}
							required
						/>
					</div>
					<div className='mb-3'>
						<input
							type='date'
							name='birthDate'
							className='form-control'
							value={formData.birthDate}
							onChange={handleChange}
						/>
					</div>

					<div className='mb-3'>
						<label className='form-label'>Gender:</label>
						<div className='form-check'>
							<input
								className='form-check-input'
								type='radio'
								name='gender'
								value='Man'
								checked={formData.gender === 'Man'}
								onChange={handleChange}
							/>
							<label className='form-check-label'>Man</label>
						</div>
						<div className='form-check'>
							<input
								className='form-check-input'
								type='radio'
								name='gender'
								value='Woman'
								checked={formData.gender === 'Woman'}
								onChange={handleChange}
							/>
							<label className='form-check-label'>Woman</label>
						</div>
					</div>

					<button type='submit' className='btn btn-primary w-100'>
						Add
					</button>
				</form>
			</div>
		</div>
	);
};

export default Form;
