'use strict'
all_images = new Array(
    "image/img_1.png",
    "image/img_2.png",
    "image/img_3.png",
    "image/img_4.png");
var ImgNum = 0;
var ImgLength = all_images.length - 1;
var delay = 2500;
var lock = false;
var run;

function chgImg(direction) {
    if (document.images) {
        ImgNum = ImgNum + direction;
        if (ImgNum > ImgLength) { ImgNum = 0; }
        if (ImgNum < 0) { ImgNum = ImgLength; }
        document.slide_show.src = all_images[ImgNum];
    }
}
