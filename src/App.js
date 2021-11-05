// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";







function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const addTodo = (title, desc, status, initDate, deadline,FDate) => {
    console.log('Add this title :- ', title, ' & desc :- ', desc)
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      status: status,
      initDate: initDate,
      deadline: deadline,
      FinishedDate:FDate
    }

    setTodos([...todos, myTodo])
    console.log(myTodo)
  }



  const onDelete = (todo) => {
    console.log('Precisely its deleted', todo)

    setTodos(todos.filter((e) => {
      return e !== todo
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }


  const onEdit = (todo) => {
    console.log('Precisely its Edited', todo)

    var date = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();

    date = mm + '/' + dd + '/' + yyyy;
  

    todos.map((e) => {
      if (e === todo) {
        e.status = 'Finished'
        e.FinishedDate = date
        setTodos([...todos])
      }
    })

    console.log(todos)

    localStorage.setItem("todos", JSON.stringify(todos));
    let c = localStorage.getItem('todos')
    console.log(c)
  }




  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])




  return (
    <>
      <Router>
        <Header title="ToDo's List" searchBox={true} />
        <Switch>
          <Route exact path='/' render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} onEdit={onEdit} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;

