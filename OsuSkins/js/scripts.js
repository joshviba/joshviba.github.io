function myFunction() {
  var x = document.getElementById("galleryView");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function profileBurger() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 

function openTwitch(){
	window.open('https://twitch.tv/recital','_blank');
}

function openTwitter(){
	window.open('https://twitter.com','_blank');
}