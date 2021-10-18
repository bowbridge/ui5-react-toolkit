import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PersonForm } from '../src/forms/examples/PersonForm';

const App = () => {
  return (
    <div>
      <PersonForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
