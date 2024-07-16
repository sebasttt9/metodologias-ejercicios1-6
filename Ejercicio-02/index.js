'Use Strict';

function countWords(phrase) {

    let words = phrase.split(' ');
  
    return words.length;
  }
  
  let phrase = 'La programación web es fundamental para el progreso';
  let numberOfWords = countWords(phrase);
  
  alert(numberOfWords); 
