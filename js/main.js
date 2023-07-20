var quotesArray = [
    "“Be yourself; everyone else is already taken.”",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "“You only live once, but if you do it right, once is enough.”",
    "“To live is the rarest thing in the world. Most people exist, that is all.”",
    "“Without music, life would be a mistake.”",
    '"Your love makes me strong, your hate makes me unstoppable"',
    "“It is better to be hated for what you are than to be loved for what you are not.”",
    "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”"
]

var authorArr =[
    "--Oscar Wilde--",
    "--Albert Einstein--",
    "--Marcus Tullius Cicero--",
    "--William W. Purkey--",
    "--Dr. Seuss--",
    "--J.K. Rowling--",
    "--Albert Camus--",
    "--Elbert Hubbard--"
]

function newQuotes() {
     var randomNumber =  Math.trunc(Math.random() * quotesArray.length) 
    document.getElementById('displayQuote').innerHTML = quotesArray[randomNumber]

    console.log(randomNumber)
}

function author(){
    var randomNumber2 = Math.trunc(Math.random() * authorArr.length) 
    document.getElementById('displayAuthor').innerHTML = authorArr[randomNumber2]

    console.log(randomNumber2)
}
