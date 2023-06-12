import React, { useState } from "react";
import "./pogertvovanie.css";

export default function Pogertvovanie() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>      
      <button onClick={toggleModal} className="btn3">
        Пожертвование
      </button>
      
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <br/>
            <br/>
            <h2 className=''>Номер карты для пожертвований:</h2>
                <div>  
                    <p className=''>2202 2061 8110 9864
                    </p>
                    <p>Сбербанк Имя Отчество Ф. </p>
                </div>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}
