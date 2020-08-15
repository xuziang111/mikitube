var resources = [
    "https://cdn.jsdelivr.net/gh/mihirukiss/mikitube@1.0/img/player_background.webp",
    "https://cdn.jsdelivr.net/gh/mihirukiss/mikitube@1.0/img/player_background_border.webp"
];
var appendResourceElementIds = ["edBgm", "edNoMiki", "ed"];

function changeToSubscribe(){
    if(playing){
        playMiki();
    }
}

function changeNoSubscribe(){
    if(playing){
        playNoMiki();
    }
}

function doPlay(){
    document.getElementsByClassName("mtp-spinner")[0].style.display = "none";
    document.getElementById("playerBorder").style.display = "block";
    let isSubscribe = document.getElementsByTagName("mtd-subscribe-button-renderer")[0].getElementsByTagName("paper-button")[0].hasAttribute("subscribed");
    if(!isSubscribe){
        playNoMiki();
    } else {
        playMiki();
    }
    edBgm.play();
}

function playMiki(){
    ed.play();
    edNoMiki.pause();
    ed.setAttribute("style", "z-index: 201");
    edNoMiki.setAttribute("style", "z-index: 200");
}

function playNoMiki(){
    edNoMiki.play();
    ed.pause();
    ed.setAttribute("style", "z-index: 200");
    edNoMiki.setAttribute("style", "z-index: 201");
}

function init(){
    appendPlayItem("003", "BV19i4y1u7GA", "VR-VTL-KTV大合唱", "千羽笹木-845VoV", false, "4:24", "8949");
    appendPlayItem("004", "BV1jA411Y7cF", "重生之我是中单光一【tubeman第一集】", "闪光の老节操", false, "7:00", "1.7万");
    appendPlayItem("007", "BV1Qi4y1G7Zx", "[手书]我系广东人", "Icing_25", false, "1:03", "1.6万");
    appendPlayItem("011", "BV1LT4y1u7mg", "miki进入三维世界之后感觉身上少了点什", "午言Wuyan", false, "0:15", "807");
    appendPlayItem("030", "BV1jK4y1b7LL", "弥希Miki对人类释放本能的主观评价", "Miki的肠粉铺", false, "1:25", "1.1万");
    appendPlayItem("031", "BV18z4y1R7sV", "【弥希Miki】看管人哪儿有看管人朋友有意思", "缺水少爷", false, "2:14", "2.9万");
    appendPlayItem("032", "BV1FK411L7fi", "用笑声脑控观众的弥希miki", "科罗娜青柠", false, "0:43", "1.9万");
    appendPlayItem("015", "BV1V54y1X7fw", "Virtual to LIVE（covered by VirtuaReal）音频完整版", "VirtuaReal", true, "4:26", "7.8万");
    appendPlayItem("033", "BV19k4y1r79n", "【随机通话】正太光一阴阳怪气/弥希mik手刃渣女/一果后宫一直可以的", "缺水少爷", false, "4:47", "3.7万");
    appendPlayItem("034", "BV1zE41147BP", "向艾因宣誓效忠的弥希", "sayakadead", false, "3:32", "9376");
    appendPlayItem("035", "BV1aE41177Ju", "弥光喵", "sayakadead", false, "3:36", "1.2万");
    appendPlayItem("036", "BV1J7411w7Bw", "光一与弥希的作战会议（密）", "旺仔_Milk", false, "2:24", "1.4万");
    appendPlayItem("037", "BV1W7411h7qC", "龙 门 粗 口", "Miki的肠粉铺", false, "1:13", "2.7万");
    appendPlayItem("038", "BV1L7411p7Sg", "清楚弥宝", "三下苺大福", false, "6:10", "2.9万");
    appendPlayItem("039", "BV1T7411x75W", "直播中睡着的Miki", "弥语人不行吗", false, "1:40", "2.6万");
    appendPlayItem("040", "BV1i7411x7pd", "【(剪辑)十分钟带你看弥希Miki】弥希Miki的忧郁①", "FHKJKS", false, "8:10", "3431");
    appendPlayItem("041", "BV1AJ41187e1", "对于弥希Miki来说S代表什么？", "月予丛云花予风", false, "0:28", "8320");

    appendComment("Y010", "ogihci_imihsu", "1个月前", "弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥", false, 169, 0, []);
    appendComment("Y034", "ijiem_adebaraw", "1个月前", "弥弥弥弥弥弥弥弥弥弥", false, 164, 0, []);
    appendComment("Y032", "UgumustEbiratak", "1个月前", "弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥", false, 160, 0, []);
    appendComment("Y013", "EbononomEcila", "1个月前", "弥弥弥弥弥弥", false, 155, 0, []);
    appendComment("Y005", "32nirUzihs", "3周前", "弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥弥", false, 151, 0, []);
    appendComment("Y020", "Enabaka_Okuoy", "3周前", "弥弥弥弥弥弥弥弥弥弥弥弥", false, 147, 0, []);
    appendComment("Y021", "Awakihsoh_Aras", "3周前", "弥弥弥弥", false, 146, 0, []);
    appendComment("Y041", "umirir_oniakam", "3周前", "弥弥弥弥弥弥弥弥弥弥弥弥弥", false, 142, 0, []);
    appendComment("Y053", "hhokikudu", "2周前", "弥弥弥弥弥弥弥弥", false, 142, 0, []);
    appendComment("Y057", "Iromema_Oyas", "2周前", "弥弥弥弥弥弥弥弥弥弥弥", false, 139, 0, []);
}