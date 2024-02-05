import React from 'react';
import './App.scss';
import Header from "./Components/Header/Header"


function App(){
const [todos, setTodos] = React.useState([
  { id: 0, title: "TUSHUNMASAM hAM YOZDM", isCompleted: false },
]);
const handleDelete = (evt) => {
    const todoId = evt.target.dataset.todoId - 0;

    const filteredTodos = todos.filter((dyu) => dyu.id !== todoId);
    setTodos([...filteredTodos]);
  }

return (
     <>
     <form className="form">
        <input type="text" id="text__id"   onKeyUp={(evt) => {
          if (evt.code === "Enter" || evt.code === "Backspace") {
           const newTodo = {
          id: todos[todos.length - 1]?.id + 1 || 0,
          title: evt.target.value,
          isCompleted: false,
      };

      setTodos([...todos, newTodo]);
    }
  }}/>

        <ul className="list">
              {todos.map((row) => (
           <Header key={row.id} id={row.id} handleDelete={handleDelete}>
            {row.title}
          </Header>
  ))}
        </ul>
     </form>
     </>
)
}


export default App;
