var mod = (function() {
  var quotes = [
    {
      quote: "Sorry I annoyed you with my friendship.",
      person: " - Andy Bernard"
    },
    {
      quote: "Did I stutter?",
      person: " - Stanley Hudson"
    },
    {
      quote: "Dwight you ignorant slut.",
      person: " - Michael Scott"
    },
    {
      quote: "There's too many people on this earth. We need a new plague.",
      person: " - Dwight Schrute"
    },
    {
      quote:
        "Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.",
      person: " - Michael Scott"
    }
  ];

  var quote = document.getElementById("quote");
  var person = document.getElementById("person");
  var twitterBtn = document.getElementById("twitter");
  var button = document.getElementById("button");

  // var source = document.getElementByClassName("source");

  // invokes eventlistner
  button.addEventListener("click", runEvent);
  twitterBtn.addEventListener("click", tweet);

  function runEvent() {
    var { quote, person } = randomQuoteGenerator();

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("person").innerHTML = person;
    //   document.getElementById("person").innerHTML;
  }

  function tweet() {
    return twitterBtn.setAttribute(
      "href",
      `https://twitter.com/intent/tweet?text=${quote.innerHTML} ${
        person.innerHTML
      }`
    );
  }

  /**
   * This function returns a random qutote
   *
   * @param
   * @return Object - random quote
   *
   */
  function randomQuoteGenerator() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  return {
    runEvent: runEvent
  };
})();

// when page loads initially, display a quote
mod.runEvent();
