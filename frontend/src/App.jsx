import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './pages/Login';
import Logup from './pages/Logup';
import {saveTask, getPriorities, logup, login, logout, updateTask, deleteTask} from './utils/master'
import Error from './pages/Error';
import Logout from './pages/Logout';
import {editLoader} from './pages/Edit';
import ModalContext from '../context/modalContext';
import './modal.css'
import {lazy, Suspense, useState } from 'react';
import { rootLoader } from './pages/Root';
import { viewLoader } from './pages/ViewTask';

const Root = lazy(() => import('./pages/Root'))
const Home = lazy(() => import('./pages/Home'))
const Tasks = lazy(() => import('./pages/Tasks'))
const NewTask = lazy(() => import('./pages/NewTask'))
const Edit = lazy(() => import('./pages/Edit'))
const ViewTask = lazy(() => import('./pages/ViewTask'))

const routes = createBrowserRouter([
  {path: '/app/', loader: rootLoader, element: <Root/>, children: [
    { index: true,
      element: <Suspense fallback={<p>Loading tasks...</p>}><Home/></Suspense>
    },
    { path: 'tasks',
      loader: () => import('./pages/Tasks').then(module => module.getTasks()),
      action: deleteTask,
      element:  <Suspense fallback={<p>Loading tasks...</p>}><Tasks/></Suspense>
    },
    { path: 'newTask',
      loader: getPriorities,
      action: saveTask,
      element: <Suspense fallback={<p>Loading page...</p>}><NewTask/></Suspense>
    },
    {path: 'task', children: [
      {
        path: 'view/:id', loader: viewLoader, element: <Suspense fallback={<p>Loading</p>}><ViewTask /></Suspense>
      },
      {
        path: 'edit/:id', id: 'edit', loader: editLoader, action: updateTask, element: <Suspense fallback={<p>Loading</p>}><Edit /></Suspense>
      },
      {
        path: 'delete', id: 'delete', loader: editLoader, element: <Edit />
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
