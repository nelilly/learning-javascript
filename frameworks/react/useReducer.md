### simple toggle

[Building a todo-list with React Hooks’ useReducer()](https://medium.com/@n.raj.suthar/building-a-todo-list-with-react-hooks-usereducer-95432a261c11)

```js
const [open, toggle] = useReducer((state) => !state, false);
```

```js
onClick={() => toggle()}
```

### Toggle in state

```js
const initialState = [
  {
    name: 'Apple',
    checked: false
  },
  {
    name: 'Cherry',
    checked: false
  }
]
```

```js
const reducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return { ...state, checked: !state.checked };
    case 'itemsList':
      return { ...state, itemsList: action.payload };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};
```

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

```js
onClick={(event) => pageDispatch({ type: 'toggle', payload: event.target.value})}

remove={() => dispatch({type: "remove", id: t.id})}
edit={text => dispatch({type: "edit", id: t.id, text: text})}
```

```js
export const initialState = {
  counter: 2,
  todos: [{
    id: 1,
    text: "One",
  }, {
    id: 2,
    text: "Two",
  }],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "create":
      {
        const newCounter = state.counter + 1;
        const newTodo = {
          id: newCounter,
          text: action.text,
        };
        return {
          counter: newCounter,
          todos: [...state.todos, newTodo],
        };
      }
    case "update":
      {
        const idx = state.todos.findIndex(t => t.id === action.id);
        const todo = Object.assign({}, state.todos[idx]);
        todo.text = action.text;
        const todos = Object.assign([], state.todos);
        todos.splice(idx, 1, todo);
        return {
          counter: state.counter,
          todos: todos,
        };
      }
    case "delete":
      {
        const idx = state.todos.findIndex(t => t.id === action.id);
        const todos = Object.assign([], state.todos);
        todos.splice(idx, 1);
        return {
          counter: state.counter,
          todos: todos,
        };
      }
    default:
      return state;
  }
};
```

