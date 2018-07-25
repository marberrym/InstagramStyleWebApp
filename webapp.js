(function(){  
    //Array of images to be used and populated.  In 3 columns, rows of 3.  Max limits on H and W.
    // var imgarray = [
    //     {caption: "The Pages Fly Away...", src: "surrealart/Book.jpeg"},
    //     {caption: "Drawn to Life...", src: "surrealart/Draw.jpeg"},
    //     {caption: "A Fire Inside...", src: "surrealart/Firegirl.jpeg"},
    //     {caption: "Oceanfront Home...", src: "surrealart/House.jpeg"},
    //     {caption: "Forgotten Notes...", src: "surrealart/Scissors.jpeg"},
    //     {caption: "A Stairway to Heaven...", src: "surrealart/Stairway.jpeg"},
    //     {caption: "A Cosmic Kiss...", src: "surrealart/Cosmokiss.jpeg"},
    //     {caption: "The Last Parade...", src: "surrealart/Elephant.jpeg"},
    //     {caption: "The Corridor...", src: "surrealart/Flower.jpeg"},
    //     {caption: "The Eyes of the Mountain...", src: "surrealart/Mountain.jpeg"},
    //     {caption: "The Nature of Decay...", src: "surrealart/Skull.jpeg"},
    //     {caption: "Forced Self-Destruction...", src: "surrealart/Tree.jpeg"},
    // ]

    var imgarray = [
        {caption: "RICK N MORTY", src: "ricknmorty/rnm1.jpeg"},
        {caption: "RICK N MORTY", src: "ricknmorty/rnm2.jpeg"},
        {caption: "RICK N MORTY", src: "ricknmorty/rnm3.jpeg"},
        {caption: "RICK N MORTY", src: "ricknmorty/rnm4.jpeg"},
        {caption: "RICK N MORTY", src: "ricknmorty/rnm5.jpeg"},
        {caption: "RICK N MORTY", src: "ricknmorty/rnm6.jpeg"},
        {caption: "RICK N MORTY", src: "ricknmorty/rnm7.jpeg"},
        {caption: "RICK N MORTY", src: "ricknmorty/rnm8.jpeg"},
        {caption: "RICK N MORTY", src: "ricknmorty/rnm9.jpeg"},
        {caption: "RICK N MORTY", src: "ricknmorty/rnm10.jpeg"},
        {caption: "RICK N MORTY", src: "ricknmorty/rnm11.jpeg"},
        {caption: "RICK N MORTY", src: "ricknmorty/rnm12.jpeg"},
    ]

    var container = document.querySelector('.maingrid');
    var modal = document.querySelector(".modal");
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");
    var modalbox = document.getElementById("modalBox")
    var prevButton = document.querySelector(".prev-button");
    var nextButton = document.querySelector(".next-button");
    var index;
    var modalimg;

    //Global index for my next and prev buttons
    var globalindex = 0;


    var toggleModal = function(event) {
        index = event.currentTarget.getAttribute('dataIndex');
        modalimg = document.createElement('img');
        event.preventDefault();
        // bonafide.textContent("KNOW IM ON MY GREEZY IM A BONAFIDE HUSTLER")
        modal.classList.toggle("show-modal");
        globalindex = Number(index);
        modalimg.setAttribute('src', imgarray[index].src);
        modalimg.classList.add('bigsize');
        modalbox.appendChild(modalimg);
    }

    var hideModal = function(event) {
        var remove = document.querySelector(".bigsize");
        modalbox.removeChild(remove);
        modal.classList.toggle("show-modal");
    }

    var windowOnClick = function(event) {
        if (event.target === modal) {
            hideModal();
        }
    }

    var nextIMG = function(event) {
        var remove = document.querySelector(".bigsize");
        var modalimg = document.createElement('img');
        console.log(imgarray.length);
        if (globalindex % (imgarray.length - 1) === 0 && globalindex != 0) {
            globalindex = 0;
        } else {
            globalindex += 1;
        };
        
        modalbox.removeChild(remove);
        console.log(globalindex)
        modalimg.setAttribute('src', imgarray[globalindex].src);
        modalimg.classList.add('bigsize');
        modalbox.appendChild(modalimg);
    }

    var prevIMG = function(event) {
        var remove = document.querySelector(".bigsize");
        var modalimg = document.createElement('img');
        
        console.log("im working")
        
        if (globalindex % (imgarray.length - 1) === 0 && globalindex === 0) {
            globalindex = 11;
        } else {
            globalindex -= 1;
        };
        
        modalbox.removeChild(remove);
        modalimg.setAttribute('src', imgarray[globalindex].src);
        modalimg.classList.add('bigsize');
        modalbox.appendChild(modalimg);
    }

    prevButton.addEventListener('click', prevIMG);
    nextButton.addEventListener('click', nextIMG);

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", hideModal);
    window.addEventListener("click", windowOnClick);




    //Populates my HTML with images created.  Loops through my array of images.
    for (var i = 0; i < imgarray.length; i++) {
        (function() {
            var newimg = document.createElement("img");
            newimg.classList.add('imgformat');
            newimg.setAttribute('src', imgarray[i].src);
            

            var caption = document.createElement("span");
            // caption.setAttribute('href', "");
            caption.textContent = imgarray[i].caption;
            caption.classList.add('lobstertext', 'links', 'trigger');
            caption.addEventListener('click', toggleModal);
            caption.setAttribute('dataIndex', i);

            var div = document.createElement("div");
            div.classList.add('wrapper');
            div.appendChild(caption);

            var listitem = document.createElement("li");
            listitem.classList.add("imgcaption");

            var link = document.createElement("div");
            // link.classList.add('links');
            // link.setAttribute('href', "");
            link.appendChild(newimg);
            
            var minibox = document.createElement("div");
            minibox.classList.add("imgcaption");
            minibox.appendChild(link);
            minibox.appendChild(caption);

            container.appendChild(minibox);

            //variables for my modal box:
        }());
    }
    




    // Efforts to get my animated text working.
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
    })();



