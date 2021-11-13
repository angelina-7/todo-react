// import React from "react";
import { useState, useEffect } from "react";
import uniqid from "uniqid";
import TodoListItem from "./TodoListItem";
import {createTodo} from '../services/todoService';

const color = "#00864e";
const API_URL = 'http://localhost:3030/jsonstore';

export default function TodoList() {
    // let [todos, setTodos] = React.useState([
    //     {
    //         id: uniqid(),
    //         text: 'learn react componets',
    //         isDone: false
    //     }
    // ]);
    let [todos, setTodos] = useState([]);

    //on mounting func //return on unmounting func
    useEffect(() =>{
        fetch(`${API_URL}/todos`)
            .then(res => res.json())
            .then(todosResult => {
                setTodos(Object.values(todosResult));
            });
        
    }, []);

    const addTodoInputBlurHandler = (e) => {
        let todo = {
            id: uniqid(),
            text: e.target.value,
            isDone: false
        }

        createTodo(todo)
            .then(createdTodo => {
                setTodos(oldStateTodos => [
                    ...oldStateTodos, 
                    createdTodo
                ]);
                e.target.value = '';
            })
            .catch(err => {
                console.log(err);
            });
        
    }

    const deleteTodoItemClickHandler = (id) => {
        setTodos(oldStateTodos => oldStateTodos.filter(todo => todo.id !== id));
    };

    const toggleDoneTodoItemClickHandler = (id) => {
        setTodos(oldStateTodos => {
            return oldStateTodos.map(todo => 
                todo.id === id 
                ? {...todo, isDone: !todo.isDone}
                : todo
            )
        });
    };

    //onDelete ={() => deleteTodoItemClickHandler(todo.id)}
    return (
        <>
        {todos.length > 0 && <h3>You have new Tasks</h3>}
        {todos.length > 0 || <h3>No new Tasks</h3>}
        <ul>
            <TodoListItem color = {color} onDelete ={() => {}}>
                clean your room</TodoListItem>
            <TodoListItem color = {color} onDelete ={() => {}}>
                sunbath</TodoListItem>
            <TodoListItem color = {color} onDelete ={() => {}}>
                learn react</TodoListItem>
            {todos.map(todo => 
                <TodoListItem 
                    key = {todo.id}
                    id = {todo.id}
                    isDone = {todo.isDone}
                    onDelete ={deleteTodoItemClickHandler}
                    onClick = {toggleDoneTodoItemClickHandler}
                >{todo.text}
                </TodoListItem>
            )}
            
        </ul>
        <input type= "text" id = "todo-input"onBlur = {addTodoInputBlurHandler} />
        <label htmlFor="todo-input">Add ToDo: </label>
        <button onClick = {() => {/*do somth*/}}>Modify</button>
        </>
    );
}