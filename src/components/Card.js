import React from "react";

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }  

  return (
    <article className="element">
      <img className="element__img" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
      <button className="element__delete-post" type="button" aria-label="Удалить Пост" onClick={props.onDeleteConfirm}></button>
      <div className="element__description">
        <h2 className="element__name">{props.card.name}</h2>
        <div className="element__like-container" >
          <button className="element__like" type="button" aria-label="Мне Нравится"></button>
          <p className="element__like-quantity">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;