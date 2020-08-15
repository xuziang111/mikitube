var resourceLoadFinish = false;
var waitForPlay = false;
var playing = false;
var appendResourceElementLoaded;
var urlPrefix = "https://cdn.jsdelivr.net/gh/mihirukiss/mikitube@1.0/";

function changeToDownvote(){}

function changeNoDownvote(){}

function changeToSubscribe(){}

function changeNoSubscribe(){}

function toggleUpvote(){
    let upvoteButton = document.getElementById("upvoteButton");
    let sentiment = document.getElementById("sentiment");
    let ytIconButton = upvoteButton.getElementsByTagName("mi-button")[0];
    let ytFormattedString = upvoteButton.getElementsByTagName("mfs")[0];
    let tooltip = document.getElementById("upvoteButton").getElementsByClassName("paper-tooltip")[0];
    if(upvoteButton.classList.contains("style-text")){
        upvoteButton.classList.remove("style-text");
        upvoteButton.classList.add("style-default-active");
        ytIconButton.classList.remove("style-text");
        ytIconButton.classList.add("style-default-active");
        ytFormattedString.classList.remove("style-text");
        ytFormattedString.classList.add("style-default-active");
        ytFormattedString.setAttribute("aria-label", "60,069 人顶过");
        ytIconButton.getElementsByTagName("button")[0].setAttribute("aria-label", "与另外 60,069 人一起顶此视频");
        if(document.getElementById("downvoteButton").classList.contains("style-default-active")){
            toggleDownvote();
        }
        sentiment.setAttribute("activated_", "");
        tooltip.innerHTML = "取消顶";
        sentiment.getElementsByClassName("paper-tooltip")[0].innerHTML = "60,069 / 2,479";
    } else {
        upvoteButton.classList.remove("style-default-active");
        upvoteButton.classList.add("style-text");
        ytIconButton.classList.remove("style-default-active");
        ytIconButton.classList.add("style-text");
        ytFormattedString.classList.remove("style-default-active");
        ytFormattedString.classList.add("style-text");
        ytFormattedString.setAttribute("aria-label", "60,068 人顶过");
        ytIconButton.getElementsByTagName("button")[0].setAttribute("aria-label", "与另外 60,068 人一起顶此视频");
        sentiment.removeAttribute("activated_");
        tooltip.innerHTML = "顶一下";
        sentiment.getElementsByClassName("paper-tooltip")[0].innerHTML = "60,068 / 2,479";
    }
}

function toggleDownvote(){
    let downvoteButton = document.getElementById("downvoteButton");
    let ytIconButton = downvoteButton.getElementsByTagName("mi-button")[0];
    let ytFormattedString = downvoteButton.getElementsByTagName("mfs")[0];
    let tooltip = document.getElementById("downvoteButton").getElementsByClassName("paper-tooltip")[0];
    if(downvoteButton.classList.contains("style-text")){
        downvoteButton.classList.remove("style-text");
        downvoteButton.classList.add("style-default-active");
        ytIconButton.classList.remove("style-text");
        ytIconButton.classList.add("style-default-active");
        ytFormattedString.classList.remove("style-text");
        ytFormattedString.classList.add("style-default-active");
        ytFormattedString.innerHTML = "2480";
        ytFormattedString.setAttribute("aria-label", "2,480 人踩过");
        ytIconButton.getElementsByTagName("button")[0].setAttribute("aria-label", "与另外 2,480 人一起踩此视频");
        if(document.getElementById("upvoteButton").classList.contains("style-default-active")){
            toggleUpvote();
        }
        sentiment.setAttribute("activated_", "");
        tooltip.innerHTML = "取消踩";
        sentiment.getElementsByClassName("paper-tooltip")[0].innerHTML = "60,068 / 2,480";
        changeToDownvote();
    } else {
        downvoteButton.classList.remove("style-default-active");
        downvoteButton.classList.add("style-text");
        ytIconButton.classList.remove("style-default-active");
        ytIconButton.classList.add("style-text");
        ytFormattedString.classList.remove("style-default-active");
        ytFormattedString.classList.add("style-text");
        ytFormattedString.innerHTML = "2479";
        ytFormattedString.setAttribute("aria-label", "2,479 人踩过");
        ytIconButton.getElementsByTagName("button")[0].setAttribute("aria-label", "与另外 2,479 人一起踩此视频");
        sentiment.removeAttribute("activated_");
        sentiment.getElementsByClassName("paper-tooltip")[0].innerHTML = "60,068 / 2,479";
        tooltip.innerHTML = "踩一下";
        changeNoDownvote();
    }
}

function showThumbnailTip(container, tooltipWidth, calTop){
    let rect = container.parentNode.parentNode.getBoundingClientRect();
    let tooltip = container.getElementsByClassName("paper-tooltip")[0];
    tooltip.parentNode.style.top = (rect.top + calTop)+"px";
    tooltip.parentNode.style.left = (rect.left+(126-tooltipWidth))+"px";
    tooltip.classList.remove("hidden");
    tooltip.classList.add("fade-in-animation");
}

function showTip(container, tooltipWidth, calTop){
    if(!calTop){
        calTop = 56;
    }
    let rect = container.getBoundingClientRect();
    let tooltip = container.getElementsByClassName("paper-tooltip")[0];
    tooltip.parentNode.style.top = (rect.top + calTop)+"px";
    tooltip.parentNode.style.left = (rect.left+(container.clientWidth-tooltipWidth)/2)+"px";
    tooltip.classList.remove("hidden");
    tooltip.classList.add("fade-in-animation");
}

function hideTip(container){
    let tooltip = container.getElementsByClassName("paper-tooltip")[0];
    tooltip.classList.remove("fade-in-animation");
    tooltip.classList.add("hidden");
}

function toggleSubscribe(subscribeButton){
    if(subscribeButton.hasAttribute("subscribed")){
        subscribeButton.removeAttribute("subscribed");
        subscribeButton.getElementsByTagName("mfs")[0].innerHTML = "订阅";
        subscribeButton.setAttribute("aria-label", "订阅“MIKIMIKI channel”。");
        document.getElementById("notification-preference-toggle-button").style.display = "none";
        document.getElementById("notification-preference-button").style.display = "none";
        document.getElementById("owner-sub-count").innerHTML = "1.9万 位订阅者";
        changeNoSubscribe();
    } else {
        subscribeButton.setAttribute("subscribed", "");
        subscribeButton.getElementsByTagName("mfs")[0].innerHTML = "已订阅";
        subscribeButton.setAttribute("aria-label", "退订“MIKIMIKI channel”。");
        document.getElementById("notification-preference-toggle-button").style.display = "";
        document.getElementById("notification-preference-button").style.display = "";
        document.getElementById("owner-sub-count").innerHTML = "2万 位订阅者";
        changeToSubscribe();
    }
}

function toggleNotification(){
    let notificationButton = document.getElementById("notification-preference-button").getElementsByTagName("button")[0];
    if(notificationButton.getAttribute("aria-label").startsWith("当前设置为接收所有通知")){
        notificationButton.setAttribute("aria-label", "当前设置为接收个性化通知。点按即可更改“MIKIMIKI channel”频道的通知设置");
        notificationButton.getElementsByTagName("g")[0].innerHTML = '<path class="ss mi" d="M0 0h24v24H0z" fill="none"></path><path class="ss mi" d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"></path>';
    } else {
        notificationButton.setAttribute("aria-label", "当前设置为接收所有通知。点按即可更改“MIKIMIKI channel”频道的通知设置");
        notificationButton.getElementsByTagName("g")[0].innerHTML = '<path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z" class="ss mi"></path>';
    }
}

function toggleExpander(clickElement){
    let pagerButtons = clickElement.parentNode.getElementsByTagName("paper-button");
    let lessButton;
    let moreButton;
    let collapsible;
    for(let i=0;i<pagerButtons.length;i++){
        if(pagerButtons[i].id == "more"){
            moreButton = pagerButtons[i];
        } else if(pagerButtons[i].id == "less"){
            lessButton = pagerButtons[i];
        }
    }
    let metadataContainers = clickElement.parentNode.getElementsByTagName("mtd-metadata-row-container-renderer");
    if(metadataContainers.length > 0){
        let metadataContainerDivs = metadataContainers[0].getElementsByTagName("div");
        for(let i=0;i<metadataContainerDivs.length;i++){
            if(metadataContainerDivs[i].id == "collapsible"){
                collapsible = metadataContainerDivs[i];
                break;
            }
        }
    }
    if(clickElement.id == "more"){
        moreButton.setAttribute("hidden", "");
        lessButton.removeAttribute("hidden");
        if(collapsible){
            collapsible.removeAttribute("hidden");
        }
        clickElement.parentNode.removeAttribute("collapsed");
    } else {
        lessButton.setAttribute("hidden", "");
        moreButton.removeAttribute("hidden");
        if(collapsible){
            collapsible.setAttribute("hidden", "");
        }
        clickElement.parentNode.setAttribute("collapsed", "");
    }
}

function toggleCommentSortMenu(event, menu){
    event.stopPropagation();
    let dropdown = menu.getElementsByTagName("iron-dropdown")[0];
    if(dropdown.style.display == "none"){
        hideAllMenu();
        dropdown.setAttribute("style", "outline: currentcolor none medium; top: 40px;");
    } else {
        dropdown.setAttribute("style", "outline: currentcolor none medium; display: none;");
    }
}

function toggleCommentReaply(button){
    let moreButton;
    let lessButton;
    let contentDiv;
    let buttons = button.parentNode.getElementsByTagName("mtd-button-renderer");
    for(let i=0;i<buttons.length;i++){
        if(buttons[i].id == "more-replies"){
            moreButton = buttons[i];
        } else if(buttons[i].id == "less-replies"){
            lessButton = buttons[i];
        }
    }
    let divs = button.parentNode.getElementsByTagName("div");
    for(let i=0;i<divs.length;i++){
        if(divs[i].id == "expander-contents"){
            contentDiv = divs[i];
            break;
        }
    }
    if(contentDiv.hasAttribute("hidden")){
        moreButton.setAttribute("hidden", "");
        lessButton.removeAttribute("hidden");
        contentDiv.removeAttribute("hidden");
    } else {
        lessButton.setAttribute("hidden", "");
        moreButton.removeAttribute("hidden");
        contentDiv.setAttribute("hidden", "");
    }
}

function clickSortMenu(event){
    event.stopPropagation();
    hideAllMenu();
}

function toggleAutoPlay(toggle){
    if(toggle.hasAttribute("checked")){
        toggle.removeAttribute("checked");
    } else {
        toggle.setAttribute("checked", "");
    }
}

function toggleHoverThumbnail(thumbnail){
    let hoverText = thumbnail.getElementsByTagName("mthumb-overlay-hover-text-renderer")[0];
    if(hoverText.style.display == "none"){
        hoverText.style.display = "";
    } else {
        hoverText.style.display = "none";
    }
}

function playListItemOut(item){
    let divs = item.getElementsByTagName("div");
    for(let i=0;i<divs.length;i++){
        if(divs[i].id=="mouseover-overlay" || divs[i].id=="hover-overlays"){
            divs[i].style.display = "none";
        }
    }
}

function playListItemIn(item){
    let divs = item.getElementsByTagName("div");
    for(let i=0;i<divs.length;i++){
        if(divs[i].id=="mouseover-overlay" || divs[i].id=="hover-overlays"){
            divs[i].style.display = "";
        }
    }
}

function watchLater(event, button){
    event.preventDefault();
    event.stopPropagation();
    button.setAttribute("hidden", "");
    button.parentNode.getElementsByTagName("mtotbr")[0].removeAttribute("hidden");
}

function removeWatchLater(event, button){
    event.preventDefault();
    event.stopPropagation();
    button.setAttribute("hidden", "");
    button.parentNode.getElementsByTagName("mtotbr")[1].removeAttribute("hidden");
}

function addPlayList(event, button){
    event.preventDefault();
    event.stopPropagation();
    button.setAttribute("hidden", "");
    button.parentNode.getElementsByTagName("mtotbr")[3].removeAttribute("hidden");
}

function removePlayList(event, button){
    event.preventDefault();
    event.stopPropagation();
    button.setAttribute("hidden", "");
    button.parentNode.getElementsByTagName("mtotbr")[2].removeAttribute("hidden");
}

function showCommentDialog(){
    document.getElementById("placeholder-area").setAttribute("hidden", "");
    document.getElementsByTagName("mtd-comment-simplebox-renderer")[0].getElementsByTagName("mis")[0].setAttribute("hidden", "");
    document.getElementById("comment-dialog").removeAttribute("hidden");
    document.getElementById("contenteditable-root").focus();
}

function hideCommentDialog(){
    document.getElementById("comment-dialog").setAttribute("hidden", "");
    document.getElementsByTagName("mtd-comment-simplebox-renderer")[0].getElementsByTagName("mis")[0].removeAttribute("hidden");
    document.getElementById("placeholder-area").removeAttribute("hidden");
    document.getElementById("contenteditable-root").innerHTML = "";
}

function submitComment(){
    appendComment(urlPrefix+"img/avatar/B001.webp", "MIKI channel", "刚刚", document.getElementById("contenteditable-root").innerHTML, false, 0, 0, [], true);
    initLazyImg();
    hideCommentDialog();
}

function focusCommentInput(){
    document.getElementsByClassName("underline")[0].classList.add("is-highlighted");
}

function blurCommentInput(){
    document.getElementsByClassName("underline")[0].classList.remove("is-highlighted");
}

function checkCommentLength(input){
    let submitButton = document.getElementById("submit-button");
    let paperButton = submitButton.getElementsByTagName("paper-button")[0];
    if(input.innerHTML.length > 0 && input.innerHTML!="<br>"){
        submitButton.removeAttribute("disabled");
        paperButton.setAttribute("aria-disabled", "false");
        paperButton.setAttribute("tabindex", "0");
        paperButton.removeAttribute("style");
    } else {
        submitButton.setAttribute("disabled", "");
        paperButton.setAttribute("aria-disabled", "true");
        paperButton.setAttribute("tabindex", "-1");
        paperButton.setAttribute("style", "pointer-events: none;");
    }
}

function resourceLoadComplete(){
    resourceLoadFinish = true;
    if(waitForPlay){
        checkAllAppendResourceElementLoaded();
    }
}

function init(){}

function loadResource(){
    if (!!window.ActiveXObject || "ActiveXObject" in window){
        document.getElementsByTagName("mtd-app")[0].style.display = "none";
        document.getElementsByClassName("ie-notice")[0].innerHTML = "<img src='"+urlPrefix+"img/ie.png' />";
        document.getElementsByClassName("ie-notice")[0].style.display = "block";
    } else {
        init();
        initLazyImg();
        preloadImage();
    }
}

function initLazyImg(){
    let lazyImages = [].slice.call(document.getElementsByClassName("lazyimg"));
    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazyimg");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });
        
        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        let active = false;
        
        const lazyLoad = function() {
            if (active === false) {
                active = true;

                setTimeout(function() {
                    lazyImages.forEach(function(lazyImage) {
                        if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                            lazyImage.src = lazyImage.dataset.src;
                            lazyImage.classList.remove("lazyimg");

                            lazyImages = lazyImages.filter(function(image) {
                                return image !== lazyImage;
                            });

                            if (lazyImages.length === 0) {
                                document.removeEventListener("scroll", lazyLoad);
                                window.removeEventListener("resize", lazyLoad);
                                window.removeEventListener("orientationchange", lazyLoad);
                            }
                        }
                    });

                    active = false;
                }, 200);
            }
        };

        document.addEventListener("scroll", lazyLoad);
        window.addEventListener("resize", lazyLoad);
        window.addEventListener("orientationchange", lazyLoad);
        lazyLoad();
    }
}

function checkAllAppendResourceElementLoaded(){
    if(playing){
        return;
    }
    if(!resourceLoadFinish){
        return;
    }
    for(let i=0;i<appendResourceElementLoaded.length;i++){
        if(!appendResourceElementLoaded[i]){
            return;
        }
    }
    console.log("doPlay");
    doPlay();
    playing = true;
}

function startPlay(overlay){
    overlay.style.display = "none";
    document.getElementsByClassName("mtp-spinner")[0].style.display = "";
    appendResourceElementLoaded = new Array(appendResourceElementIds.length);
    for(let i=0;i<appendResourceElementIds.length;i++){
        appendResourceElementLoaded[i] = false;
        let appendResourceElement = document.getElementById(appendResourceElementIds[i]);
        appendResourceElement.addEventListener('canplaythrough', (event) => {
            console.log(appendResourceElementIds[i]+" paucanplaythroughse event");
            appendResourceElementLoaded[i] = true;
            checkAllAppendResourceElementLoaded();
        });
        appendResourceElement.addEventListener('pause', (event) => {
            console.log(appendResourceElementIds[i]+" pause event");
            if(appendResourceElement.readyState == 4){
                appendResourceElementLoaded[i] = true;
                checkAllAppendResourceElementLoaded();
            }
        });
        console.log(appendResourceElementIds[i]+":"+appendResourceElement.readyState);
        if(appendResourceElement.readyState == 4){
            appendResourceElementLoaded[i] = true;
        } else if(appendResourceElement.readyState < 4){
            preloadAppendResource(appendResourceElement, i);
        }
    }
    waitForPlay = true;
    if(resourceLoadFinish){
        checkAllAppendResourceElementLoaded();
    }
}

function preloadAppendResource(appendResourceElement, index){
    console.log("preload:"+appendResourceElement.getAttribute("id"));
    let playPromise = appendResourceElement.play();
    if(playPromise != undefined){
        playPromise.then(_=>{
            pauseAppendResource(appendResourceElement, index);
        }).catch(function(e){
            console.log(e);
        });
    } else {
        setTimeout(function(){
            preloadAppendResource(appendResourceElement, index);
        }, 100);
    }
}

function pauseAppendResource(appendResourceElement, index){
    if(appendResourceElementLoaded[index]){
        return;
    }
    console.log("pause:"+appendResourceElement.getAttribute("id"));
    let pausePromise = appendResourceElement.pause();
    if(pausePromise != undefined){
        pausePromise.then(_=>{
            appendResourceElement.currentTime = 0;
        }).catch(function(e){
            console.log(e);
        });
    } else {
        setTimeout(function(){
            pauseAppendResource(appendResourceElement, index);
        }, 0);
    }
}

function showPlayItemMenu(event, button){
    event.stopPropagation();
    let rect = button.getBoundingClientRect();
    let playItemMenu = document.getElementById("playItemMenu");
    if(playItemMenu.style.display == "" && button.classList.contains("last-click-menu")){
        playItemMenu.style.display = "none";
        button.classList.remove("last-click-menu");
    } else {
        let lastClickMenus = document.getElementsByClassName("last-click-menu");
        for(let i=0;i<lastClickMenus.length;i++){
            lastClickMenus[i].classList.remove("last-click-menu");
        }
        button.classList.add("last-click-menu");
        playItemMenu.style.left = (rect.left + window.scrollX - 176) + "px";
        if(rect.top + window.scrollY + 238 > document.documentElement.clientHeight){
            playItemMenu.style.top = (rect.top + window.scrollY - 214) + "px";
        } else {
            playItemMenu.style.top = (rect.top + window.scrollY + 24) + "px";
        }
        playItemMenu.style.display = "";
    }
}

function hideAllMenu(){
    let dropdowns = document.getElementsByTagName("iron-dropdown");
    for(let i=0;i<dropdowns.length;i++){
        dropdowns[i].style.display = "none";
    }
}

function appendPlayItem(thumbnailNum, bvCode, name, author, authorAuth, videoTime, viewTimes){
    let item = document.createElement("mcvr");
    item.setAttribute("class", "ss mtd-watch-next-secondary-results-renderer");
    item.setAttribute("thumbnail-width", "168");
    item.setAttribute("lockup", "");
    item.setAttribute("onmouseover", "playListItemIn(this)");
    item.setAttribute("onmouseout", "playListItemOut(this)");
    let splitVideoTime = videoTime.split(":");
    if(splitVideoTime[1].startsWith("0")){
        splitVideoTime[1] = splitVideoTime[1].substr(1);
    }
    item.innerHTML = '<div id="dismissable" class="ss mcvr">'+
    '<mthumb use-hovered-property="" class="ss mcvr">'+
    '<a id="thumbnail" class="mse inline-block ss mthumb" aria-hidden="true" tabindex="-1" rel="nofollow" href="https://www.bilibili.com/video/'+bvCode+'" target="_blank">'+
    '<mis class="ss mthumb no-transition" style="background-color: transparent;" loaded="">'+
    '<img id="img" class="ss mis lazyimg" alt="" data-src="'+urlPrefix+'img/thumbnail/'+thumbnailNum+'.webp" width="168" />'+
    '</mis>'+
    '<div id="overlays" class="ss mthumb">'+
    '<mthumb-overlay-time-status-renderer class="ss mthumb" overlay-style="DEFAULT">'+
    '<mi class="ss mthumb-overlay-time-status-renderer" disable-upgrade="" hidden=""></mi>'+
    '<span class="ss mthumb-overlay-time-status-renderer" aria-label="'+splitVideoTime[0]+'分钟'+(splitVideoTime[1]=='0'?'':(splitVideoTime[1]+'秒钟'))+'">'+videoTime+'</span>'+
    '</mthumb-overlay-time-status-renderer>'+
    '</div>'+
    '<div id="mouseover-overlay" class="ss mthumb" style="display: none;">'+
    '<mtd-moving-thumbnail-renderer class="ss mthumb">'+
    '<div id="player-container" class="ss mtd-moving-thumbnail-renderer"></div>'+
    '<mi id="play" icon="play_all" class="ss mtd-moving-thumbnail-renderer show">'+
    '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;" class="ss mi">'+
    '<g class="ss mi">'+
    '<path d="M8 5v14l11-7z" class="ss mi"></path>'+
    '</g>'+
    '</svg>'+
    '</mi>'+
    '</mtd-moving-thumbnail-renderer>'+
    '</div>'+
    '<div id="hover-overlays" class="ss mthumb" style="display: none;">'+
    '<mtotbr class="ss mthumb" role="button" tabindex="-1" top-right-overlay="" aria-label="已添加" toggled="" hidden="" onclick="removeWatchLater(event, this)" onmouseover="showThumbnailTip(this, 63, -8)" onmouseout="hideTip(this)">'+
    '<div id="label-container" class="ss mtotbr">'+
    '<div id="label" class="ss mtotbr">已添加</div>'+
    '</div>'+
    '<mi id="icon" class="ss mtotbr">'+
    '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;" class="ss mi">'+
    '<g class="ss mi">'+
    '<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" class="ss mi"></path>'+
    '</g>'+
    '</svg>'+
    '</mi>'+
    '<paper-tooltip id="tooltip" animation-delay="0" offset="0" class="ss mtotbr" role="tooltip" tabindex="-1">'+
    '<div id="tooltip" class="ss paper-tooltip hidden">已添加</div>'+
    '</paper-tooltip>'+
    '</mtotbr>'+
    '<mtotbr class="ss mthumb" role="button" tabindex="-1" top-right-overlay="" aria-label="稍后观看" onclick="watchLater(event, this)" onmouseover="showThumbnailTip(this, 76, -8)" onmouseout="hideTip(this)">'+
    '<div id="label-container" class="ss mtotbr">'+
    '<div id="label" class="ss mtotbr">稍后观看</div>'+
    '</div>'+
    '<mi id="icon" class="ss mtotbr">'+
    '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;" class="ss mi">'+
    '<g class="ss mi">'+
    '<path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z" class="ss mi"></path>'+
    '</g>'+
    '</svg>'+
    '</mi>'+
    '<paper-tooltip id="tooltip" animation-delay="0" offset="0" class="ss mtotbr" role="tooltip" tabindex="-1">'+
    '<div id="tooltip" class="ss paper-tooltip hidden">稍后观看</div>'+
    '</paper-tooltip>'+
    '</mtotbr>'+
    '<mtotbr class="ss mthumb" role="button" tabindex="-1" top-right-overlay="" aria-label="添加到队列" onclick="addPlayList(event, this)" onmouseover="showThumbnailTip(this, 89, 26)" onmouseout="hideTip(this)">'+
    '<div id="label-container" class="ss mtotbr">'+
    '<div id="label" class="ss mtotbr">添加到队列</div>'+
    '</div>'+
    '<mi id="icon" class="ss mtotbr">'+
    '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;" class="ss mi">'+
    '<g class="ss mi">'+
    '<path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z" class="ss mi"></path>'+
    '</g>'+
    '</svg>'+
    '</mi>'+
    '<paper-tooltip id="tooltip" animation-delay="0" offset="0" class="ss mtotbr" role="tooltip" tabindex="-1" style="--paper-tooltip-delay-in:0ms; left: -97px; top: -11px;">'+
    '<div id="tooltip" class="ss paper-tooltip hidden">添加到队列</div>'+
    '</paper-tooltip>'+
    '</mtotbr>'+
    '<mtotbr class="ss mthumb" role="button" tabindex="-1" top-right-overlay="" aria-label="已添加" toggled="" hidden="" onclick="removePlayList(event, this)" onmouseover="showThumbnailTip(this, 63, 26)" onmouseout="hideTip(this)">'+
    '<div id="label-container" class="ss mtotbr">'+
    '<div id="label" class="ss mtotbr">已添加</div>'+
    '</div>'+
    '<mi id="icon" class="ss mtotbr">'+
    '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;" class="ss mi">'+
    '<g class="ss mi">'+
    '<path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z" class="ss mi"></path>'+
    '</g>'+
    '</svg>'+
    '</mi>'+
    '<paper-tooltip id="tooltip" animation-delay="0" offset="0" class="ss mtotbr" role="tooltip" tabindex="-1" style="--paper-tooltip-delay-in:0ms; left: -71px; top: -11px;">'+
    '<div id="tooltip" class="ss paper-tooltip fade-in-animation">已添加</div>'+
    '</paper-tooltip>'+
    '</mtotbr>'+
    '</div>'+
    '</a>'+
    '</mthumb>'+
    '<div class="details ss mcvr">'+
    '<div class="metadata ss mcvr">'+
    '<a class="mse ss mcvr" rel="nofollow" href="https://www.bilibili.com/video/'+bvCode+'" target="_blank">'+
    '<h3 class="ss mcvr">'+
    '<span id="video-title" class="ss mcvr" aria-label="'+name+'">'+name+'</span>'+
    '</h3>'+
    '<div class="secondary-metadata ss mcvr">'+
    '<mtd-video-meta-block class="compact ss mcvr byline-separated" no-endpoints="">'+
    '<div id="metadata" class="ss mtd-video-meta-block">'+
    '<div id="byline-container" class="ss mtd-video-meta-block">'+
    '<mtd-channel-name id="channel-name" class="ss mtd-video-meta-block">'+
    '<div id="container" class="ss mtd-channel-name">'+
    '<div id="text-container" class="ss mtd-channel-name">'+
    '<mfs id="text" class="ss mtd-channel-name" ellipsis-truncate="" title="'+author+'">'+author+'</mfs>'+
    '</div>'+
    '<paper-tooltip position="top" class="ss mtd-channel-name" role="tooltip" tabindex="-1">'+
    '<div id="tooltip" class="hidden ss paper-tooltip"></div>'+
    '</paper-tooltip>'+
    '</div>'+
    (authorAuth?('<mtd-badge-supported-renderer class="ss mtd-channel-name" onmouseover="showTip(this, 58, -56)" onmouseout="hideTip(this)">'+
    '<div class="badge badge-style-type-verified ss mtd-badge-supported-renderer">'+
    '<mi class="ss mtd-badge-supported-renderer">'+
    '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;" class="ss mi">'+
    '<g class="ss mi">'+
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2z M9.92,17.93l-4.95-4.95l2.05-2.05l2.9,2.9l7.35-7.35l2.05,2.05L9.92,17.93z" class="ss mi"></path>'+
    '</g>'+
    '</svg>'+
    '</mi>'+
    '<span class="ss mtd-badge-supported-renderer"></span>'+
    '<paper-tooltip position="top" class="ss mtd-badge-supported-renderer" role="tooltip" tabindex="-1" style="left: 201px; top: -26.1667px;">'+
    '<div id="tooltip" class="ss paper-tooltip hidden">已验证</div>'+
    '</paper-tooltip>'+
    '</div>'+
    '</mtd-badge-supported-renderer>'):'')+
    '</mtd-channel-name>'+
    '<div id="separator" class="ss mtd-video-meta-block">•</div>'+
    '</div>'+
    '<div id="metadata-line" class="ss mtd-video-meta-block">'+
    '<span class="ss mtd-video-meta-block">'+viewTimes+'次观看</span>'+
    '</div>'+
    '</div>'+
    '</mtd-video-meta-block>'+
    '</div>'+
    '</a>'+
    '<div id="buttons" class="ss mcvr"></div>'+
    '</div>'+
    '<div id="menu" class="ss mcvr">'+
    '<mmr class="ss mcvr" onclick="showPlayItemMenu(event, this)">'+
    '<div id="top-level-buttons" class="ss mmr"></div>'+
    '<mi-button id="button" class="dropdown-trigger ss mmr">'+
    '<button id="button" class="ss mi-button" aria-label="操作菜单">'+
    '<mi class="ss mmr">'+
    '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;" class="ss mi">'+
    '<g class="ss mi">'+
    '<path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" class="ss mi"></path>'+
    '</g>'+
    '</svg>'+
    '</mi>'+
    '</button>'+
    '</mi-button>'+
    '</mmr>'+
    '</div>'+
    '<div id="queue-button" class="ss mcvr"></div>'+
    '</div>'+
    '</div>'+
    '<div id="dismissed" class="ss mcvr"></div>';
    document.getElementsByClassName("playItemContainer")[0].appendChild(item);
}

function appendComment(avatarCode, author, commentTime, content, showExpand, upNum, downNum, subReplies, fromMiki){
    let item = document.createElement("mtd-comment-thread-renderer");
    item.setAttribute("class", "ss mtd-item-section-renderer");
    let mainComment = document.createElement("mtd-comment-renderer");
    mainComment.setAttribute("id", "comment");
    mainComment.setAttribute("class", "ss mtd-comment-thread-renderer");
    mainComment.setAttribute("comment-style", "unknown");
    mainComment.innerHTML = '<div id="body" class="ss mtd-comment-renderer">'+
    '<div id="author-thumbnail" class="ss mtd-comment-renderer">'+
    '<a class="mse ss mtd-comment-renderer" href="#">'+
    '<mis class="ss mtd-comment-renderer no-transition" fit="" height="40" width="40" style="background-color: transparent;" loaded="">'+
    '<img id="img" class="ss mis lazyimg" alt="'+author+'" data-src="'+urlPrefix+"img/avatar/"+avatarCode+'.webp" width="40" height="40" />'+
    '</mis>'+
    '</a>'+
    '</div>'+
    '<div id="main" class="ss mtd-comment-renderer">'+
    '<div id="header" class="ss mtd-comment-renderer">'+
    '<div id="header-author" class="ss mtd-comment-renderer">'+
    '<a id="author-text" class="mse ss mtd-comment-renderer" href="#"'+(fromMiki?' hidden=""':'')+'>'+
    '<span class="ss mtd-comment-renderer">'+author+'</span>'+
    '</a>'+
    (fromMiki?('<span id="author-comment-badge" class="ss mtd-comment-renderer">'+
    '<mtd-author-comment-badge-renderer class="ss mtd-comment-renderer" creator="" style="--mtd-author-comment-badge-background-color:#888888; --mtd-author-comment-badge-name-color:#ffffff; --mtd-author-comment-badge-icon-color:#ffffff;">'+
    '<a id="name" class="mse ss mtd-author-comment-badge-renderer" href="https://space.bilibili.com/477317922">'+
    '<mtd-channel-name id="channel-name" class="ss mtd-author-comment-badge-renderer">'+
    '<div id="container" class="ss mtd-channel-name">'+
    '<div id="text-container" class="ss mtd-channel-name">'+
    '<mfs id="text" class="ss mtd-channel-name" ellipsis-truncate="" title="MIKI channel">MIKI channel</mfs>'+
    '</div>'+
    '</div>'+
    '</mtd-channel-name>'+
    '</a>'+
    '</mtd-author-comment-badge-renderer>'+
    '</span>'):'')+
    '<mfs class="published-time-text above-comment ss mtd-comment-renderer" has-link-only_=""><a class="mse ss mfs" spellcheck="false" href="#" dir="auto">'+commentTime+'</a></mfs>'+
    '</div>'+
    '</div>'+
    '<mtd-expander id="expander" class="expander-exp ss mtd-comment-renderer" collapsed="" style="--mtd-expander-collapsed-height:80px;">'+
    '<div id="content" class="ss mtd-expander">'+
    '<mfs id="content-text" slot="content" split-lines="" class="ss mtd-comment-renderer">'+
    content+
    '</mfs>'+
    '</div>'+
    (showExpand?('<paper-button id="less" aria-expanded="true" noink="" class="ss mtd-expander" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false" hidden="" onclick="toggleExpander(this)">'+
    '<span slot="less-button" class="less-button-exp ss mtd-comment-renderer">收起</span>'+
    '<paper-ripple class="ss paper-button">'+
    '<div id="background" class="ss paper-ripple"></div>'+
    '<div id="waves" class="ss paper-ripple"></div>'+
    '</paper-ripple>'+
    '</paper-button>'+
    '<paper-button id="more" class="ss mtd-expander" aria-expanded="false" noink="" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false" onclick="toggleExpander(this)">'+
    '<span slot="more-button" class="more-button-exp ss mtd-comment-renderer">展开</span>'+
    '</paper-button>'):'')+
    '</mtd-expander>'+
    '<mtd-comment-action-buttons-renderer id="action-buttons" class="ss mtd-comment-renderer" action-buttons-style="desktop-toolbar">'+
    '<div id="toolbar" class="ss mtd-comment-action-buttons-renderer">'+
    '<div id="reply-button" class="ss mtd-comment-action-buttons-renderer"></div>'+
    '<mtbr id="like-button" class="ss mtd-comment-action-buttons-renderer style-text size-default" use-keyboard-focused="" button-renderer="true" is-icon-button="" has-no-text="" onmouseover="showTip(this, 45)" onmouseout="hideTip(this)">'+
    '<a class="mse ss mtbr" tabindex="-1">'+
    '<mi-button id="button" class="ss mtbr style-text size-default">'+
    '<button id="button" class="ss mi-button" aria-label="'+(upNum>0?('顶此评论，已有 '+upNum+' 人顶过'):'顶一下此评论')+'" aria-pressed="false">'+
    '<mi class="ss mtbr">'+
    '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;" class="ss mi">'+
    '<g class="ss mi">'+
    '<path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" class="ss mi"></path>'+
    '</g>'+
    '</svg>'+
    '</mi>'+
    '</button>'+
    '</mi-button>'+
    '<paper-tooltip class="ss mtbr" role="tooltip" tabindex="-1">'+
    '<div id="tooltip" class="ss paper-tooltip hidden">顶</div>'+
    '</paper-tooltip>'+
    '</a>'+
    '</mtbr>'+
    (upNum>0?('<span id="vote-count-middle" class="ss mtd-comment-action-buttons-renderer" aria-label="'+upNum+' 次顶">'+upNum+'</span>'):'')+
    '<mtbr id="dislike-button" class="ss mtd-comment-action-buttons-renderer style-text size-default" use-keyboard-focused="" button-renderer="true" is-icon-button="" has-no-text="" onmouseover="showTip(this, 45)" onmouseout="hideTip(this)">'+
    '<a class="mse ss mtbr" tabindex="-1">'+
    '<mi-button id="button" class="ss mtbr style-text size-default">'+
    '<button id="button" class="ss mi-button" aria-label="'+(downNum>0?('踩此评论，已有 '+downNum+' 人顶过'):'踩一下此评论')+'" aria-pressed="false">'+
    '<mi class="ss mtbr">'+
    '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;" class="ss mi">'+
    '<g class="ss mi">'+
    '<path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z" class="ss mi"></path>'+
    '</g>'+
    '</svg>'+
    '</mi>'+
    '</button>'+
    '<paper-ripple class="ss mi-button circle">'+
    '<div id="background" class="ss paper-ripple" style="opacity: 0.0036;"></div>'+
    '<div id="waves" class="ss paper-ripple"></div>'+
    '</paper-ripple>'+
    '</mi-button>'+
    '<paper-tooltip class="ss mtbr" role="tooltip" tabindex="-1">'+
    '<div id="tooltip" class="ss paper-tooltip hidden">踩</div>'+
    '</paper-tooltip>'+
    '</a>'+
    '</mtbr>'+
    (downNum>0?('<span id="vote-count-middle" class="ss mtd-comment-action-buttons-renderer" aria-label="'+downNum+' 次踩">'+downNum+'</span>'):'')+
    '<div id="creator-heart" class="ss mtd-comment-action-buttons-renderer"></div>'+
    '<div id="reply-button-end" class="ss mtd-comment-action-buttons-renderer">'+
    '<mtd-button-renderer class="ss mtd-comment-action-buttons-renderer style-text size-default" button-renderer="" use-keyboard-focused="" is-paper-button="">'+
    '<a class="mse ss mtd-button-renderer" tabindex="-1">'+
    '<paper-button id="button" class="ss mtd-button-renderer style-text size-default" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false" aria-label="回复">'+
    '<mfs id="text" class="ss mtd-button-renderer style-text size-default">回复</mfs>'+
    '</paper-button>'+
    '</a>'+
    '</mtd-button-renderer>'+
    '</div>'+
    '</div>'+
    '<div id="reply-dialog" class="ss mtd-comment-action-buttons-renderer"></div>'+
    '</mtd-comment-action-buttons-renderer>'+
    '<mtd-button-renderer id="view-threaded-replies" aria-expanded="false" noink="" class="ss mtd-comment-renderer" button-renderer="" use-keyboard-focused=""></mtd-button-renderer>'+
    '<mtd-button-renderer id="hide-threaded-replies" aria-expanded="true" noink="" class="ss mtd-comment-renderer" button-renderer="" use-keyboard-focused=""></mtd-button-renderer>'+
    '</div>'+
    '<div id="action-menu" class="ss mtd-comment-renderer">'+
    '<mmr class="ss mtd-comment-renderer">'+
    '<div id="top-level-buttons" class="ss mmr"></div>'+
    '<mi-button id="button" class="dropdown-trigger ss mmr">'+
    '<button id="button" class="ss mi-button" aria-label="操作菜单">'+
    '<mi class="ss mmr">'+
    '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;" class="ss mi">'+
    '<g class="ss mi">'+
    '<path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" class="ss mi"></path>'+
    '</g>'+
    '</svg>'+
    '</mi>'+
    '</button>'+
    '</mi-button>'+
    '</mmr>'+
    '</div>'+
    '</div>';
    item.appendChild(mainComment);
    if(subReplies && subReplies.length>0){
        let subItem = document.createElement("div");
        subItem.setAttribute("id", "replies");
        subItem.setAttribute("class", "ss mtd-comment-thread-renderer");
        let replies = document.createElement("mtd-comment-replies-renderer");
        replies.setAttribute("class", "ss mtd-comment-thread-renderer");
        subItem.appendChild(replies);
        let expander = document.createElement("div");
        expander.setAttribute("id", "expander");
        expander.setAttribute("class", "ss mtd-comment-replies-renderer");
        replies.appendChild(expander);
        let moreReplies = document.createElement("mtd-button-renderer");
        moreReplies.setAttribute("id", "more-replies");
        moreReplies.setAttribute("class", "more-button-exp ss mtd-comment-replies-renderer");
        moreReplies.setAttribute("aria-expanded", "false");
        moreReplies.setAttribute("noink", "");
        moreReplies.setAttribute("button-renderer", "");
        moreReplies.setAttribute("use-keyboard-focused", "");
        moreReplies.setAttribute("is-paper-button-with-icon", "");
        moreReplies.setAttribute("is-paper-button", "");
        moreReplies.setAttribute("onclick", "toggleCommentReaply(this)");
        moreReplies.innerHTML = '<a class="mse ss mtd-button-renderer" tabindex="-1">'+
        '<paper-button id="button" class="ss mtd-button-renderer" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false" aria-label="查看 '+subReplies.length+' 条回复">'+
        '<mi class="ss mtd-button-renderer">'+
        '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;" class="ss mi">'+
        '<g class="ss mi">'+
        '<path d="M7 10l5 5 5-5z" class="ss mi"></path>'+
        '</g>'+
        '</svg>'+
        '</mi>'+
        '<mfs id="text" class="ss mtd-button-renderer">查看 '+subReplies.length+' 条回复</mfs>'+
        '</paper-button>'+
        '</a>';
        expander.appendChild(moreReplies);
        let lessReplies = document.createElement("mtd-button-renderer");
        lessReplies.setAttribute("id", "less-replies");
        lessReplies.setAttribute("class", "less-button-exp ss mtd-comment-replies-renderer");
        lessReplies.setAttribute("aria-expanded", "true");
        lessReplies.setAttribute("noink", "");
        lessReplies.setAttribute("button-renderer", "");
        lessReplies.setAttribute("use-keyboard-focused", "");
        lessReplies.setAttribute("is-paper-button-with-icon", "");
        lessReplies.setAttribute("is-paper-button", "");
        lessReplies.setAttribute("onclick", "toggleCommentReaply(this)");
        lessReplies.setAttribute("hidden", "");
        lessReplies.innerHTML = '<a class="mse ss mtd-button-renderer" tabindex="-1">'+
        '<paper-button id="button" class="ss mtd-button-renderer" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false" aria-label="隐藏 '+subReplies.length+' 条回复">'+
        '<mi class="ss mtd-button-renderer">'+
        '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;" class="ss mi">'+
        '<g class="ss mi">'+
        '<path d="M7 14l5-5 5 5z" class="ss mi"></path>'+
        '</g>'+
        '</svg>'+
        '</mi>'+
        '<mfs id="text" class="ss mtd-button-renderer">隐藏 '+subReplies.length+' 条回复</mfs>'+
        '</paper-button>'+
        '</a>';
        expander.appendChild(lessReplies);
        let expanderContents = document.createElement("div");
        expanderContents.setAttribute("id", "expander-contents");
        expanderContents.setAttribute("class", "ss mtd-comment-replies-renderer");
        expanderContents.setAttribute("hidden", "");
        expander.appendChild(expanderContents);
        let loadedReplies = document.createElement("div");
        loadedReplies.setAttribute("id", "loaded-replies");
        loadedReplies.setAttribute("class", "ss mtd-comment-replies-renderer");
        expanderContents.appendChild(loadedReplies);
        for(let i=0;i<subReplies.length;i++){
            let subReplie = subReplies[i];
            let subCommentItem = document.createElement("mtd-comment-renderer");
            subCommentItem.setAttribute("class", "ss mtd-comment-replies-renderer");
            subCommentItem.setAttribute("is-reply", "");
            subCommentItem.setAttribute("comment-style", "unknown");
            subCommentItem.innerHTML = '<div id="body" class="ss mtd-comment-renderer">'+
            '<div id="author-thumbnail" class="ss mtd-comment-renderer">'+
            '<a class="mse ss mtd-comment-renderer" href="#">'+
            '<mis fit="" height="40" width="40" class="ss mtd-comment-renderer no-transition" style="background-color: transparent;" loaded="">'+
            '<img id="img" class="ss mis lazyimg" alt="'+subReplie.author+'" data-src="'+urlPrefix+"img/avatar/"+subReplie.avatarCode+'.webp" width="40" height="40" />'+
            '</mis>'+
            '</a>'+
            '</div>'+
            '<div id="main" class="ss mtd-comment-renderer">'+
            '<div id="header" class="ss mtd-comment-renderer">'+
            '<div id="header-author" class="ss mtd-comment-renderer">'+
            '<a id="author-text" class="mse ss mtd-comment-renderer" href="#">'+
            '<span class="ss mtd-comment-renderer">'+subReplie.author+'</span>'+
            '</a>'+
            '<mfs class="published-time-text above-comment ss mtd-comment-renderer" has-link-only_=""><a class="mse ss mfs" spellcheck="false" href="#" dir="auto">1周前</a></mfs>'+
            '</div>'+
            '</div>'+
            '<mtd-expander id="expander" class="expander-exp ss mtd-comment-renderer" collapsed="" style="--mtd-expander-collapsed-height:80px;">'+
            '<div id="content" class="ss mtd-expander">'+
            '<mfs id="content-text" slot="content" split-lines="" class="ss mtd-comment-renderer">'+subReplie.content+'</mfs>'+
            '</div>'+
            '</mtd-expander>'+
            '<mfs class="published-time-text below-comment ss mtd-comment-renderer" has-link-only_="" hidden=""><a class="mse ss mfs" spellcheck="false" href="#" dir="auto">1周前</a></mfs>'+
            '<mtd-comment-action-buttons-renderer id="action-buttons" class="ss mtd-comment-renderer" action-buttons-style="desktop-toolbar">'+
            '<div id="toolbar" class="ss mtd-comment-action-buttons-renderer">'+
            '<div id="reply-button" class="ss mtd-comment-action-buttons-renderer"></div>'+
            '<mtbr id="like-button" class="ss mtd-comment-action-buttons-renderer style-text size-default" use-keyboard-focused="" is-icon-button="" has-no-text="" button-renderer="true">'+
            '<a class="mse ss mtbr" tabindex="-1">'+
            '<mi-button id="button" class="ss mtbr style-text size-default">'+
            '<button id="button" class="ss mi-button" aria-label="'+(subReplie.upNum>0?('顶此回复，已有 '+subReplie.upNum+' 人顶过'):'顶一下此回复')+'">'+
            '<mi class="ss mtbr">'+
            '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;" class="ss mi">'+
            '<g class="ss mi">'+
            '<path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" class="ss mi"></path>'+
            '</g>'+
            '</svg>'+
            '</mi>'+
            '</button>'+
            '</mi-button>'+
            '</a>'+
            '</mtbr>'+
            (subReplie.upNum>0?('<span id="vote-count-middle" class="ss mtd-comment-action-buttons-renderer" aria-label="'+subReplie.upNum+' 次顶">'+subReplie.upNum+'</span>'):'')+
            '<mtbr id="dislike-button" class="ss mtd-comment-action-buttons-renderer style-text size-default" use-keyboard-focused="" is-icon-button="" has-no-text="" button-renderer="true">'+
            '<a class="mse ss mtbr" tabindex="-1">'+
            '<mi-button id="button" class="ss mtbr style-text size-default">'+
            '<button id="button" class="ss mi-button" aria-label="'+(subReplie.downNum>0?('踩此回复，已有 '+subReplie.downNum+' 人踩过'):'踩一下此回复')+'">'+
            '<mi class="ss mtbr">'+
            '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;" class="ss mi">'+
            '<g class="ss mi">'+
            '<path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z" class="ss mi"></path>'+
            '</g>'+
            '</svg>'+
            '</mi>'+
            '</button>'+
            '</mi-button>'+
            '<paper-tooltip class="ss mtbr" role="tooltip" tabindex="-1">'+
            '<div id="tooltip" class="ss paper-tooltip hidden">踩</div>'+
            '</paper-tooltip>'+
            '</a>'+
            '</mtbr>'+
            (subReplie.downNum>0?('<span id="vote-count-middle" class="ss mtd-comment-action-buttons-renderer" aria-label="'+subReplie.downNum+' 次踩">'+subReplie.downNum+'</span>'):'')+
            '<div id="creator-heart" class="ss mtd-comment-action-buttons-renderer"></div>'+
            '<div id="reply-button-end" class="ss mtd-comment-action-buttons-renderer">'+
            '<mtd-button-renderer class="ss mtd-comment-action-buttons-renderer style-text size-default" button-renderer="" use-keyboard-focused="" is-paper-button="">'+
            '<a class="mse ss mtd-button-renderer" tabindex="-1">'+
            '<paper-button id="button" class="ss mtd-button-renderer style-text size-default" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false" aria-label="回复">'+
            '<mfs id="text" class="ss mtd-button-renderer style-text size-default">回复</mfs>'+
            '</paper-button>'+
            '</a>'+
            '</mtd-button-renderer>'+
            '</div>'+
            '</div>'+
            '<div id="reply-dialog" class="ss mtd-comment-action-buttons-renderer"></div>'+
            '</mtd-comment-action-buttons-renderer>'+
            '<mtd-button-renderer id="view-threaded-replies" aria-expanded="false" noink="" class="ss mtd-comment-renderer" button-renderer="" use-keyboard-focused=""></mtd-button-renderer>'+
            '<mtd-button-renderer id="hide-threaded-replies" aria-expanded="true" noink="" class="ss mtd-comment-renderer" button-renderer="" use-keyboard-focused=""></mtd-button-renderer>'+
            '</div>'+
            '<div id="action-menu" class="ss mtd-comment-renderer">'+
            '<mmr class="ss mtd-comment-renderer">'+
            '<div id="top-level-buttons" class="ss mmr"></div>'+
            '<mi-button id="button" class="dropdown-trigger ss mmr">'+
            '<button id="button" class="ss mi-button" aria-label="操作菜单">'+
            '<mi class="ss mmr">'+
            '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;" class="ss mi">'+
            '<g class="ss mi">'+
            '<path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" class="ss mi"></path>'+
            '</g>'+
            '</svg>'+
            '</mi>'+
            '</button>'+
            '</mi-button>'+
            '</mmr>'+
            '</div>'+
            '</div>';
            loadedReplies.appendChild(subCommentItem);
        }
        item.appendChild(subItem);
    }
    if(fromMiki){
        document.getElementsByClassName("commentContainer")[0].prepend(item);
    } else {
        document.getElementsByClassName("commentContainer")[0].appendChild(item);
    }
}

function preloadImage(){
    var promiseAll = resources.map(function (item) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.onload = function () {
                img.onload = null;
                resolve(img);
            };
            img.error = function () {
                reject('图片加载失败');
            };
            img.src = urlPrefix+item;
        });
    });
    Promise.all(promiseAll).then(function () {
        resourceLoadComplete();
    }, function (err) {
        console.log(err);
    });
}