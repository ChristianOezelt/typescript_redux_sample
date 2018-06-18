import {Reducer} from "redux";
import {AmountPickerState, defaultState} from "./AmountPickerState";
import {AmountPickerAction, AmountPickerActionNames} from "./AmountPickerActions";

export const AmountPickerReducer: Reducer<AmountPickerState, AmountPickerAction> = (state = defaultState, action) => {
    switch (action.type) {
        case AmountPickerActionNames.increment:
            return {
                ...state,
                amount: state.amount + (action.payload.incrementBy || 1)
            };
        case AmountPickerActionNames.decrement:
            return {
                ...state,
                amount: decrease(state.amount, action.payload.decrementBy)
            };
        default:
            return state;
    }
};

const decrease = (amount: number, decrementBye: number = 1) => amount - decrementBye < 0 ? 0 : amount - decrementBye;
