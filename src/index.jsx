import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './list';

const list = [];
ReactDOM.render(
    <ToDoList toDoList={list} />,
    document.querySelector('#root')
);