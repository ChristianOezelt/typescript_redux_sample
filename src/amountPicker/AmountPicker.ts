import { Dispatch, connect } from 'react-redux';
import { ActionProps, AmountPickerPresenter, ConditionProps } from './AmountPickerPresenter';
import { AmountPickerActionCreators } from './redux/AmountPickerActions';
import { RootState } from '../Store';

export const mapStateToProps = ( state: RootState  ): ConditionProps => ({
    amount: state.amountPicker.amount
});

export const mapDispatchToProps = ( dispatch: Dispatch ): ActionProps => ({
    onDecrement: () => dispatch( AmountPickerActionCreators.decrement()),
    onIncrement: () => dispatch( AmountPickerActionCreators.increment())
});

export const AmountPicker = connect(
    mapStateToProps,
    mapDispatchToProps
)( AmountPickerPresenter );
