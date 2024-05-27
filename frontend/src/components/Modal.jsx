import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {motion} from 'framer-motion'

const Modal = ({children, id}) => {
   const dialog = useRef();
   useEffect(() => {
     const modal = dialog.current;
     modal.showModal();
 
     return () => {
       modal.close(); // needed to avoid error being thrown
     };
   }, []);
 
   return createPortal(
     <motion.dialog
      ref={dialog}
      id={id}
      className='myModal' 
      initial={{opacity: 0, y: 30}}
      exit={{opacity: 0, y: 30}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}>
      {children}
     </motion.dialog>,
     document.getElementById('modal')
   );
 }

 export default Modal