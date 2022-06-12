export default function Modal(){

  const wrapperModal = document.querySelector('.modal-wrapper')
  const cancButton = document.querySelector('.button.cancel')

  cancButton.addEventListener('click', close)

  function open(){
    //funcionalidade de atribuir a classe active para a modal
    wrapperModal.classList.add("active")
  }

  function close(){
    wrapperModal.classList.remove("active")
  }

  return{
    open,
    close
  }
}