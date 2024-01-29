import "./App.css";
import Todo from "./components/Todo/Todo";
import View from "./components/View/View";
import { useSelector, useDispatch } from "react-redux";
import { todoComplete, todoDelete } from "./components/redux/todoSlice";

function App() {

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const completeTodo = (key) => {
    dispatch(todoComplete({ key }));
  };
  const deleteTodo = (key) => {
    dispatch(todoDelete({ key }));
  };

  return (
    <div>
      <div className="NavBar">
        <h3 className="Title">React Todo App</h3>
      </div>
      <div className="container">
        <Todo />
        <div className="Scroll content">
          <div className="data">
            {todos.map(({ title, completed }, key) => {
              return (
                <View
                  key={key}
                  text={title}
                  status={completed}
                  completeTodo={() => completeTodo(key)}
                  deleteTodo={() => {
                    deleteTodo(key);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
