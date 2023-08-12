import * as React from 'react';
import Counter from './pages/MainPage';

class App extends React.Component {
    public render() {
        return <Counter startNumber={5} />;
    }
}

export default App;