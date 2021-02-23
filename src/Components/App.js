import './App.css';
import Title from './Title/title';
function App() {
  return (
    <div className="App">
      <div className="container">
      <h1 className="display-2 text-center">Hello React</h1>
      <Title name="NASA" email="nasa.21@gmail.com"></Title>
      <Title name="Google" email="google.20@gmail.com"></Title>
      <Title name="Microsoft" email="microsoft.19@gmail.com"></Title>
      </div>
    </div>
  );
}

export default App;
