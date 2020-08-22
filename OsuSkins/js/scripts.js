function showGallery() {
  var x = document.getElementById("galleryView");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
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
	window.open('https://twitter.com/','_blank');
}

function openYouTube(){
	window.open('https://youtube.com/','_blank');
}

function openDiscord(){
	window.open('https://discord.com','_blank');
}

function toggleWaifus(){
  var x = document.getElementById("waifus");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}