import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './pages/Root'
import Home from './pages/Home'
import Tasks from './components/Tasks';
import NewTask from './components/NewTask';
import Login from './pages/Login';
import Logup from './pages/Logup';
import {saveTask, getTasks, getPriorities, logup, login, checkLogin} from './utils/master'
import Error from './pages/Error';

const routes = createBrowserRouter([
  {path: '/app/', element: <Root/>, children: [
    {index: true, loader: checkLogin, element: <Home/>},
    {path: 'tasks', loader: getTasks, element: <Tasks/>},
    {path: 'newTask',loader: getPriorities, action: saveTask, element: <NewTask/>},
  ]},
  {path: '/', errorElement: <Error />, children: [
    {index: true, action: login, element: <Login />},
    {path: '/logup', action: logup, element: <Logup />},
  ]}
])

const App = () => {
  return <RouterProvider router={routes} />
}

export default App
