import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isDeleteConfirmPopupOpen, setIsDeleteConfirmPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});
  

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleDeleteConfirmClick() {
    setIsDeleteConfirmPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups () {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeleteConfirmPopupOpen(false);
    setSelectedCard({name: '', link: ''});
  }

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onDeleteConfirm={handleDeleteConfirmClick}
        />
        <Footer />
        <PopupWithForm
          name={'avatar'}
          title={'Обновить аватар'}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input 
            type="url" 
            name="avatar" 
            className="popup__field popup__field_type_title popup__field_pos_top" 
            placeholder="Ссылка" 
            required
          />
          <span className="popup__field-error">Вы пропустили это поле.</span>
        </PopupWithForm>
          
        <PopupWithForm
          name={'profile'}
          title={'Редактировать профиль'}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input 
            type="text" 
            name="name" 
            className="popup__field popup__field_type_name popup__field_pos_top" 
            placeholder="Имя" 
            minLength="2" 
            maxLength="40"
            required 
          />
          <span className="popup__field-error">Вы пропустили это поле.</span>
          
          <input 
            type="text" 
            name="about" 
            className="popup__field popup__field_type_status popup__field_pos_bottom" 
            placeholder="О себе" 
            minLength="2" 
            maxLength="200" 
            required
          />
          <span className="popup__field-error" id="about-status">Вы пропустили это поле.</span>
        </PopupWithForm>

        <PopupWithForm
          name={'post'}
          title={'Новое место'}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input 
            type="text" 
            name="name" 
            className="popup__field popup__field_type_title popup__field_pos_top" 
            placeholder="Название"
            minLength="2" 
            maxLength="30"
            required
          />
          <span className="popup__field-error">Вы пропустили это поле.</span>

          <input 
            type="url" 
            name="link" 
            className="popup__field popup__field_type_link popup__field_pos_bottom" 
            placeholder="Ссылка на картинку" 
            required
          />
          <span className="popup__field-error">Введите адрес сайта.</span>
        </PopupWithForm>
        <PopupWithForm
          name={'delete'}
          title={'Вы уверены ?'}
          buttonText={'Да'}
          isOpen={isDeleteConfirmPopupOpen}
          onClose={closeAllPopups}
        />
        <ImagePopup 
          card={selectedCard} 
          onClose={closeAllPopups} 
        />
      </div>
    </div>
  );
}

export default App;
