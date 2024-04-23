import { redirect } from "react-router-dom"

const url = 'https://192.168.1.160/programacao/testes/Projetos/superTodo/backend/public/api/'
let token = ''

const getTasks = async () => {
   const response = await fetch(`${url}tasks`, {method: 'get'})
   const data = await response.json(response)
   return data
}

const saveTask = async ({request}) => {
   const data = await request.formData()
   const result = await fetch(`${url}newTask`, {method: 'post', body: data })
   const response = result.json()
   console.log(response);
   return redirect('/app/tasks')
}

const getPriorities = async () => {
   const response = await fetch(`${url}newTask`, {method: 'get'})
   const data = await response.json(response)
   return data
}

const logup = async({request}) => {
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


const verifyUser = async () => {
   const login = await fetch(`${url}verifyUser`, {
      method: 'get',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         Authorization: `Bearer ${token}`,
      },
   })
   const json = await login.json();
   return json
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
      token = json.token
      if (json.status) {
         return redirect('/app/')
      }
      return null
   }
   alert('User not known!')
   return redirect('/')
}

const checkLogin = async () => {
   const user = await verifyUser()
   if (user.message) {
      return redirect('/')
   }

   if (user) {
      return null
   }

}

const logout = async () => {
   await fetch(`${url}logout`, {
      method: 'get',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         Authorization: `Bearer ${token}`,
      },
   })

   return redirect('/')
}

export {getTasks, saveTask, getPriorities, logup, login, checkLogin, logout}