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
      <body class="page__content">
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
          buttonText={'Сохранить'}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input 
            type="url" 
            name="avatar" 
            class="popup__field popup__field_type_title popup__field_pos_top" 
            placeholder="Ссылка" 
            required
          />
          <span class="popup__field-error">Вы пропустили это поле.</span>
        </PopupWithForm>
          
        <PopupWithForm
          name={'profile'}
          title={'Редактировать профиль'}
          buttonText={'Сохранить'}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input 
            type="text" 
            name="name" 
            class="popup__field popup__field_type_name popup__field_pos_top" 
            placeholder="Имя" 
            minlength="2" 
            maxlength="40"
            required 
          />
          <span class="popup__field-error">Вы пропустили это поле.</span>
          
          <input 
            type="text" 
            name="about" 
            class="popup__field popup__field_type_status popup__field_pos_bottom" 
            placeholder="О себе" 
            minlength="2" 
            maxlength="200" 
            required
          />
          <span class="popup__field-error" id="about-status">Вы пропустили это поле.</span>
        </PopupWithForm>

        <PopupWithForm
          name={'post'}
          title={'Новое место'}
          buttonText={'Сохранить'}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input 
            type="text" 
            name="name" 
            class="popup__field popup__field_type_title popup__field_pos_top" 
            placeholder="Название"
            minlength="2" 
            maxlength="30"
            required
          />
          <span class="popup__field-error">Вы пропустили это поле.</span>

          <input 
            type="url" 
            name="link" 
            class="popup__field popup__field_type_link popup__field_pos_bottom" 
            placeholder="Ссылка на картинку" 
            required
          />
          <span class="popup__field-error">Введите адрес сайта.</span>
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
      </body>
    </div>
  );
}

export default App;
