

//var HTMLheaderRole = '<span>%data%</span><hr>';
var HTMLQuote = '<h4 id ="gen-quote">%data%</h4>';
var quotes = [
	'“The aim of literature ... is the creation of a strange object covered with fur which breaks your heart.”',
	'“Write about what you\'re afraid of.” ',
	'“See the moon? It hates us.” ',
	'“Well chaps first I\'d like to say a few vile things more or less at random, not only because it is expected of me but also because I enjoy it.”',
	'“Goals incapable of attainment have driven many a man to despair, but despair is easier to get to than that -- one need merely look out of the window, for example.”',

]
console.log (quotes[2]);


currentQuote = document.getElementById("gen-quote");
console.log(currentQuote);

var quoteGen = function(){
	var randomNum = Math.floor(Math.random() * (5 - 0) ) ;
	quote = quotes[randomNum]
	console.log (randomNum);
	var formattedquote = HTMLQuote.replace("%data%", quote);
	console.log (formattedquote);
	$("#gen-quote").replaceWith(formattedquote);

}


document.getElementById("clickMe").onclick = quoteGen;
conosle.log(document.getElementById("clickMe"));

