const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');



menu.addEventListener('click', function()
{
menu.classList.toggle('is-active');
menuLinks.classList.toggle('active');

})


$(function () { 
    $('#WAButton').floatingWhatsApp({ 
        phone: 'WHATSAPP-PHONE-NUMBER', //WhatsApp Business phone number 
        headerTitle: 'Chat with us on WhatsApp!', //Popup Title 
        popupMessage: 'Hello, how can we help you?', //Popup Message 
        showPopup: true, //Enables popup display 
        buttonImage: '<img src="whatsapp.svg" />', //Button Image 
        //headerColor: 'crimson', //Custom header color 
        //backgroundColor: 'crimson', //Custom background button color 
        position: "right" //Position: left | right 

    }); 
}); 

