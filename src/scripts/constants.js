export const initialCards = [{
    title: "Yosemite Valley",
    image: "./images/Yosemite-valley.jpg"
},
{
    title: "Zion Canyon",
    image: "./images/zion-canyon.jpg"
},
{
    title: "Telluride",
    image: "./images/telluride.jpg"
},
{
    title: "Yellowstone",
    image: "./images/yellowstone.jpg"
},
{
    title: "Bass Harbor",
    image: "./images/bass-harbor.jpg"
},
{
    title: "Big Bend",
    image: "./images/big-bend.jpg"
}
];

export const formSettings = {
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__error_visible",
}

export const selectors = {
    imagePopup: document.querySelector(".modal_type_image"),
    formPopupAdd: document.querySelector(".modal_type_add-card"),
    
}