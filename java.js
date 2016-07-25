var p1 = new Image();
var p2 = new Image();
var p3 = new Image();
var p4 = new Image();

p1.src = "codefucious.png";
p2.src = 'juke.jpg';
p3.src = 'tbal.jpg';
p4.src = 'library.png';

var projList = new Array(p1,p2,p3,p4);

var counter1 = 0;
var counter2 = 1
var end = projList.length;


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
    document.getElementById("content").innerHTML = "Nunc dapibus dictum ante vitae rutrum. Suspendisse convallis mauris diam, quis sodales lorem lobortis ac. Maecenas lobortis arcu eros, a commodo mi dapibus sit amet. Praesent libero sem, congue in dolor sit amet, cursus accumsan est. Pellentesque accumsan dolor vel sollicitudin pharetra. Etiam sed neque euismod elit finibus feugiat. Nam eu fringilla lectus. Mauris fermentum nunc sed eros viverra iaculis in id purus. Nam non risus sed ex ultrices blandit ac id elit.";
    }
    else if (project == p2){
    document.getElementById("content").innerHTML = "Maecenas porttitor felis quis posuere aliquet. In quis pretium mauris. Maecenas non felis a velit mattis fringilla ac ultrices diam. Integer tellus sem, pharetra vehicula nisl vitae, fringilla porttitor turpis. Phasellus sit amet leo nunc. Mauris viverra, magna quis euismod gravida, tortor eros consectetur lectus, nec porta sem urna ac orci. Aliquam erat volutpat. Curabitur sit amet commodo velit, eu maximus nisi. Proin gravida commodo velit in viverra. Duis ut nisl ut eros ultrices congue. Donec iaculis eleifend nulla in porta.";
    }
    else if (project == p3){
    document.getElementById("content").innerHTML = "Vestibulum varius sollicitudin turpis. Morbi sit amet facilisis nisl. Integer sit amet convallis urna. Nam tristique tellus magna, id commodo turpis luctus ut. Nullam consequat sollicitudin purus, quis malesuada odio sollicitudin id. Quisque volutpat fermentum velit interdum mattis. Pellentesque consectetur consequat ligula, gravida facilisis tellus cursus sit amet. Duis at metus vestibulum, varius eros et, hendrerit lectus. Suspendisse vitae tortor nisi. Sed sed maximus libero.";
    }
    else if (project == p4){
    document.getElementById("content").innerHTML = "Suspendisse velit nisi, blandit nec tellus sit amet, ornare sodales risus. Donec non lorem a justo tincidunt aliquet nec eu diam. Nullam gravida bibendum velit, nec auctor ex condimentum nec. Vivamus egestas ac massa vel hendrerit. Pellentesque id sagittis nibh, in consectetur massa. Morbi in turpis risus. Suspendisse quis convallis erat. Curabitur tincidunt lacus nulla, ac vehicula turpis convallis ac. Quisque dignissim convallis quam at imperdiet. Phasellus posuere eros risus, vitae aliquam dolor feugiat sit amet. Aenean convallis rutrum est, non sagittis est. Vestibulum molestie aliquam lectus sed gravida. Vivamus quis aliquet nulla. Nullam accumsan magna ex, nec aliquet lorem tristique quis. Nunc a eros dui. Fusce pharetra nibh et augue consequat, ac tristique neque vestibulum.";
    }
    else{
    document.getElementById("content").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo nunc velit, sit amet sagittis ex viverra nec. Cras tincidunt vitae metus non rhoncus. Vestibulum tempus, risus et vehicula elementum, nisi nulla egestas leo, id tincidunt turpis tortor non ipsum. Proin non porttitor nisi. Nam rhoncus pretium enim, id vehicula lacus dictum vel. Fusce eu mi a nunc lobortis tristique. Maecenas vel risus lorem. Donec vitae lectus pretium, tincidunt quam a, feugiat turpis. Mauris tempor viverra gravida. Vestibulum vel dolor porttitor, hendrerit ligula quis, ullamcorper augue. Morbi velit mi, pellentesque non leo id, pharetra lobortis leo. Fusce pharetra, arcu in maximus mattis, ante risus porta enim, id ullamcorper tellus metus quis neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.";   
    }
}

