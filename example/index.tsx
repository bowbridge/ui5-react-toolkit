import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { TestForm } from '../src/forms/examples/TestForm';
import { ThemeProvider } from '@ui5/webcomponents-react';
const App = () => {
  return (
    <ThemeProvider>
      <TestForm />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
