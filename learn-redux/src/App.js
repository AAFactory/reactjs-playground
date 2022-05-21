import logo from './logo.svg';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import Counter2 from './components/Counter2';
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <div>
      <CounterContainer />
      <Counter2 />
      <hr/>
      <TodosContainer />
    </div>
  );
}

export default App;
