import zionCanyon from "../images/zion-canyon.jpg";
import yosemiteValley from "../images/Yosemite-valley.jpg";
import telluride from "../images/telluride.jpg";
import yellowstone from "../images/yellowstone.jpg";
import bassHarbor from "../images/bass-harbor.jpg";
import bigBend from "../images/big-bend.jpg";

export const initialCards = [{
    title: "Yosemite Valley",
    image: yosemiteValley
},
{
    title: "Zion Canyon",
    image: zionCanyon
},
{
    title: "Telluride",
    image: telluride
},
{
    title: "Yellowstone",
    image: yellowstone
},
{
    title: "Bass Harbor",
    image: bassHarbor
},
{
    title: "Big Bend",
    image: bigBend
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