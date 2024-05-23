import './App.css';
import Page1 from './components/Page1.jsx';
import Page2 from './components/Page2.jsx';
import Page4 from './components/Page4.jsx';

function App() {
  return (
    <div className="App">
      <Page1 />
      <Page2 />
      <Page4 />
      <Page1 />
      <Page1 />
    </div>
  );
}

export default App;
