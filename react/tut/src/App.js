import './App.css';
import Navbar from './Navbar'

function App() {
  const title = "Hi"
  return (
    <div className="App">
      <Navbar />
      <h1>App Component</h1>
      <h2>{title}</h2>
    </div>
  );
}

export default App;
