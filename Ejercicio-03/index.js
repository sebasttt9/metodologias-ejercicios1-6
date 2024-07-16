'Use Strict';
function filterWords(phrase) {
   
    let words = phrase.split(' ');
  
    let filteredWords = words.filter(word => word.length > 3);
  
    return filteredWords;
  }
  
  let phrase = 'La programación web es vital y fundamental para el progreso humano';
  let longWords = filterWords(phrase);
  
 alert(longWords); 
  