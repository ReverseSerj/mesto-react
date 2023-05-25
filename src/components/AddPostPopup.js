import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPostPopup({ onSubmit, isOpen, onClose }) {
  const [postName, setPostName] = React.useState('');
  const [postLink, setPostLink] = React.useState('');

  React.useEffect(() => {
    if (isOpen) {
      setPostName('');
      setPostLink('');
    }
  }, [isOpen]);

  function handlePostName(e) {
    setPostName(e.target.value);
  }

  function handlePostLink(e) {
    setPostLink(e.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit({
      name: postName,
      link: postLink,
    });
  }

  return (
    <PopupWithForm
      name={'post'}
      title={'Новое место'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input 
        type="text" 
        name="name" 
        className="popup__field popup__field_type_title popup__field_pos_top" 
        placeholder="Название"
        minLength="2" 
        maxLength="30"
        onChange={handlePostName}
        value={postName}
        required
      />
      <span className="popup__field-error">Вы пропустили это поле.</span>

      <input 
        type="url" 
        name="link" 
        className="popup__field popup__field_type_link popup__field_pos_bottom" 
        placeholder="Ссылка на картинку"
        onChange={handlePostLink}
        value={postLink}
        required
      />
      <span className="popup__field-error">Введите адрес сайта.</span>
    </PopupWithForm>
  );
}

export default AddPostPopup