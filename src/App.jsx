import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import UserCard from './Card';
import Form from './Form';

const App = () => {
	const [users, setUsers] = useState([]);

	const addUser = user => {
		setUsers([...users, user]);
	};

	return (
		<div className='container py-4'>
			<h2 className='text-center text-white bg-primary p-3 rounded'>TODO LIST</h2>
			<div className='row mt-4'>
				<div className='col-lg-4 col-md-6'>
					<Form addUser={addUser} />
				</div>
				<div className='col-lg-8 col-md-6'>
					<div className='row row-cols-1 row-cols-md-2 g-3'>
						{users.map((user, index) => (
							<UserCard key={index} user={user} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
