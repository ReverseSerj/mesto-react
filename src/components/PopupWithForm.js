import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? `popup_opened` : ``}`}>
      <div className="popup__container">
        <button className="popup__close" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__body" name={props.name} novalidate>
          {props.children}
          <button type="submit" className="popup__submit" name="button-edit" >{props.buttonText}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;