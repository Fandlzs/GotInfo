function renderNavBar(id) {
    var selectedId = "#" + id;
    document.querySelector(selectedId).innerHTML +=
        '<table class="inline">' +
        '<tbody>' +
        '<tr>' +
        '<td><a href="index.html"><img class="inline" style="width: 80; height: 100px" src="img\\stark_shield.png" alt=""></a></td>'+
        '<td class="navBtn"><a href="jon_snow.html"><img class="btnImg" src="img\\jon_snow.png" alt=""></a></td>' +
        '<td style="width: 20px"></td>' +
        '<td class="navBtn"><a href="tyrion_lannister.html"><img class="btnImg" src="img\\tyrion.png" alt=""></a></td>' +

        '<td style="width: 20px"></td>' +
        '<td class="navBtn"><a href="jaime_lannister.html"><img style="height: 70px; width: 75px" class="btnImg" src="img\\jaime.png" alt=""></a></td>' +
        '<td style="width: 20px"></td>' +
        '<td class="navBtn"><a href="daenerys.html"><img style="left: 10px" class="btnImg" src="img\\daenerys.png" alt=""></a></td>' +
        '<td style="width: 400px"></td>' +
        '<td style="width: 300px; height: 80px;"><img style="width: 300px; height: 80px;" src="img\\got.png" alt=""></td>' +
        '</tr>' +
        '</tbody>' +
        '</table>';
    
    // document.querySelector("#bg").innerHTML +=
    // '<img class="AnimatedArrowSlow arrow1" src="img\\arrow.png" alt="">' +
    // '<img class="AnimatedArrowFast arrow2" src="img\\arrow.png" alt="">' +
    // '<img class="AnimatedArrowSlow arrow3" src="img\\arrow.png" alt="">'+
    // '<img class="AnimatedArrowFast arrow4" src="img\\arrow.png" alt="">'+
    // '<img class="AnimatedArrowVerySlow arrow5" src="img\\arrow.png" alt="">';

}
var imgCounter = 0;

function ShiftCounter() {
    if (imgCounter == 2) {
        imgCounter = 0;
    }
    else {
        imgCounter++;
    }
}

function SwitchImg(pageNumber) {

    ShiftCounter();
    switch (pageNumber) {
        case 0:
            var path = "img\\mainImage" + imgCounter + ".jpg";
            document.querySelector("#bgImg").setAttribute("src", path);
            break;
        case 1:
            var path = "img\\jonbg" + imgCounter + ".jpg";
            document.querySelector("#bgImg").setAttribute("src", path);
            break;
        case 2:
            var path = "img\\tyrionbg" + imgCounter + ".jpg";
            document.querySelector("#bgImg").setAttribute("src", path);
            break;
        case 3:
            var path = "img\\jaimebg" + imgCounter + ".jpg";
            document.querySelector("#bgImg").setAttribute("src", path);
            break;
        case 4:
            var path = "img\\daenerysbg" + imgCounter + ".jpg";
            document.querySelector("#bgImg").setAttribute("src", path);
            break;
    }

}

