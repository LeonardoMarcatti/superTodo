import React from 'react';
import {Form, useLoaderData} from 'react-router-dom'
import Input from './UI/Input'
import Select from './UI/Select'
import TextArea from './UI/TextArea'
import Buttons from './UI/Buttons'

const NewTask = () => {
   const data = useLoaderData()
   return <Form method="post">
            <div className="row">
               <div className="col">
                  <Input label="Title" type="text" txt="title"/>
                  <Select label="Priority" txt="priority" data={data}/>
                  <Input label="DeadLine" type="date" txt="deadLine"/>
                  <Buttons/>
               </div>
               <div className="col">
                  <TextArea label="Description" txt="desc"/>
               </div>
            </div>
         </Form>
}

export default NewTask