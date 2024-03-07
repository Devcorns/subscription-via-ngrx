export interface Action {
  type: string,
  payload?: any,
  fyi?: any
}

export const ACTIONS = {
  ADD_FOOD: 'ADD_FOOD',
  REMOVE_FOOD: 'REMOVE_FOOD',
};

export interface IFood {
  id: number;
  name: string;
}

export interface MyAppState {
  foods: Array<IFood>;
}

export function food_reducer(state: Array<IFood> = [], action: Action) {
  switch (action.type) {
    case ACTIONS.ADD_FOOD:
      return [...state, action.payload];
    case ACTIONS.REMOVE_FOOD:
      return state.filter((food) => food.id !== action.payload.id);
    default:
      return state;
  }
}
