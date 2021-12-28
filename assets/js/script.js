let photo = document.querySelector(".photo");
let addAccount = document.querySelector(".add-conta");
let iconClose = document.querySelector(".iconClose");
let popupClose= document.querySelector(".close");
let popupAddClose= document.querySelector(".closeAdd");

// Remove o perfil
iconClose.addEventListener("click", function() {
    photo.classList.add("hide");
    popupToggle();
});

// Abre o popup do perfil
photo.addEventListener("click", function() {
    popupToggle();

});

// Abre o popup do adicionar conta
addAccount.addEventListener("click", function() {
    popupToggleAdd();
});

// Fecha o popup do perfil
popupClose.addEventListener("click", function() {
    popupToggle();
});

// Fecha o popup de add-account
popupAddClose.addEventListener("click", function() {
    popupToggleAdd();
});

// Função do popup do perfil
function popupToggle() {
    const popup = document.getElementById('popup');
    popup.classList.toggle('active');
}

// Função do popup de add-account
function popupToggleAdd() {
    const popupAdd = document.getElementById('popup-add');
    popupAdd.classList.toggle('active');
}
