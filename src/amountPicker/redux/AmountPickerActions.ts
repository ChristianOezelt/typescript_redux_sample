import {Action} from "redux";

export enum AmountPickerActionNames {
    increment = 'AmountPicker: Increment',
    decrement = 'AmountPicker: Decrement'
}

export type AmountPickerAction = IncrementAction |  DecrementAction;

export interface IncrementAction extends Action<AmountPickerActionNames.increment> {
    payload: {
        incrementBy?: number;
    }
}

export interface DecrementAction extends Action<AmountPickerActionNames.decrement> {
    payload: {
        decrementBy?: number;
    }
}

export const AmountPickerActionCreators = {
    increment: ( payload: IncrementAction['payload'] = {}): IncrementAction => ({
        type: AmountPickerActionNames.increment,
        payload
    }),
    decrement: (payload: DecrementAction['payload'] = {}): DecrementAction => ({
        type: AmountPickerActionNames.decrement,
        payload
    })
};
