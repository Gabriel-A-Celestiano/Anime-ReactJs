import React, {useState} from 'react'
import './Card.css'
import Modal from 'react-modal'

Modal.setAppElement('#root')
const Card = props => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    

    return (
        <div className="all">
            <div className="card">
                <div className="card-item">
                    <div className="card-content">
                        <img src={props.img} alt={props.alt}/>
                        <h4>{props.title}</h4>
                        <button className="card-btn" onClick={() => setModalIsOpen(true)}>More</button> 

                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={() => setModalIsOpen(false)}
                            style={{
                                overlay: {
                                    backgroundColor: 'grey'
                                },

                            }}
                        >
                            <div className="modal-content">
                                <div className="img-modal">
                                    <img src={props.imagem} />
                                </div>
                                <div className="modal-info">
                                    <h2>{props.title}</h2>
                                    <p>Sinopse: {props.synopsis}</p>
                                    <div className="modal-btn">
                                        <button onClick={() => setModalIsOpen(false)}>Close</button>
                                    </div>
                                </div>
                            </div>
                            </Modal>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Card
