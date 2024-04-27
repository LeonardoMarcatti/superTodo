import React from "react";

const ModalContext = React.createContext({
  show: false,
  taskID: null,
  showModal: () => null,
  hideModal: () => null,
  setTaskID: () => null,
});

export default ModalContext;