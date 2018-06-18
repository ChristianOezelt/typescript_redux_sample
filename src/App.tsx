import * as React from 'react';

import { Provider } from 'react-redux';
import { getNewStore } from './Store';
import { AmountPicker } from './amountPicker/AmountPicker';

class App extends React.Component {
  public render() {
    return (
      <Provider store={getNewStore()}>
        <AmountPicker />
      </Provider>
    );
  }
}

export default App;
