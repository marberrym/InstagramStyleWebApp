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

    var container = $('.maingrid');
    var modal = $(".modal");
    var closeButton = $(".close-button");
    var modalbox = $("#modalBox")
    var prevButton = $(".prev-button");
    var nextButton = $(".next-button");
    var imgAmount = imgarray.length - 1;
    var index;

    var populateImage = function(img) {
        var modalimg = $('<img>');
        modalimg.attr({src: img.src});
        modalimg.addClass('bigsize');
        modalbox.append(modalimg);
    }

    var removeImage = function() {
        modalbox.empty();
    }
    
    var hideModal = function(event) {
        removeImage();
        modal.removeClass("show-modal");
    }

    var windowOnClick = function(event) {
        if (event.target === modal[0]) {
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
    
    $(window).on("keydown", arrowKeys);
    closeButton.on("click", hideModal);
    $(window).on("click", windowOnClick);
    prevButton.on('click', prevIMG);
    nextButton.on('click', nextIMG);

    //Main For Loop to Populate Images
    // for (i = 0; i < imgarray.length; i++) {
    imgarray.forEach(function(image, i) {
        console.log("I'm running...")
        var newImg = $("<img>");
        var caption = $("<span>");
        var newDiv = $("<div>");
        var modalDiv = $("<div>");
        var newList = $("<li>");
        
        var toggleModal = function(event) {
            event.preventDefault();
            index = i;
            modal.addClass("show-modal");
            populateImage(image);
        }

        newImg.addClass('imgformat');
        newImg.attr({src: image.src});
        
        caption.text(image.caption);
        caption.addClass('lobstertext links');
        caption.on('click', toggleModal);

        newDiv.addClass('wrapper');
        newDiv.append(caption);

        newList.addClass("imgcaption");

        modalDiv.addClass("imgcaption");
        modalDiv.append(newImg);
        modalDiv.append(caption);

        container.append(modalDiv);
    });
}())

    
    
