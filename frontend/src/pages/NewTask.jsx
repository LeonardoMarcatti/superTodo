import React from 'react';
import {Form, useLoaderData} from 'react-router-dom'
import Input from '../components/UI/Input'
import Select from '../components/UI/Select'
import TextArea from '../components/UI/TextArea'
import Buttons from '../components/UI/Buttons'
import styles from './NewTask.module.css'

const NewTask = () => {
   const data = useLoaderData()
   return <Form method="post" className={styles.form}>
            <div className="row">
               <div className="col">
                  <Input label="Title" type="text" txt="title"/>
                  <Select label="Priority" txt="priority_id" data={data}/>
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