import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TestForm } from '../src/forms/examples/TestForm';

const App = () => {
  return (
    <>
      <TestForm />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
