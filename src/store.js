import { configureStore, createSlice } from '@reduxjs/toolkit';

// LocalStorage-dan ma'lumotni olish
const loadFromLocalStorage = () => {
	try {
		const data = localStorage.getItem('cards');
		return data ? JSON.parse(data) : [];
	} catch (error) {
		console.error('Error loading from localStorage', error);
		return [];
	}
};

// LocalStorage-ga ma'lumotni saqlash
const saveToLocalStorage = state => {
	try {
		localStorage.setItem('cards', JSON.stringify(state));
	} catch (error) {
		console.error('Error saving to localStorage', error);
	}
};

const cardSlice = createSlice({
	name: 'cards',
	initialState: loadFromLocalStorage(),
	reducers: {
		addCard: (state, action) => {
			state.push(action.payload);
			saveToLocalStorage(state);
		},
		deleteCard: (state, action) => {
			const newState = state.filter(card => card.id !== action.payload);
			saveToLocalStorage(newState);
			return newState;
		},
		updateCard: (state, action) => {
			const index = state.findIndex(card => card.id === action.payload.id);
			if (index !== -1) {
				state[index] = action.payload;
			}
			saveToLocalStorage(state);
		},
	},
});

export const { addCard, deleteCard, updateCard } = cardSlice.actions;
export const store = configureStore({ reducer: { cards: cardSlice.reducer } });
