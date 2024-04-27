import { redirect} from "react-router-dom"

const url = 'https://192.168.1.160/programacao/testes/Projetos/superTodo/backend/public/api/'

const getTasks = async () => {
   const response = await fetch(`${url}tasks`, {method: 'get'})
   const data = await response.json(response)
   return data
}

const getTask = async (id) => {
   const response = await fetch(`${url}getTask/${id}`, {method: 'get'})
   const data = await response.json(response)
   return data
}
 
const saveTask = async ({request}) => {
   const data = await request.formData()
   await fetch(`${url}newTask`, {method: 'post', body: data })
   return redirect('/app');
}

const getPriorities = async () => {
   const response = await fetch(`${url}newTask`, {method: 'get'})
   const data = await response.json(response)
   return data
}

const logup = async ({request}) => {
   const formData = await request.formData()
   const response = await fetch(`${url}logup`, {
      method: 'post',
      body: formData,
   })

   const json = await response.json()
   if (json.status == true) {
      alert(json.message)
      return redirect('/');
   }

   alert(json.message)
   return null;
}

const getToken = () => sessionStorage.getItem('token')

const verifyUser = async () => {
   const login = await fetch(`${url}verifyUser`, {
      method: 'get',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         Authorization: `Bearer ${getToken()}`,
      },
   })

   const json = await login.json();

   if (json.message == 'Unauthenticated.') {
      return false
   }

   return true
}

const getUserData = async (data) => {
   const response = await fetch(`${url}login`, {
      method: 'post',
      body: data,
   })
   const json = await response.json();
   return json
}

const login = async ({request}) => {
   const data = await request.formData()
   const json = await getUserData(data)
   if (json.status) {
       sessionStorage.setItem('token', json.token)
      if (json.status) {
         return redirect('/app/')
      }
      return null
   }
   alert('User not known!')
   return redirect('/')
}

const checkLogin = async () => await verifyUser()

const logout = async () => {
   await fetch(`${url}logout`, {
      method: 'get',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         Authorization: `Bearer ${getToken()}`,
      },
   })
   sessionStorage.clear()
   return redirect('/')
}

 
const updateTask = async ({request}) => {
   const data = await request.formData()
   await fetch(`${url}updateTask`, {method: 'post', body: data })

   return null
}

const deleteTask = async (id) => {
   const response = await fetch(`${url}deleteTask/${id}`, {method: 'delete', body: id})
   const result = await response.json()
   
   if (result) {
      return true
   }

   return false
}


export {getTasks, saveTask, getPriorities, logup, login, checkLogin, logout, getTask, updateTask, deleteTask}