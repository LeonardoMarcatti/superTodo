import { redirect } from "react-router-dom"

const url = 'https://192.168.1.160/programacao/testes/Projetos/superTodo/backend/public/api/'
let token = ''

const getTasks = async () => {
   const response = await fetch(url, {method: 'get'})
   const data = await response.json(response)
   return data
}

const saveTask = async ({request}) => {
   const data = await request.formData()
   const response = await fetch(`${url}newTask`, {method: 'post', body: data})

   return response
}

const getPriorities = async () => {
   const response = await fetch(`${url}newTask`, {method: 'get'})
   const data = await response.json(response)
   return data
}

const logup = async({request}) => {
   const formData = await request.formData()
   const response = await fetch(`${url}tokens/create`, {
      method: 'post',
      body: formData,
      // Authorization: 'Bearer token_name',
   })

   const json = await response.json()
   console.log(json);
   if (json.status == true) {
      alert(json.message)
      return redirect('/');
   }

   if (json.status == false) {
      throw new Error(JSON.stringify(json));
   }

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
   if (!user) {
      return redirect('/')
   }

   return null
      
}

export {getTasks, saveTask, getPriorities, logup, login, checkLogin}