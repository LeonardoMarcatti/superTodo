const url = 'https://192.168.1.160/programacao/testes/Projetos/superTodo/backend/public/api/'

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

export {getTasks, saveTask, getPriorities}