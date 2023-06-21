import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Employee from '../Employee/Employee';
import './Home.css';

function Home() {
  let history = useNavigate();

  const handleEdit = (id, name, age) => {
    localStorage.setItem('Id', id);
    localStorage.setItem('Name', name);
    localStorage.setItem('Age', age);
  };

  const handleDelete = (id) => {
    var index = Employee.map((i) => {
      return i.id;
    }).indexOf(id);

    Employee.splice(index, 1);

    history('/');
  };

  return (
    <>
      <div className='home'>
        <table style={{ width: '90%' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody className='tbl-body'>
            {Employee && Employee.length > 0
              ? Employee.map((item) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td className='tbl-btn'>
                        <Link to={'/edit'}>
                          <button
                            className='btn-edit'
                            onClick={() =>
                              handleEdit(item.id, item.name, item.age)
                            }
                          >
                            Edit
                          </button>
                        </Link>
                        <button
                          className='btn-delete'
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              : 'No data available'}
          </tbody>
        </table>

        <Link to='/create'>
          <button className='btn-create'>Create</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
