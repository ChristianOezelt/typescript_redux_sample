import { AmountPickerState } from "./amountPicker/redux/AmountPickerState";
import { createStore, Store, combineReducers } from "redux";
import { AmountPickerReducer } from "./amountPicker/redux/AmountPickerReducer";

export interface RootState {
    amountPicker: AmountPickerState
}

export const getNewStore = (): Store<RootState> => createStore(combineReducers({ amountPicker: AmountPickerReducer }));
