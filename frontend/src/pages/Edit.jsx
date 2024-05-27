import React, {useContext} from "react";
import {getTask, getPriorities} from '../utils/master'
import { useLoaderData, Form } from "react-router-dom";
import Input from "../components/UI/Input";
import Select from "../components/UI/Select";
import Buttons from "../components/UI/Buttons";
import TextArea from "../components/UI/TextArea";
import ModalContext from "../../context/modalContext";
import Modal from "../components/Modal";
import {AnimatePresence} from 'framer-motion'

const editLoader = async ({params}) => {
   const task = await getTask(params.id)
   const priorities = await getPriorities()
   return [task, priorities]
}

const Edit = () => {
   console.log('edit');
   const ctx = useContext(ModalContext)
   
   const [task, priorities] = useLoaderData();
   return <>
      <AnimatePresence>
         {
            ctx.show &&  <Modal variants={{
               show: {opacity: 1, y: 0},
               hide: {opacity: 0, y: 30}
             }} animate='show' initial='hide' exit='hide' transition={{duration: 0.5}} hideModal={ctx.hideModal} id="success">
               <h2>Success!</h2>
               <p>Task updated</p>
               
                  <button type="button" onClick={ctx.hideModal} className="btn btn-success">OK</button>
               
            </Modal>
         }
      </AnimatePresence>

      <Form method="post">
            <Input label="" type="" txt="id" value={task.id} hidden/>
            <div className="row">
               <div className="col">
                  <Input label="Title" type="text" txt="title" value={task.title} />
                  <Select label="Priority" txt="priority_id" data={priorities} value={task.priority_id}/>
                  <Input label="DeadLine" type="date" txt="deadLine" value={task.deadLine} />
                  <Buttons show={ctx.showModal} back="/app/tasks" submit="Update" />
               </div>
               <div className="col">
                  <TextArea label="Description" txt="desc" value={task.desc}/>
               </div>
            </div>
         </Form>
   </>
   
   
}

export {editLoader}
export default Edit