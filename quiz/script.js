var question = [{
    ques : "Ok! Here's an easy one to start off with. What do you have to do with Pokemon?",
    choice : ["Fetch 'em all!", "Catch 'em all!", "Match 'em all!", "Train 'em all!"],
    correct : 2
}, {
    ques : "What is the name of Water Hashira? (kakoiii ne)",
    choice : ["Giyu", "Tanjiro", "Zenitsu", "Shinobu"],
    correct : 1
}, {
    ques : "what is the name of fullmetal alchemist, yeah that chibi!",
    choice : ["Edward elric", "Alphonse elric", "Harry elric", "Winry elric"],
    correct : 3 
}, {
    ques : "What is the name of devil school in 'welcome to the demon shool iruma kun'?",
    choice : ["Babylus", "Mha", "Demon-aca", "A high school"],
    correct : 1
}, {
    ques : "When is Bakugo's birthday??",
    choice : ["july 20", "april 20", "may 20", "august 20"],
    correct : 2
}, {
    ques : " who is the Pokemon Anime’s main character?",
    choice : ["Misty", "Ash", "Brock", "Jojo"],
    correct : 2
}, {
    ques : "How do you do a Naruto run?",
    choice : ["Put your head fwd nd arms back", "Put ur left foot in, ur left foot out", "Just turn around", "Jump four times nd run"],
    correct : 1
}, {
    ques : "what is the name of fullmetal alchemist",
    choice : ["edward elric", "alphonse elric", "ida elric", "winry elric"],
    correct : 3 
}, {
    ques : "What is the name of devil school in 'welcome to the demon shool iruma kun'?",
    choice : ["babylus", "mha", "demon-aca", "as high school"],
    correct : 1
}, {
    ques : "",
    choice : ["babylus", "mha", "demon-aca", "jij"],
    correct : 1
}, {
    ques : "What is the name of akuma gakou?",
    choice : ["babylus", "mha", "demon-aca", "jij"],
    correct : 1
}, {
    ques : "What is the name of akuma gakou?",
    choice : ["babylus", "mha", "demon-aca", "jij"],
    correct : 1
}, {
    ques : "What is the name of akuma gakou?",
    choice : ["babylus", "mha", "demon-aca", "jij"],
    correct : 1
}, {
    ques : "What is the name of akuma gakou?",
    choice : ["babylus", "mha", "demon-aca", "jij"],
    correct : 1
}, {
    ques : "Whats sur name of luffy?",
    choice : ["donkey", "lion", "doggy", "monkey"],
    correct : 4
}, {
    ques : "How many dragons are there in yona of the dawn",
    choice : ["6", "5", "4", "3"],
    correct : 3
}];

var curr = 0;
var res = 0;
var quizover = false;

$(document).ready(function(){

    discurr();

    $(this).find(".quizmessage").hide();
    $(this).find(".result").hide();
    $(this).find(".nextbutton").on("click", function()
    {
        if(!quizover)
        {
            value = $("input[type = 'radio']:checked").val();
           
            console.log(value);
            console.log("yohuuu");
            if(value == undefined)
            {
                $(document).find(".quizmessage").text("Please select an answer");
                $(document).find(".quizmessage").show();
            }
            else
            {
                value++;
                $(document).find(".quizmessage").hide();
                if(value == question[curr].correct){
                    res++;
                }
                curr++;
                if(curr < question.length){
                    discurr();
                }else{
                    sresult();
                    $(document).find(".nextbutton").text("Play again");
                    quizover = true;
                }
            }
        }else
        {
            quizover = false;
            $(document).find(".nextbutton").text("Next Question");
            resetquiz();
            discurr();
            hidescore();
        }
    });
});

function discurr(){
    console.log("display curr question");

    var ques = question[curr].ques;

 //   console.log(ques);

    var qclass = $(document).find(".quizcontainer > .question");
    var choicelist = $(document).find(".quizcontainer > .choicelist"); 
    var numchoices = question[curr].choice.length;

  //  console.log(numchoices);

    $(qclass).text(ques);
    $(choicelist).find("li").remove();

    var ch = question[curr].choice;
    for(var i = 0; i<numchoices; i++)
    {
        $('<li><input type = "radio" value=' + i + ' name = "dynradio" />' + ch[i] + '</li>').appendTo(choicelist);
    }
}

function resetquiz(){
    curr = 0;
    res = 0;
    hidescore();
}

function sresult(){
    $(document).find(".quizcontainer > .result").text("you scored : " + res + " out of " + question.length);
    $(document).find(".quizcontainer > .result").show();
}

function hidescore(){
    $(document).find(".result").hide();
}
