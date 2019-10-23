import "./styles.css";

(function() {
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  let p = document.createElement('p');
  const words = document.querySelector('.words');
  words.appendChild(p);

  recognition.addEventListener('result', event => {
    const transcript = Array.from(event.results)
      .map(result => result[0])
      .map(result => result.transcript).join('');

    // Create a new container if you make a pause.
    if(event.results[0].isFinal) {
      p = document.createElement('p');
      words.appendChild(p);
    }
    p.textContent = transcript;
  });
  
  recognition.start();
  // Start recognition after each pause
  recognition.addEventListener('end', recognition.start);
}());