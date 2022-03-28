import React from 'react';
import './List.css'

const List = (props) => {

const deleteitem =(key) =>{
const newList = props.todos.filter((itemObj)=>{
    return itemObj.key !== key;
});
props.setTodos(newList);
}

  return (
    <div>
        {props.todos.map((itemObj) =>{
        return <div className='item'>
            <p>{itemObj.item}</p>
            <button  onClick={()=>deleteitem(itemObj.key)}>X</button>
            </div>
        })}
    </div>
  )
}

export default List;