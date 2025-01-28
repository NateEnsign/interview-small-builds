import React, {useState} from 'react'

import './NewChore.css';

const NewChore = ({addChore}) => {
    const [inputData, setInputData] = useState('');

    const handleInputData = (e) => {
        setInputData(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const newChore = {
            id: Math.random().toString(),
            title: inputData,
        }
        addChore(newChore);
    }

  return (
    <form className='chore-form' onSubmit={submitHandler}>
        <input type="text" value={inputData} onChange={handleInputData} />
        <button type='submit'>Add Chore</button>
    </form>
  )
}

export default NewChore