import { useState, useEffect } from "react";




function App() {
  const [quotes, setQuotes] = useState([]);
  const [currQuote, setCurrQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(res => (res.json()))
      .then((data) => {
        setQuotes(data)
        setCurrQuote(data[randNum(data)])
        console.log(data);
      })
  }, []);



  return (
    <div className="App">
      <h1>Quote Generator</h1>
      <section>
        <button onClick={setQuote}>New Quote</button>
        <p>
          “{currQuote?.text}”
        </p>
        - <i>{currQuote?.author}</i>
      </section>
    </div>
  );

  function setQuote() {
    setCurrQuote(randQuote(quotes));
  }
}

function randNum(quotes) {
  return Math.floor(Math.random() * quotes.length);
}
function randQuote(quotes) {
  return quotes[randNum(quotes)]
}

export default App;
