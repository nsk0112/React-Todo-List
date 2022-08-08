import React, { useState } from 'react'
import './Add.scss'

export const Add = ({ onCallback }) => {
  const [item, setItem] = useState("");

  const handleChange = event => {
    setItem(event.target.value);
  }

  const handleClick = event => {
    event.preventDefault();
    console.log(item);
    addElement();
  }

  const addElement = () => {
    onCallback()
  }

  return (
    <div className='add'>
      <input type="text" className='new-task' placeholder='Add new task...' onChange={handleChange} />
      <button className='add-button' onClick={() => handleClick()}>Add</button>
    </div>
  )
}
