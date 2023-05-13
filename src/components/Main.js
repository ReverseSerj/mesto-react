import React from "react";
import {api} from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api.getProfileInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
    
    api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
    });
  },[]);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={userAvatar} alt="фото профиля"/>
          <button className="profile__avatar-edit-button" type="button" aria-label="Редактировать аватар" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <div className="profile__header">
            <h1 className="profile__nickname">{userName}</h1>
            <button className="profile__edit" type="button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__status">{userDescription}</p>
        </div>
        <button className="profile__add-post" type="button" onClick={props.onAddPlace}></button>
      </section>
      <ul className="elements">
        {cards.map((card) => {
          return (
            <li key={card._id}>
              <Card 
                card={card} 
                onCardClick={props.onCardClick}
                onDeleteConfirm={props.onDeleteConfirm}
              />
            </li>
          );
        })}
      </ul>
    </main>
  )
}

export default Main;