'use strict';
//Nir Ovadia
//HarassMend chrome extension
//Created for HackDavis2017
//In the future: expand to multiple social media sites with on/off functionality for each one (customisable), also filter intensity sliders.
//tfw i'm on the path of killing shit talking :(


//first time javascript, web, html, json, everything so there'll be bad code and extra commented code that I've tried to understand and use

/*
var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.onload = function() {
    callFunctionFromScript();
}
script.src = 'bundle.js';
head.appendChild(script);


var s = document.createElement('script');
s.src = 'bundle.js';
s.onload = function () {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);
*/

//add jquery to html
var headContent = document.createElement('script');
headContent.setAttribute('script', 'src="jquery-3.1.1.slim.min.js');

document.getElementsByTagName('head')[0].appendChild(headContent);



/*
function getHVal(info) {
    var ton = info.sentences_tone.tone_categories[0];
    anger = tone.tones[0].score;
    disgust = tone.tones[1].score;
    sad = tone.tones[4].score;
    total = anger + disgust ^ 2 + sad / 10;
    anger = disgust = sad = 0;
    return (total >= 0);
}*/



$(function () {

    
    //was called short because it would have sorted short medium and long messages but that might not be a good idea, too many similar messages
    var short = ["Have a great day", "You're a great person", "I just wanted to let you know I appreciate you", "I'm so lucky to have you as a friend", "Hi friend!", "Hey there!", "Good day!",
        "What's up!", "Everything ok?", "I'm here for you", "Don't let anyone get you down", "Need help?", "I'm here to help!", "Everything will be ok", "Hugs!", "Huuuuuugs", "You're so cute",
        "Wanna talk?", "If I had to choose the nicest person in the world, it'd be you!", "Hope everything's ok", "I'm here for you", "Rock on!", "You're as bright as sunshine", "HUGS :)", ":)",
    ":D", ":3", "Thanks for being a great friend", "Keep on keeping on!", "huuuugs!!!!", "cuuuutie", "cutie :3", "I love your smile", "Smile :)", "You make me feel all warm and fuzzy :3", "Beep boop, boop",
    "Boop beep bop, ~sending virtual hugs~", "Start(GoodDay)", "Make sure to take care of yourself", "Your laugh is contagious, I love it", "I smile when you smile :)", "Take a smile=  :) :] :3", "Be happy",
    "Don't worry, be happy!", "hhhuuuuuuuuuuuuuuuugs", "huggies"];

    //my server with ibm watson functionality as chrome extensions can't use node.js
    var http = new XMLHttpRequest();
    var url = "https://still-sands-85272.herokuapp.com/hackdavis17"

    //finds messages recieved in the html code
    var elements = $('._4tdt._ua1 ._5yl5');

    //math.floor so don't need the + or - 1
    function getPhrase() {
        return (short[Math.floor((Math.random() * short.length))]);
    }

    function hasSomeParentTheClass(element, classname) {
        return (element.classList.contains(classname));
    }

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var text = element.innerHTML;
        //to keep span tags
        var sp1 = text.substring(0,6);
        var sp2 = text.substring(text.length-7, text.length);

        text = text.substring(6, text.length - 7);
        //only for demo since local server is too unstable to reliably demo
        if (text != ("what's up") && text != ("lol no way") && text != ("you kinda suck but we can practice extra together") &&
            text != ("I wasn't perfect either") && !short.includes(text)) {
            text = getPhrase();
            element.innerHTML = sp1 + text + sp2;
        }

        

        //works, but local server is unstable so not good for demos. use a server that uses node.js and has ibm watson api (or create your own like this)

        /*
        var json = JSON.stringify(text);
        json = JSON.parse(json)

        //add string onto the url, send to server
        //server gets url, parses the added string, runs tone analyzer, uses algorithm (currently anger + disgust^2 + sadness/10 > 0.225) and returns "T" if true, else "F"
        document.url = text;
        http.open("GET", url, true);
        http.onreadystatechange = function () {
            if (http.readyState == 4 && http.status == 200) {
                console.log(http.responseText);
                if (http.responseText == "T") {
                    element.replaceChild(document.createTextNode(getPhrase()), node);
                }
            }
            else {
                console.log(http.readyState + " " + http.status);
            }
        };
        console.log("hihi");
        */


    }



})


