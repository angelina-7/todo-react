import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <h1>ToDo App</h1>
        </header>

        <main className="todos">
            <h3>Tasks</h3>
            <TodoList />
        </main>

        <footer>
            <p>All rights reserved &copy;</p>
        </footer>
    </div>
  );
}

export default App;
