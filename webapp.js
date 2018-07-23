var imgarray = [
    {caption: "The Pages Fly Away...", src: "surrealart/Book.jpeg"},
    {caption: "Drawn to Life...", src: "surrealart/Draw.jpeg"},
    {caption: "A Fire Inside...", src: "surrealart/Firegirl.jpeg"},
    {caption: "Oceanfront Home...", src: "surrealart/House.jpeg"},
    {caption: "Forgotten Notes...", src: "surrealart/Scissors.jpeg"},
    {caption: "A Stairway to Heaven...", src: "surrealart/Stairway.jpeg"},
    {caption: "A Cosmic Kiss...", src: "surrealart/Cosmokiss.jpeg"},
    {caption: "The Last Parade...", src: "surrealart/Elephant.jpeg"},
    {caption: "The Corridor...", src: "surrealart/Flower.jpeg"},
    {caption: "The Eyes of the Mountain...", src: "surrealart/Mountain.jpeg"},
    {caption: "The Nature of Decay...", src: "surrealart/Skull.jpeg"},
    {caption: "Forced Self-Destruction...", src: "surrealart/Tree.jpeg"},
]

var container = document.querySelector('.maingrid')

for (var img of imgarray) {
    var newimg = document.createElement("img");
    newimg.classList.add('imgformat');
    newimg.setAttribute('src', img.src);
    

    var caption = document.createElement("p");
    caption.textContent = img.caption;
    caption.classList.add('lobstertext')

    var listitem = document.createElement("li");
    listitem.classList.add("imgcaption");

    listitem.appendChild(newimg);
    listitem.appendChild(caption);

    container.appendChild(listitem);
}


// text animation

$('.ml2').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml2 .letter',
      scale: [4,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: function(el, i) {
        return 70*i;
      }
    }).add({
      targets: '.ml2',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });