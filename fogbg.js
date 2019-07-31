$.ajaxSetup({
    // Disable caching of AJAX responses
    cache: false,
});

//Javascript code goes here

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}


function makeBigPic(imgs) {
    if (!isMobile()) {
        var expandImg = document.getElementById("expandedImg");
        var imgText = document.getElementById("imgtext");
        expandImg.dataset.src = imgs.dataset.src;
        expandImg.src = imgs.dataset.src;
        imgText.innerHTML = imgs.alt;
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

function resizeBanner() {
    document.getElementById('banner').scrollHeight = document.getElementById('bannerPic').scrollHeight;
}

function lazyImageLoader() {
    var lazyImages = [].slice.call(document.querySelectorAll("img"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
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

// put below code in html file

document.getElementById("defaultOpen").click();

document.addEventListener("DOMContentLoaded", lazyImageLoader());

document.addEventListener("DOMContentLoaded", lazyHeroLoader());


