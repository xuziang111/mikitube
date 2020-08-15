var resources = [
    "img/player_background.webp",
    "img/op.webp"
];
var appendResourceElementIds = ["opDelay", "opMain", "follow", "addBack"];

function changeToDownvote(){
    let isSubscribe = document.getElementsByTagName("mtd-subscribe-button-renderer")[0].getElementsByTagName("paper-button")[0].hasAttribute("subscribed");
    if(playing && isSubscribe){
        playKnifeMiki();
    }
}

function changeNoDownvote(){
    let isSubscribe = document.getElementsByTagName("mtd-subscribe-button-renderer")[0].getElementsByTagName("paper-button")[0].hasAttribute("subscribed");
    if(playing && isSubscribe){
        playNyaaMiki();
    }
}

function changeToSubscribe(){
    let isDownvote = document.getElementById("downvoteButton").classList.contains("style-default-active");
    if(isDownvote){
        playKnifeMiki();
    } else {
        playNyaaMiki();
    }
}

function changeNoSubscribe(){
    playDogMiki();
}

function doPlay(){
    document.getElementsByClassName("mtp-spinner")[0].style.display = "none";
    let isDownvote = document.getElementById("downvoteButton").classList.contains("style-default-active");
    let isSubscribe = document.getElementsByTagName("mtd-subscribe-button-renderer")[0].getElementsByTagName("paper-button")[0].hasAttribute("subscribed");
    if(!isSubscribe){
        playDogMiki();
    } else if(isDownvote){
        playKnifeMiki();
    } else {
        opDelay.play();
    }
}

function playNyaaMiki(){
    document.getElementById("movie_player").style.backgroundPositionY = "300%";
    document.getElementById("nyaa_miki").style.top = "2.6%";
    follow.pause();
    addBack.pause();
    opMain.play();
}

function playKnifeMiki(){
    opDelay.pause();
    opMain.pause();
    follow.pause();
    addBack.pause();
    document.getElementById("movie_player").style.backgroundPositionY = "200%";
    document.getElementById("nyaa_miki").style.top = "100%";
}

function playDogMiki(){
    opDelay.pause();
    addBack.pause();
    opMain.pause();
    follow.currentTime = 0;
    follow.play();
    document.getElementById("movie_player").style.backgroundPositionY = "100%";
    document.getElementById("nyaa_miki").style.top = "100%";
}

function init(){
    document.getElementById("opDelay").addEventListener('ended', (event) => {
        playNyaaMiki();
    });
    document.getElementById("follow").addEventListener('ended', (event) => {
        let addBack = document.getElementById("addBack");
        addBack.currentTime = 0;
        addBack.play();
    });
    appendPlayItem("005", "BV1cC4y187Mr", "【花留Karu】弥歌", "sayakadead", false, "0:38", "4783");
    appendPlayItem("006", "BV19g4y1v7PX", "【台词回】孟宝教你如何模仿Miki", "Mahiru的闹钟", false, "1:39", "7370");
    appendPlayItem("029", "BV17f4y1R7k7", "miki：mahiru你到底守护了些什么啊！", "十条小喳", false, "1:20", "6156");
    appendPlayItem("012", "BV1Fp4y1S7sk", "【Mihiru】教唆mhr偷东西的弥希miki最终遭到铁拳制裁！", "Miooooooooooo丶", false, "3:57", "7663");
    appendPlayItem("008", "BV13z4y1X7xc", "【弥希Miki】你们弥人没有自己的直播间吗？", "记录者-枯叶", false, "2:35", "2.2万");
    appendPlayItem("025", "BV13V41167F7", "mahiru遭坏女人吃播80", "龙虾orz", false, "2:40", "4978");
    appendPlayItem("009", "BV1xZ4y1H7Ty", "不要找弥人谈恋爱", "被淋湿的雨", false, "3:34", "1.7万");
    appendPlayItem("010", "BV1xD4y1D7wG", "【Mahiru录播剪辑】弥希miki 你把多少人的生活都毁了！", "Miooooooooooo丶", false, "6:08", "1.8万");
    appendPlayItem("013", "BV1ti4y147bT", "啊? 哈? 嗯?", "sayakadead", false, "4:15", "2751");
    appendPlayItem("024", "BV1bi4y1475J", "寿寿歌：Miki前辈可以作我老婆吗？", "SochrAidvka", false, "3:36", "1.7万");
    appendPlayItem("014", "BV1zV411d7ew", "被现实同学质问与mhr关系的弥希miki", "龙虾orz", false, "1:35", "1.1万");
    appendPlayItem("026", "BV1rg4y187CG", "迫害miki的好女人艾因", "新酱哇咔咔", false, "5:25", "1.3万");
    appendPlayItem("027", "BV1at4y1U7En", "【剪辑】副会长醉后叫妈；一果拥抱光一！？虚拟饮料回忆杂谈【安堂/弥希/一果/七海】", "唯我称熊", false, "3:48", "3.3万");
    appendPlayItem("016", "BV1nQ4y1M738", "【wota艺】hectopascal【Mihiru】", "被淋湿的雨", false, "4:01", "1355");
    appendPlayItem("017", "BV1qe411x7oz", "海绵弥宝与孟大星", "sayakadead", false, "0:50", "1872");
    appendPlayItem("018", "BV1XE411c7wQ", "【wota艺】ロメオ-miki&mhr-", "被淋湿的雨", false, "5:07", "1202");
    appendPlayItem("019", "BV1u7411R7Rv", "Mahiru在Miki这边应该是永远不会输的！", "SochrAidvka", false, "2:25", "9244");
    appendPlayItem("020", "BV1b7411K7Xy", "[wota艺]チューリングラブ", "被淋湿的雨", false, "3:43", "1607");
    appendPlayItem("021", "BV1L7411G7FM", "【CP营业】天降傲娇与青梅竹马。续 真绯瑠mahiru与弥希miki彼此的掌中明灯照亮之物", "缺水少爷", false, "3:27", "2.1万");
    appendPlayItem("022", "BV1p741187u1", "直 女 卖 姬", "miki的炒牛河铺", false, "35:46", "1.3万");
    appendPlayItem("023", "BV1G7411s7p6", "一 般 同 事 弥 希", "SochrAidvka", false, "7:37", "9300");
    appendPlayItem("028", "BV1m7411B7Bw", "弥希和一果的……对决？", "潘哒哒哒哒哒哒哒哒", false, "1:39", "1.4万");
    
    appendComment("B000", "弥人", "11个月前", "歌詞\n「Mimimimimimimi!」\n作曲・編曲：daniwellP\n歌唱：弥希Miki\nMimimimimimimimimimimimimimimi\nMimimimimimimimimimimimimimimi\nMimimimimimimimimimimimimimimi\nMimimimimimimimimimimimimimimi\nMimi Mimi Mimimimimimimimimimimi\nMimi Mimi Mimimimimimimimimimimi\nMimi Mimi Mimimimimimimimimimimi\nMimi Mimi Mimimimimimimimimimimi", true, 2434, 0, []);
    appendComment("Y001", "OnikustOtim", "10个月前", "弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥", false, 203, 0, []);
    appendComment("Y004", "EdeakIhcugih", "10个月前", "弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥", false, 203, 0, []);
    appendComment("Y052", "Irodim", "10个月前", "弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥", false, 200, 0, []);
    appendComment("Y017", "ier_Ayot_ier", "10个月前", "弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥", false, 183, 0, []);
    appendComment("Y043", "AniisAkiuy", "10个月前", "弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥", false, 178, 0, [{"avatarCode":"Y039", "author":"Panda", "commentTime":"10个月前", "content":"弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥", "upNum": 179, "downNum": 0}]);
    appendComment("Y002", "32ikuy_Orihihc", "10个月前", "弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥", false, 172, 0, []);
    appendComment("Y033", "AreArabigoto", "9个月前", "弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥", false, 160, 0, []);
    appendComment("Y027", "Atseleh_Ezil", "9个月前", "弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥", false, 153, 0, []);
    appendComment("Y061", "amas_uribedibed", "9个月前", "弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥", false, 151, 0, [{"avatarCode":"Y099", "author":"ittibed", "commentTime":"9个月前", "content":"弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥", "upNum": 126, "downNum": 0}]);
    appendComment("Y068", "esotihc_uoduk", "9个月前", "弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥", false, 145, 0, []);
    appendComment("Y026", "arahuzus_ulul", "8个月前", "弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥", false, 140, 0, []);
    appendComment("Y073", "Anirtak_Egna_", "8个月前", "弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥", false, 133, 0, []);
}