import React from 'react';
import {Form, useLoaderData} from 'react-router-dom'
import Input from '../components/UI/Input'
import Select from '../components/UI/Select'
import TextArea from '../components/UI/TextArea'
import styles from './NewTask.module.css'
import { getPriorities } from '../utils/master';


const NewTask = () => {
   console.log('new task');
   const data = useLoaderData()
   return <Form method="post" className={styles.form}>
      <div className="row">
         <div className="col">
            <Input label="Title" type="text" txt="title"/>
            <Select label="Priority" txt="priority_id" data={data}/>
            <Input label="DeadLine" type="date" txt="deadLine"/>
            <button type="submit" className="btn btn-primary" style={{marginRight: '10px'}}>Save</button>
            <button type="reset" className="btn btn-warning">Cancel</button>
         </div>
         <div className="col">
            <TextArea label="Description" txt="desc"/>
         </div>
      </div>
   </Form>
}

export {getPriorities}
export default NewTask