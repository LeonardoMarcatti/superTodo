import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({children, id, taskID}) => {
   const dialog = useRef();
   useEffect(() => {
     const modal = dialog.current;
     modal.showModal();
 
     return () => {
       modal.close(); // needed to avoid error being thrown
     };
   }, []);
 
   return createPortal(
     <dialog ref={dialog} id={id}>
      {children}
     </dialog>,
     document.getElementById('modal')
   );
 }

 export default Modal