//Javascript code goes here

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function makeBigPicListeners() {
    const imgs = document.querySelectorAll(".columnGallery > img")
    for (const img of imgs) {
        img.addEventListener('click', function (event) {
            makeBigPic(img);
        })
    }
}


function makeBigPic(imgs) {
    if (!isMobile()) {
        var expandImg = document.getElementById("expandedImg");
        var imgText = document.getElementById("imgtext");
        expandImg.src = imgs.dataset.src;
        imgText.innerHTML = imgs.dataset.alt;
        expandImg.parentElement.style.display = "block";
        document.getElementById('bigpic').scrollIntoView();
    }
}


function activePage(evt, pageName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " active";
}

function setAllImageSources(){
    $("img").attr("src","images/icons/spinner.gif");
}

function lazyImageLoader() {
    var lazyImages = [].slice.call(document.querySelectorAll("img"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;

                    var loadedImage = new Image()
                    loadedImage.src = lazyImage.dataset.src;
                    loadedImage.onload = function(){
                        lazyImage.src = loadedImage.src;
                    };
                }
            });
        });

        lazyImages.forEach(function (lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Possibly fall back to a more compatible method here
    }
}

function lazyHeroLoader() {
    var lazyBackgrounds = [].slice.call(document.querySelectorAll(".hero-section"));

    if ("IntersectionObserver" in window) {
        let lazyBackgroundObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    lazyBackgroundObserver.unobserve(entry.target);
                }
            });
        });

        lazyBackgrounds.forEach(function (lazyBackground) {
            lazyBackgroundObserver.observe(lazyBackground);
        });
    }
}



