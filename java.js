var p1 = new Image();
var p2 = new Image();
var p3 = new Image();
var p4 = new Image();
var p5 = new Image();
var p6 = new Image();
var p7 = new Image();

p1.src = "codefucious.png";
p2.src = 'juke.jpg';
p3.src = 'tbal.jpg';
p4.src = 'library.png';
p5.src = 'google.png'
p6.src = 'battle.png';
p7.src = 'runner.png';

var projList = new Array(p1,p2,p3,p4,p5,p6,p7);

var counter1 = 0;
var counter2 = 1
var end = projList.length;

var elm1  = document.getElementById("proj1")
var proj1 = elm1.innerHTML
var elm2  = document.getElementById("proj2")
var proj2 = elm2.innerHTML
var elm3  = document.getElementById("proj3")
var proj3 = elm3.innerHTML
var elm4  = document.getElementById("proj4")
var proj4 = elm4.innerHTML
var elm5  = document.getElementById("proj5")
var proj5 = elm5.innerHTML
var elm6  = document.getElementById("proj6")
var proj6 = elm6.innerHTML
var elm7  = document.getElementById("proj7")
var proj7 = elm7.innerHTML



function myFunction(){
    var pica1 = document.getElementsByClassName("pic1");
    urlString1 = 'url('+projList[counter1].src+')';
    pica1[0].style.backgroundImage = urlString1;

    var pica2= document.getElementsByClassName("pic2");
    urlString2 = 'url('+projList[counter2].src+')';
    pica2[0].style.backgroundImage = urlString2;
}

function scroll_up(){
    counter1--;
    counter2--;
    if (counter1 == -1){counter1 = end-1};
    if (counter2 == -1){counter2 = end-1};
    myFunction();
}

function scroll_down(){
    counter1 ++;
    counter2++;
    if (counter1 == end){counter1 = 0};
    if (counter2 == end){counter2 = 0};
    myFunction();
}

function codeScript(project){
    if (project == p1){
    document.getElementById("content").innerHTML = proj1 }
    else if (project == p2){
    document.getElementById("content").innerHTML = proj2}
    else if (project == p3){
    document.getElementById("content").innerHTML = proj3}
    else if (project == p4){
    document.getElementById("content").innerHTML = proj4}
    else if (project == p5){
    document.getElementById("content").innerHTML = proj5}
    else if (project == p6){
    document.getElementById("content").innerHTML = proj6}
    else if (project == p7){
    document.getElementById("content").innerHTML = proj7}
    else{
    document.getElementById("content").innerHTML = "There seems to be an error. Please click on another project."}
}

