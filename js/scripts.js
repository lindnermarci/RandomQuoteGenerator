//creating the array of quotes with their properties
var quotes = [
    {quote: "Love means never having to say you're sorry.", source: "Ryan O’Neal",citation:"Love Story(movie)", year: 1970, tags:["romantic"]},
    {quote: "They may take our lives, but they'll never take our freedom!", source: "Mel Gibson", citation: "Braveheart(movie)", year: 1995, tags:["war", "manliness"]},
    {quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", source: "Einstein", year: 1958, tags:["humor","science"]},
    {quote: "A room without books is like a body without a soul.", source: "Marcus Tullius Cicero", year: 1876, tags:["literature", "recreation"]},
    {quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", source: "Dr. Seuss", year: 1984, tags: ["romantic", "humor"]},
    {quote: "They call me Mister Tibbs!", source: "Poitier",citation:"In the Heat of the Night(movie)", year: 1967, tags: ["crime"]},
    {quote: "You make me want to be a better man.", source: "Jack Nicholson",citation:"As Good as It Gets(movie)", year: 1997, tags: ["movie"]},
];

/*function responsible for getting a random quote from the quotes array
params: quotes array
returns: a quote object
*/
function getRandomQuote(quotes){
    var rand = Math.floor(Math.random() * quotes.length);
    return quotes[rand];
}

/*function for printing the randomly chosen quote to the page
accomplishes it by: 
1., calling getRandomQuote function
2., creating variable for the html structure we want to display
3., builds up html structure(using if statements)
4., gets the siv element with id "quote-box", and modifies its innerHtml to the created string
params:-
returns:-
*/
function printQuote(){
    var quote = getRandomQuote(quotes);
    var html = "";
    html += '<p class="quote">' + quote.quote + '</p>';
    html += '<p class"source">' + quote.source;
    if(quote.citation){
        html += '<span class="citation">' + quote.citation + '</span>'
    }
    if(quote.year){
        html += '<span class="year">' + quote.year + '</span>';
    }
    if(quote.tags){
        for(var i = 0; i < quote.tags.length; i++){
            html += '<span class="tags">';
            html += quote.tags[i];
            html += '</span>';
        }
    }
    html += '</p>';
    document.getElementById("quote-box").innerHTML = html;
    setRandomColor();
}

function getRandomColor(){
    var color = Math.floor(Math.random() * 256);
    return color;
}

function setRandomColor(){
    var red = getRandomColor();
    var green = getRandomColor();
    var blue = getRandomColor();
    document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

setInterval(printQuote, 10000);

/*
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function.
*/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);