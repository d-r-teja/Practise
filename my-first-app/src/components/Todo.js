import {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props){

    //State concept
    //below line modalIsOpen holds the value of useState(true or false)
    //and setModalIsOpen is used to change that value
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function deleteHandler(){
        setModalIsOpen(true);
    }

    function closeModalHandler(){
        setModalIsOpen(false);
    }
    return(
        <div className="card">
            <h2>{props.text}</h2>
            <div className='actions'> 
                <button className='btn' onClick={deleteHandler}>DELETE</button>
            </div>
            {modalIsOpen ? <Modal onCancel = {closeModalHandler} onConfirm = {closeModalHandler}/> : null}
            {modalIsOpen && <Backdrop onBackdropClick = {closeModalHandler}/>}             
        </div>
    );
}

export default Todo;