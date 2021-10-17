import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RenderFormComponent } from '../src/forms/examples/Form';

const App = () => {
  return (
    <div>
      <RenderFormComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
