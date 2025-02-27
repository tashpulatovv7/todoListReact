import { useDispatch, useSelector } from 'react-redux';
import { deleteCard } from './store';

export default function CardList({ setEditingCard }) {
	const cards = useSelector(state => state.cards);
	const dispatch = useDispatch();

	return (
		<div className='card-container'>
			{cards.map(card => (
				<div key={card.id} className='card'>
					<p>
						<strong>Name:</strong> {card.name}
					</p>
					<p>
						<strong>Last Name:</strong> {card.lastName}
					</p>
					<p>
						<strong>Email:</strong> {card.email}
					</p>
					<h3>Age: {card.title}</h3>
					<p>
						<strong>Gender:</strong> {card.jinsi}
					</p>

					<div className='card-buttons'>
						<button
							className='edit-button'
							onClick={() => setEditingCard(card)}
						>
							Edit
						</button>
						<button
							className='delete-button'
							onClick={() => dispatch(deleteCard(card.id))}
						>
							Delete
						</button>
					</div>
				</div>
			))}
		</div>
	);
}
