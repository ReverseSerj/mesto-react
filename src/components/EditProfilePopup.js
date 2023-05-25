import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup ({isOpen, onClose, onUpdateUser}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function hanfleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description
    });
  }

  return (
    <PopupWithForm
      name={'profile'}
      title={'Редактировать профиль'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input 
        type="text" 
        name="name" 
        className="popup__field popup__field_type_name popup__field_pos_top" 
        placeholder="Имя" 
        minLength="2" 
        maxLength="40"
        onChange={handleChangeName}
        value={name || ''}
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
        onChange={hanfleChangeDescription}
        value={description || ''}
        required
      />
      <span className="popup__field-error" id="about-status">Вы пропустили это поле.</span>
    </PopupWithForm>
  )
  
}

export default EditProfilePopup