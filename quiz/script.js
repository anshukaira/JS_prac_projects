var question = [{
    ques : "What is the name of Water Hashira?",
    choice : ["giyu", "tanjiro", "zenitsu", "haru"],
    correct : 1
}, {
    ques : "what is the name of fullmetal alchemist",
    choice : ["edward elric", "alphonse elric", "ida elric", "winry elric"],
    correct : 3 
}, {
    ques : "What is the name of devil school in 'welcome to the demon shool iruma kin'?",
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