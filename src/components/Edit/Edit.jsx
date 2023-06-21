import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Employee from '../Employee/Employee';
import './Edit.css';

const Edit = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [id, setId] = useState('');

  let history = useNavigate();

  var index = Employee.map((i) => {
    return i.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let a = Employee[index];
    a.name = name;
    a.age = age;
    a.id = id;

    history('/');
  };

  useEffect(() => {
    setName(localStorage.getItem('Name'));
    setAge(localStorage.getItem('Age'));
    setId(localStorage.getItem('Id'));
  }, []);

  return (
    <div className='Add_container'>
      <form action=''>
        <input
          type='text'
          value={name}
          placeholder='Enter your name'
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type='number'
          value={age}
          placeholder='Enter your age'
          onChange={(e) => setAge(e.target.value)}
        />
        <br />

        <button
          type='submit'
          className='btn-submit'
          onClick={(e) => handleSubmit(e)}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;
