import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './pages/Root'
import Home from './pages/Home'
import Tasks from './pages/Tasks';
import NewTask from './pages/NewTask';
import Login from './pages/Login';
import Logup from './pages/Logup';
import {saveTask, getTasks, getPriorities, logup, login, checkLogin, logout} from './utils/master'
import Error from './pages/Error';
import Logout from './pages/Logout';

const routes = createBrowserRouter([
  {path: '/app/', loader: checkLogin, element: <Root/>, children: [
    {index: true, element: <Home/>},
    {path: 'tasks', loader: getTasks, element: <Tasks/>},
    {path: 'newTask', loader: getPriorities, action: saveTask, element: <NewTask/>},
    
  ]},
  {path: '/', errorElement: <Error />, children: [
    {index: true, action: login, element: <Login />},
    {path: 'logup', action: logup, element: <Logup />},
    {path: 'logout', loader: logout, element: <Logout /> },
    
  ]}
])

const App = () => {
  return <RouterProvider router={routes} />
}

export default App
