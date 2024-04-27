import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root, {rootLoader} from './pages/Root'
import Home from './pages/Home'
import Tasks from './pages/Tasks';
import NewTask from './pages/NewTask';
import Login from './pages/Login';
import Logup from './pages/Logup';
import {saveTask, getTasks, getPriorities, logup, login, logout, updateTask} from './utils/master'
import Error from './pages/Error';
import Logout from './pages/Logout';
import Edit, {editLoader} from './pages/Edit';
import ModalContext from '../context/modalContext';
import './modal.css'
import { useState } from 'react';

const routes = createBrowserRouter([
  {path: '/app/', loader: rootLoader, element: <Root/>, children: [
    {index: true, element: <Home/>},
    {path: 'tasks', loader: getTasks, element: <Tasks/>},
    {path: 'newTask', loader: getPriorities, action: saveTask, element: <NewTask/>},
    {path: 'task/:id', children: [
      {
        index: true
      },
      {
        path: 'edit', id: 'edit', loader: editLoader, action: updateTask , element: <Edit />
      },
      {
        path: 'delete', id: 'delete', loader: editLoader, action: updateTask , element: <Edit />
      }
    ]},
    
  ]},
  {path: '/', errorElement: <Error />, children: [
    {index: true, action: login, element: <Login />},
    {path: 'logup', action: logup, element: <Logup />},
    {path: 'logout', loader: logout, element: <Logout /> },
    
  ]}
])

const App = () => {
  const [show, setShow] = useState(false)
  const [id, setID] = useState(null)
  const showModal = () => setShow(true)
  const hideModal = () => setShow(false)
  const setTaskID = (val) => setID(val)

  return <>
      <ModalContext.Provider value={{show, showModal, hideModal, setTaskID, taskID: id}}>
        <RouterProvider router={routes} />
      </ModalContext.Provider>
  </>    
  
}

export default App
