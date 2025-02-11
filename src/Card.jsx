import React from 'react';

const UserCard = ({ user }) => {
	return (
		<div className='col'>
			<div className='card border-primary shadow-sm'>
				<div className='card-body text-center'>
					<img
						src='https://via.placeholder.com/80'
						alt='User'
						className='rounded-circle mb-2 border border-primary p-1'
					/>
					<h5 className='card-title text-primary'>{user.fullName}</h5>
					<p className='mb-1'>
						<strong>Email:</strong>{' '}
						<a
							href={`mailto:${user.email}`}
							className='text-decoration-none'
						>
							{user.email}
						</a>
					</p>
					<p className='mb-1'>
						<strong>Tel:</strong> {user.phone}
					</p>
					<p className='mb-1'>
						<strong>Birth date:</strong> {user.birthDate}
					</p>
					<p className='mb-1'>
						<strong>Gender:</strong> {user.gender}
					</p>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
