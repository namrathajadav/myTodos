import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Todos from './Todos/Todos';
import AddTodos from './Todos/AddTodos';
import EditTodods from './Todos/EditTodos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Todos/>}/>
          <Route path='/add' element={<AddTodos/>}/>
          <Route path='/edit/:id' element={<EditTodods/>}/>
          </Routes>
      </header>
    </div>
  );
}

export default App;
