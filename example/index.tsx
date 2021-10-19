import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PersonForm } from '../src/forms/examples/PersonForm';
import { RenderFormComponent } from '../src/forms/examples/Form';

const App = () => {
  return (
    <>
      <RenderFormComponent />
      <PersonForm />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
