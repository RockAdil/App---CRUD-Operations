import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

import Employee from '../Employee/Employee';
import './Add.css';

const Add = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    Employee.push({ id: uniqueId, name: name, age: age });

    history('/');
  };

  return (
    <div className='Add_container'>
      <form action=''>
        <input
          type='text'
          placeholder='Enter your name'
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type='number'
          placeholder='Enter your age'
          onChange={(e) => setAge(e.target.value)}
        />
        <br />

        <button
          type='submit'
          className='btn-submit'
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add;
