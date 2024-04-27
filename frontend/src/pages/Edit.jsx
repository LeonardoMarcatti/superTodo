import React, {useContext} from "react";
import {getTask, getPriorities} from '../utils/master'
import { useLoaderData, Form, NavLink } from "react-router-dom";
import Input from "../components/UI/Input";
import Select from "../components/UI/Select";
import Buttons from "../components/UI/Buttons";
import TextArea from "../components/UI/TextArea";
import ModalContext from "../../context/modalContext";
import Modal from "../components/Modal";

const editLoader = async ({params}) => {
   const task = await getTask(params.id)
   const priorities = await getPriorities()
   return [task, priorities]
}

const Edit = () => {
   const ctx = useContext(ModalContext)
   
   const [task, priorities] = useLoaderData();
   return <>
      {
         ctx.show &&  <Modal hideModal={ctx.hideModal} id="success">
                           <h2>Success!</h2>
                           <p>Task updated</p>
                           <NavLink to="/app/tasks">
                              <button type="button" onClick={ctx.hideModal} className="btn btn-success">OK</button>
                           </NavLink>
                        </Modal>
      }

      <Form method="post">
            <Input label="" type="" txt="id" value={task.id} hidden/>
            <div className="row">
               <div className="col">
                  <Input label="Title" type="text" txt="title" value={task.title} />
                  <Select label="Priority" txt="priority_id" data={priorities} value={task.priority_id}/>
                  <Input label="DeadLine" type="date" txt="deadLine" value={task.deadLine} />
                  <Buttons show={ctx.showModal} back="/app/tasks"  />
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