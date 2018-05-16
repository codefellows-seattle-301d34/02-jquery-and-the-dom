'use strict';

let articles = [];

console.log('test');

// COMMENT: What is the purpose of the following function? Why is its name capitalized? Explain the context of "this" within the function. What does "rawDataObj" represent?
// PUT YOUR RESPONSE HERE
//The purpose of the following function is to construct objects. It is capitalized because it is a constructor. "this" is referring to the instances of the constructor.
// The rawDataObj represents the object passed into the function by the rawData array.

function Article (rawDataObj) {
  // DONE: Use the JS object that is passed in to complete this constructor function:
  // Save ALL the properties of `rawDataObj` into `this`
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.author = rawDataObj.author;
  this.authorUrl = rawDataObj.authorUrl;
  this.publishedOn = rawDataObj.publishedOn;
  this.body = rawDataObj.body;
} 
Article.prototype.toHtml = function() {
  // COMMENT: What is the benefit of cloning the article? (see the jQuery docs)
  // Cloning the article lets us keep the information in a seperate JS page instead of cluttering up our main article.js with the entirety of each article

  let $newArticle = $('article.template').clone().removeClass('template');
  /* DONE: This cloned article still has a class of template. In our modules.css stylesheet, we should give all elements with a class of template a display of none so that our template does not display in the browser. But, we also need to make sure we're not accidentally hiding our cloned article. */

  if (!this.publishedOn) $newArticle.addClass('draft');
  $newArticle.append(this.title);
  $newArticle.append(this.category);
  $newArticle.append(this.author);
  $newArticle.append(this.authorUrl);
  $newArticle.append(this.body);
  $newArticle.append(this.publishedOn);
  console.log($newArticle)
  /* DONE: Now use jQuery traversal and setter methods to fill in the rest of the current template clone with values of the properties of this particular Article instance.
    We need to fill in:
      1. author name,
      2. author url,
      3. article title,
      4. article body, and
      5. publication date. */

  // REVIEW: Display the date as a relative number of 'days ago'
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newArticle.append('<hr>');
  return $newArticle;
};

rawData.sort(function(a,b) {
  // REVIEW: Take a look at this sort method; This may be the first time we've seen it. Look at the docs and think about how the dates would be sorted if the callback were not included in this method.
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

// TODO: Refactor these for loops using the .forEach() array method.


// rawData.forEach(function(elements){
//   articles.push(new Article(rawData[i]));
// })


for(let i = 0; i < rawData.length; i++) {
  articles.push(new Article(rawData[i]));
  console.log('xxxxx')
}


// articles.forEach(function(elements){
//   $('#articles').append(articles[i].toHtml());
// })



for(let i = 0; i < articles.length; i++) {
  $('#articles').append(articles[i].toHtml());
}