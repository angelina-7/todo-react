import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <h1>ToDo App</h1>
        </header>

        <main className="todos">
            <TodoList />
            <ul>
              <li>Hi from outside component</li>
            </ul>
        </main>

        <footer>
            <p>All rights reserved &copy;</p>
        </footer>
    </div>
  );
}

export default App;
