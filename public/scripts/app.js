(function() {
  'use strict';

  window.onload = function() {
    let message = localStorage.getItem("message") || 'Your message will display here';
    $('#message').html(message);
    $('#display').html(message);
  }

  $('#button').click(() => {
    console.log('click')
    let message = $('#message').val();
    console.log(message);
    $('#display').html(message);
    localStorage.setItem("message", message);
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
})();

// Get the modal
var modal = document.getElementById('myModal');

// Get the modal text
var modalText = document.getElementById('winlose');

//Get the modal image
var modalImg = document.getElementById('modal-img');


// Get the img of the bot
var botImg = document.getElementById('bot-img');

// Get the button that opens the modal
var btns = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var playerChoice;
var botChoice;

// When the user clicks the button, open the modal 
for(var i = 0; i < btns.length; i++)
{
    btns.item(i).onclick = function() {
        playerChoice = this.value;
        //console.log(playerChoice);

        botChoice = Math.floor(Math.random() * Math.floor(3))+1;

        switch(botChoice) {
            case 1:
                botImg.src = 'images/pierre.png'
                break;
            case 2:
                botImg.src = 'images/papier.png'
                break;
            case 3:
                botImg.src = 'images/ciseaux.png'
                break;
            default:
        }

        //egalité
        if (playerChoice == botChoice){
            modalText.innerHTML = "Egalite"
            modalImg.src = "images/draw.png"
        }
        //gagné
        else if(botChoice+1 == playerChoice || (playerChoice == 1 && botChoice == 3)){
            modalText.innerHTML = "Gagne"
            modalImg.src = "images/trophy.png"
        }
        //perdu
        else{
            modalText.innerHTML = "Perdu"
            modalImg.src = "images/lose.png"
        }
        
        setTimeout(function() {
            modal.style.display = "flex";
        }, 500);

    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    botImg.src = "";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        botImg.src = "";
        console.log("cocou")
    }
}
