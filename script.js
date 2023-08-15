var storySlider = document.getElementById("stories");
var slideRightButton = document.getElementById("slideright");
var slideLeftButton = document.getElementById("slideleft");
var likeButton = document.querySelectorAll(".likebtn");
var likeSound = new Audio("assets/audio/like-button.mp3");

slideRightButton.addEventListener("click", function(){
    storySlider.scrollLeft += 100;
    slideLeftButton.classList.remove("hidden");
    slideLeftButton.classList.add("flex");
});

slideLeftButton.addEventListener("click", function(){
    storySlider.scrollLeft -= 100;
});

for (let i = 0; i < likeButton.length; i++) {
    likeButton[i].addEventListener("click", function(){
        likeButton[i].classList.toggle("button-clicked-an");
        likeButton[i].classList.toggle("text-gray-500");
        likeButton[i].classList.toggle("text-blue-500");

        if (likeButton[i].classList.contains("text-blue-500")) {
            likeSound.play();
            likeButton[i].innerHTML = "<i class='fa-regular fa-thumbs-up mr-2 text-xl'></i>Liked";
        }else{
            likeButton[i].innerHTML = "<i class='fa-regular fa-thumbs-up mr-2 text-xl'></i>Like";
        }
    });
    
}