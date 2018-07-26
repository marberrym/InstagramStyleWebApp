(function(){  
    
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
    var closeButton = document.querySelector(".close-button");
    var modalbox = document.getElementById("modalBox")
    var prevButton = document.querySelector(".prev-button");
    var nextButton = document.querySelector(".next-button");
    var imgAmount = imgarray.length - 1;
    var index;

    var populateImage = function(img) {
        var modalimg = document.createElement('img');
        modalimg.setAttribute('src', img.src);
        modalimg.classList.add('bigsize');
        modalbox.appendChild(modalimg);
    }

    var removeImage = function() {
        var remove = document.querySelector(".bigsize");
        modalbox.removeChild(remove);
    }
    
    var hideModal = function(event) {
        removeImage();
        modal.classList.toggle("show-modal");
    }

    var windowOnClick = function(event) {
        if (event.target === modal) {
            hideModal();
        }
    }
    var nextIMG = function(event) {
        imageScrollR();
        removeImage();
        nextImage = imgarray[index];
        populateImage(nextImage);
    }

    var prevIMG = function(event) {
        imageScrollL();
        removeImage();
        nextImage = imgarray[index];
        populateImage(nextImage);
    }

    var imageScrollL = function() {
        if (index === 0) {
            index = imgAmount;
        } else {
            index -= 1;
        }    
    };

    var imageScrollR = function() {
        if (index === imgAmount) {
            index = 0;
        } else {
            index += 1;
        }
    };

    var arrowKeys = function(event) {
        if (event.key === 'ArrowLeft') {
            prevIMG();
        } else if (event.key === 'ArrowRight') {
            nextIMG();
        }
    }
    
    window.addEventListener('keydown', arrowKeys);
    closeButton.addEventListener("click", hideModal);
    window.addEventListener("click", windowOnClick);
    prevButton.addEventListener('click', prevIMG);
    nextButton.addEventListener('click', nextIMG);

    //Main For Loop to Populate Images
    // for (i = 0; i < imgarray.length; i++) {
    imgarray.forEach(function(image, i) {
        console.log("I'm running...")
        var newImg = document.createElement("img");
        var caption = document.createElement("span");
        var newDiv = document.createElement("div");
        var modalDiv = document.createElement("div");
        var newList = document.createElement("li");
        
        var toggleModal = function(event) {
            event.preventDefault();
            index = i;
            modal.classList.toggle("show-modal");
            populateImage(image);
        }

        newImg.classList.add('imgformat');
        newImg.setAttribute('src', image.src);
        
        caption.textContent = image.caption;
        caption.classList.add('lobstertext', 'links', 'trigger');
        caption.addEventListener('click', toggleModal);

        newDiv.classList.add('wrapper');
        newDiv.appendChild(caption);

        newList.classList.add("imgcaption");

        modalDiv.classList.add("imgcaption");
        modalDiv.appendChild(newImg);
        modalDiv.appendChild(caption);

        container.appendChild(modalDiv);

        
    });
}())

    
    
