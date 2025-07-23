import React from 'react';
import ExampleComponent from './components/ExampleComponent';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1 className="text-3xl font-bold underline">Welcome to My Vite React App</h1>
            <ExampleComponent message="Hello from ExampleComponent!" />
        </div>
    );
};

export default App;