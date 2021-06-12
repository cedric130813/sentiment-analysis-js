// https://github.com/thisandagain/sentiment

var Sentiment_analysis = require('sentiment');

var sentiment_negative = new Sentiment_analysis();
var result_negative = sentiment_negative.analyze('Cats are stupid.');
console.dir(result_negative);

var sentiment_positive = new Sentiment_analysis();
var result_positive = sentiment_positive.analyze('Cats are extremely intelligent animals.');
console.dir(result_positive)