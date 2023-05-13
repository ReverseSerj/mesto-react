import React from "react";

function ImagePopup(props) {
  return (
    <div className={`popup popup_type_photo ${props.card.name ? `popup_opened` : ``}`}>
      <div className="popup__container-photo">
        <button className="popup__close popup__close_type_photo" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
        <img className="popup__img" src={props.card.link} alt={props.card.name}/>
        <h2 className="popup__caption">{props.card.name}</h2>
      </div>
    </div>
  )
}

export default ImagePopup;