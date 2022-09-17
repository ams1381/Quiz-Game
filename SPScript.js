var Title = $(".Title h1");
var SubTitle = $(".Title p");
var Fieldscontainer = $(".Fields");
var StartButton = $(".StartBut");
var QuestionBox = $(".QuestionContainer");
var Questiontext = $(".Question h4")
var QuetionNumber = $(".QNum");
var Option = $(".Option");
var Time = $(".TimeBar");
var NextQuestionButton = $(".NextQuetion");
var QuestionIndex = 0;
var TestField;
var QuestionData;
var Score;

let MathQuestions = [{
        Question : "The square root of 0.0081 is ………",
	    Options : [0.09 , 0.9 , 0.009 , 0.91],
		OptionC : 0.09 
},
{
	    Question : "What is the sum of 5x^3 – 3x^2 - 1 and 3x^2 + 1?",
	    Options : [ "6x^2" ,"5x^3", "5x" ,"3x^2"],
	    OptionC : "5x^3" ,
},
{
	    Question : "What is the value of X makes the equation below true? (x+3)/2 = 8",
	    Options : [ "1" ,"5", "13" ,"19"],
	    OptionC : "13"
},
{
	    Question : "If tom Can cut a log to 3 pieces in 6 minutes then how long will it take to cut similar log into 12 pieces?",
	    Options : [ "30" ,"28", "20" ,"24"],
	    OptionC : "24"
},
{
	    Question : "3 + 3 * 3 - 3 + 3/3",
	    Options : [ "6" ,"10", "13" ,"17"],
	    OptionC : "10"
},
{
	Question : "If a Man has three Sons and each son has a Sister , how many children Does The Man have?",
	Options : [ "4" ,"5", "13" ,"6"],
	OptionC : "4"
} 
]

let ScienceQuetions = [{
	   Question : ".... is when an animal becomes inactive in winter",
	   Options : ["Eating" , "Extinction" , "Hibernation" , "Consumption"],
	   OptionC : "Hibernation" 
},
{
	   Question : "Which organ purify our blood?",
	   Options : ["Heart" , "Brain" , "Kidney" , "Liver"],
	   OptionC : "Kidney"
},
{
       Question : "Plants Are Also Called ",
	   Options : ["Consumer" , "Producer" , "Herbivores" , "Decomposers"],
	   OptionC : "Producer"
},
{
	   Question : "Which Planet is called 'The Red Planet'?",
	   Options : ["Mars" , "Jupiter" , "Mercury" , "Earth"],
	   OptionC : "Mars"
},
{
	   Question : "Ballons Are filled with .....?",
	   Options : ["Nitrogen" , "Oxygen" , "Helium" , "Argon"],
	   OptionC : "Helium"
},
{
	   Question : "Which Metal Pollute the Air of a big city?",
	   Options : ["Copper" , "Chromium" , "Lead" , "Cardium"],
	   OptionC : "Lead"
}
]

let GameQuestions = [{
	Question : "Which one of the below Character is not in the Grand Theif Auto V?",
	Options : ["Trevor Philips" , "Michael De Santa" , "Franklin Clinton" , "Nathan Drake"],
	OptionC : "Nathan Drake"
},
{
	Question : "Which Company published the Game 'Black'?",
	Options : ["Ubisoft" , "EA" , "RockStar" , "Konami"],
	OptionC : "EA"
},
{
	Question : "Which Map isnt in the Game RainBow Six Siege?",
	Options : ["BioHazzard" , "Coastline" , "Presidential Plane" , "Club House"],
	OptionC : "BioHazzard"
},
{
	Question : "The Game 'Tekken' was Published By .... ",
	Options : ["Namco" , "Epic Games" , "Presidential Plane" , "Blizzard"],
	OptionC : "Namco"
},
{
	Question : "What is CJ'S  Brother Name in GTA San Andreas? ",
	Options : ["Ryder" , "Big Smoke" , "Sweet" , "Tenpenny"],
	OptionC : "Sweet"
},
{
	Question : "Which Genre is Motral Combat? ",
	Options : ["FreeWorld" , "Strategy" , "Shooter" , "Action/Fighting"],
	OptionC : "Action/Fighting"
}
]

let EnglishQuestions = [{
	Question : "Good evening! I'm peter Sterveson and I'm looking for a Job, ..... To Mrs Johanson?",
	Options : ["May I Speak" , "Can I Speaking To" , "Can I Speak to?" , "May I Speaking"],
	OptionC : "May I Speak"
},
{
	Question : "Chips And Hamburgers are realy .... for your shape. You ..... stop eating them.",
	Options : ["badly - must" , "bad - my" , "badly - can" , "bad - should"],
	OptionC : "bad - should"
},
{
	Question : "The garden is .... the spiring , when all flowers come out.",
	Options : ["wonderfully in" , "wonderfully at" , "wonderfull in" , "wonderfull at"],
	OptionC : "wonderfull in"
},
{
	Question : "Perhaps the three most .... ice cream flavors are vanillia , choclate , and strawberry.",
	Options : ["forein" , "traditional" , "popular" , "domestic"],
	OptionC : "popular"
},
{
	Question : "The boys on the team have a lot of ..... for their coach because he listens to what they say , and always encourages them.",
	Options : ["attract" , "respect" , "protect" , "complete"],
	OptionC : "respect"
},
{
	Question : "It was totaly unacceptable .... towards people who had given long and good services.",
	Options : ["behavior" , "choice" , "obligation" , "culture"],
	OptionC : "behavior"
}
]

let TechnologyQuestions = [
{
	Question : "Who founded Apple Computer?",
	Options : ["Stephen Fry" , "Bill Gates" , "Steve Jobs" , "Stephen Hawking"],
	OptionC : "Steve Jobs"
}
	,{
	Question : "How many computer languages are in use?",
	Options : ["2000" , "5000" , "20" , "50"],
	OptionC : "2000"
},
{
	Question : "Which of these is not a peripheral, in computer terms?",
	Options : ["Mouse" , "Motherboard" , "Keyboard" , "Monitor"],
	OptionC : "Motherboard"
},
{
	Question : "What does the Internet prefix WWW stand for?",
	Options : ["Wide Width Wickets" , "Worldwide Weather" , "World Wide Web" , "Western Washington World"],
	OptionC : "World Wide Web"
},
{
	Question : "Which of these products is not made by the Apple Corporation?",
	Options : ["Imax" , "Imac" , "Ipod" , "Iphone"],
	OptionC : "Imax"
},
{
	Question : "What is the name for a computer pointing device?",
	Options : ["Sound Card" , "Mouse" , "Ram" , "Monitor"],
	OptionC : "Mouse"
}
]

let SportQuestions = [{
	Question : "What sport is described as “the beautiful game”?",
	Options : ["Football" , "Basketball" , "Ping Pong" , "Volleyball"],
	OptionC : "Football"
},
{
	Question : "Which country won the first ever football world cup?",
	Options : ["Argentina" , "Uruguay" , "Brazil" , "USA"],
	OptionC : "Uruguay"
},
{
	Question : "How long is the total distance of a marathon?",
	Options : ["42 Km" , "46 km" , "35Km" , "38Km"],
	OptionC : "42 Km"
},
{
	Question : "How many gold medals has Usain Bolt won?",
	Options : ["9" , "10" , "8" , "6"],
	OptionC : "8"
},
{
	Question : "Which country won the first ever rugby world cup?",
	Options : ["Norway" , "France" , "New Zealand" , "Brazil"],
	OptionC : "New Zealand"
},
{
	Question : "What is the maximum break you can score in snooker?",
	Options : ["140" , "147" , "150" , "155"],
	OptionC : "147"
}
]
// $(".Field").each((a,v) => {console.log(v)})
$(".Field").each((index,Item) => {
	Item.onmouseleave = (e) => {
	  e.target.style.background = "#0075AC";
	  e.target.style.borderImage = null;
	};
  
	Item.addEventListener("mousemove", (e) => {
	  const rect = e.target.getBoundingClientRect();
	  const x = e.clientX - rect.left; //x position within the element.
	  const y = e.clientY - rect.top; //y position within the element.
	  e.target.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(255,255,255,0.4),rgba(255,255,255,0.01) )`;
	  e.target.style.border = `radial-gradient(20% 75% at ${x}px ${y}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 1 / 1px / 0px stretch `;
	});
	
	$(".Title ion-icon").on("click",BackToMain)
     Item.addEventListener("click",() => {
		 
		initializer(Item);

		StartButton.on("click",() =>{
			StartTest(Item);
		})
			})
	 })

	 NextQuestionButton.on("click",() => {
		QuestionIndex++;
		StartTest();

		NextQuestionButton.hide(200);
		})

function initializer(Item)
	{
		Score = 0;
		QuestionIndex = 0;

		Time.val(0);

		 $(".Fields").fadeOut(400);
		
		  Title.text(Item.children[1].textContent);

		  SubTitle.text("Click On Start Button When you're ready!");

		  $(".Title ion-icon").show(250)

		  $(".Fields").fadeOut(400);
		
		  Title.text(Item.children[1].textContent);

		  SubTitle.text("Click On Start Button When you're ready!");

		  $(".Title ion-icon").show(250)
		  StartButton.show(250);

		  switch(Item.children[1].textContent)
		  {
			  case "Math":
				  TestField = "Math";
				  QuestionData = MathQuestions;
				  break;
			  case "Science":
				  TestField = "Science";
				  QuestionData = ScienceQuetions;
				  break;
			  case "Game":
				  TestField = "Game";
				  QuestionData = GameQuestions;
				  break;
			  case "English":
				  TestField = "English";
				  QuestionData = EnglishQuestions;
				  break;
			  case "Sport":
				  TestField = "Sport";
				  QuestionData = SportQuestions;
				  break;
			  case "Technology":
				  TestField = "Technology";
				  QuestionData = TechnologyQuestions;
				  break;
		  }
   }
   function BackToMain()
   {
	Time.val(0);

	$(".Title ion-icon").hide(250)

	SubTitle.text("Choose one of the below fields");

	Title.text("Quiz Game");

	Fieldscontainer.show(500);

	StartButton.hide(250);

	QuestionBox.hide(250);

	QuetionNumber.hide(200);
   }
  function StartTest(Item)
  {
	
	let i = 0;
	SubTitle.text("Choose the correct anwser , you got 10 seconds");

	// QuestionBox.css("display","grid");
	QuestionBox.show(250);
	
	QuetionNumber.text(`${QuestionIndex + 1}/6`);
	QuetionNumber.show(200);

	Time.val(0);
	Time.show(200)
	let TimeUpdater = setInterval(()=> {
		Time.val(i)
		i+=9;

		if(Time.val() > 70)
		{
			Time.addClass("Warr");
			SubTitle.text("Hurry! , Running Outta Time")
		}
		if(Time.val() == 100)
		{
			clearInterval(TimeUpdater);
			SubTitle.text("Time Up!")
			Time.hide(200);
			if(QuestionIndex == 5)
			   NextQuestionButton.hide(200);
		    
		    else
			   NextQuestionButton.show(200)
			Option.each((index,item) => {
				if(item.textContent == QuestionData[QuestionIndex].OptionC)
					$(item).css("background","green");
			})
		}
		
	},1000)

	StartButton.hide(250);

	Option.each((index,item) => {
		$(item).removeAttr("style");
		switch(TestField)
		  {
			  case "Math":
				  $(item).text(MathQuestions[QuestionIndex].Options[index]);
			      Questiontext.text(MathQuestions[QuestionIndex].Question);
				  break;
			  case "Science":
				  $(item).text(ScienceQuetions[QuestionIndex].Options[index]);
				  Questiontext.text(ScienceQuetions[QuestionIndex].Question);
				  break;
			  case "Game":
				  $(item).text(GameQuestions[QuestionIndex].Options[index]);
				  Questiontext.text(GameQuestions[QuestionIndex].Question)
				  break;
			  case "English":
				  $(item).text(EnglishQuestions[QuestionIndex].Options[index]);
				  Questiontext.text(EnglishQuestions[QuestionIndex].Question)
				  break;
			  case "Sport":
				 $(item).text(SportQuestions[QuestionIndex].Options[index]);
				 Questiontext.text(SportQuestions[QuestionIndex].Question)
				  break;
			  case "Technology":
			      $(item).text(TechnologyQuestions[QuestionIndex].Options[index]);
				  Questiontext.text(TechnologyQuestions[QuestionIndex].Question)
				  break; 
		  }

	//   item.addEventListener("click",() => {
       $(item).on("click",()=> {
		clearInterval(TimeUpdater);
		
		Time.hide(200);
		if(item.textContent == QuestionData[QuestionIndex].OptionC)
		{
			$(item).css("background","green");
			SubTitle.text("Well Done! =)")
			
			// Score++;
            
			Option.each((index,item) => {
				if(item.textContent == QuestionData[QuestionIndex].OptionC)
					$(item).css("background","green");
			})
		}
		else
		{
			$(item).css("background","red");
			SubTitle.text("Oops , Wrong! ):")
		}
		
		Option.each((index,item) => {
			$(item).css("pointer-events","none");
		});

		if(QuestionIndex == 5)
		{
			NextQuestionButton.hide(200);     
		}
			   
		else
		    NextQuestionButton.show(200);
			
	})}
	)}
