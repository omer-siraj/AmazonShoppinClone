import { Type } from './action.type';

export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET: {
      const existingItem = state.basket.find(item => item.id === action.item.id);

      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      }

      return {
        ...state,
        basket: state.basket.map(item =>
          item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item
        ),
      };
    }

    case Type.REMOVE_FROM_BASKET: {
      const itemToRemove = state.basket.find(item => item.id === action.id);

      if (!itemToRemove) return state;

      if (itemToRemove.amount > 1) {
        return {
          ...state,
          basket: state.basket.map(item =>
            item.id === action.id
              ? { ...item, amount: item.amount - 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        basket: state.basket.filter(item => item.id !== action.id),
      };
    }

    default:
      return state;
  }
};
