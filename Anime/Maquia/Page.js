var elist = document.getElementById("eblist");
var ebtns = elist.getElementsByClassName("ebtn");
for (var i = 0; i < ebtns.length; i++)
{
    ebtns[i].addEventListener("click", function()
    {
        var current = document.getElementsByClassName("ebctv");
        current[0].className = current[0].className.replace(" ebctv", "");
        this.className += " ebctv";
    });
}

var slist = document.getElementById("sblist");
var sbtns = slist.getElementsByClassName("sbtn");
for (var i = 0; i < sbtns.length; i++)
{
    sbtns[i].addEventListener("click", function()
    {
        var current = document.getElementsByClassName("sbctv");
        current[0].className = current[0].className.replace(" sbctv", "");
        this.className += " sbctv";
    });
}

var vid = document.getElementById('vid');
var vsrc = document.createElement('source');

vid.appendChild(vsrc);
vsrc.setAttribute('src', '../__/Episodes/01.mp4');

function ep1()
{
    vsrc.setAttribute('src', '../__/Episodes/01.mp4');
    vid.load();
}

var aud = document.getElementById('aud');
var asrc = document.createElement('source');

aud.appendChild(asrc);
asrc.setAttribute('src', '../__/OST/OST.mp3');

function s1()
{
    asrc.setAttribute('src', '../__/OST/OST.mp3');
    aud.load();
}