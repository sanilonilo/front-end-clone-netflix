import './Modal.css'

const Modal = props => {
    return(
        <div className="modal-filme-single">
            <div className="close-modal" onClick={() => props.open(false)}><span><i className="fa fa-arrow-left"></i></span></div>
            <video src={props.filme} controls={true} autoPlay={true}>

            </video>
        </div>
    )
}

export default Modal