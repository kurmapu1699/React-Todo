import React,{useState} from 'react';
import './App.css';
import List from './List';

const App = () => {

  const [item,setItem] = useState("");
  const [todos,setTodos] = useState([]);

  const onChangeHandler = e =>{
    setItem(e.target.value);
  }


  const additem = ()=>{
    setTodos([...todos,{item:item,key:Date.now()}]);
    console.log(todos)
    setItem("")
  }


  return (
    <div className='App'>
      <header className='App-header'>
      <h1>Todo sample Application</h1>
        <div className='Body'>
          <div className='input-body'>
            <input value={item} onChange={onChangeHandler} placeholder="Enter something.."/>&nbsp;
            <button className='btn btn-primary' onClick={additem}>Add</button>
          </div>
          <List todos={todos} setTodos={setTodos}/>
        </div>
      </header>
    </div>
  )
}

export default App;