import * as React from "react";

export interface ConditionProps {
    amount: number;
}

export interface ActionProps {
    onIncrement: () => void;
    onDecrement: () => void;
}

export interface Props extends ConditionProps, ActionProps {}

export const AmountPickerPresenter: React.SFC<Props> = ({
  amount,
  onDecrement,
  onIncrement
}) => (
  <div>
    <button onClick={onIncrement}> + </button>
    <span> [{amount}] </span>
    <button onClick={onDecrement}> - </button>
  </div>
);
