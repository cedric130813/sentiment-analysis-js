// https://github.com/thisandagain/sentiment

var Sentiment_analysis = require('sentiment');

var sentiment_negative = new Sentiment_analysis();
var result_negative = sentiment_negative.analyze('Cats are stupid.');
console.dir(result_negative);

// Example of negative result
// {
//   score: -2,
//   comparative: -0.6666666666666666,
//   calculation: [ { stupid: -2 } ],
//   tokens: [ 'cats', 'are', 'stupid' ],
//   words: [ 'stupid' ],
//   positive: [],
//   negative: [ 'stupid' ]
// }

var sentiment_positive = new Sentiment_analysis();
var result_positive = sentiment_positive.analyze('Cats are extremely intelligent animals.');
console.dir(result_positive)

// Example of positive result
// {
//   score: 2,
//   comparative: 0.4,
//   calculation: [ { intelligent: 2 } ],
//   tokens: [ 'cats', 'are', 'extremely', 'intelligent', 'animals' ],
//   words: [ 'intelligent' ],
//   positive: [ 'intelligent' ],
//   negative: []
// }
