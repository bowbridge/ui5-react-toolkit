import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TestForm } from '../src/forms/examples/TestForm';
import { HooksTest } from '../src/temp/HooksTest';
const App = () => {
  return (
    <>
      <HooksTest />
      <TestForm />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
