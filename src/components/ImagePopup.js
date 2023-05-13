import React from "react";

function ImagePopup(props) {
  return (
    <div class={`popup popup_type_photo ${props.card.name ? `popup_opened` : ``}`}>
      <div class="popup__container-photo">
        <button class="popup__close popup__close_type_photo" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
        <img class="popup__img" src={props.card.link} alt={props.card.name}/>
        <h2 class="popup__caption">{props.card.name}</h2>
      </div>
    </div>
  )
}

export default ImagePopup;