'use strict';
let articles = [];
// COMMENT: What is the purpose of the following function? Why is its name capitalized? Explain the context of "this" within the function. What does "rawDataObj" represent?
// The purpose of 'this' targets the HTML tags of article in index. As for the name being capitalized, we are using a constructor function thus the function needs to be capitalized, hence Article. The rawDataObj uses the sorted data from rawData on line 43.
function Article(rawDataObj) {
  // DONE: Use the JS object that is passed in to complete this constructor function:
  // Save ALL the properties of `rawDataObj` into `this`
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.author = rawDataObj.author;
  this.authorUrl = rawDataObj.authorUrl;
  this.publishedOn = rawDataObj.publishedOn;
  this.body = rawDataObj.body;
}
Article.prototype.toHtml = function () {
  // COMMENT: What is the benefit of cloning the article? (see the jQuery docs)
  // Cloning the article gets the matched elements that reside within article as well as the text nodes.
  let $newArticle = $('article.template').clone().removeClass('template');

  /* DONE: This cloned article still has a class of template. In our modules.css stylesheet, we should give all elements with a class of template a display of none so that our template does not display in the browser. But, we also need to make sure we're not accidentally hiding our cloned article. */

  if (!this.publishedOn) $newArticle.addClass('draft');
  $newArticle.attr('data-category', this.category);

  // TODO: Now use jQuery traversal and setter methods to fill in the rest of the current template clone with values of the properties of this particular Article instance.
  //   We need to fill in:
  $newArticle.text(this.author);
  $newArticle.text(this.authorUrl);
  $newArticle.text(this.title);
  $newArticle.text(this.body);
  $newArticle.text(this.publishedOn);
  // REVIEW: Display the date as a relative number of 'days ago'
  $newArticle.find('time').html(`publish time  ${parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000)}   days ago`);
  $newArticle.find('address').html(`Author Name ${parseInt((new Date() - new Date(this.author)) / 60 / 60 / 24 / 1000)}   days ago`);

  $newArticle.find('body').html(` ${parseInt((new Date() - new Date(this.body)) / 60 / 60 / 24 / 1000)}   days ago`);
  
  $newArticle.find('h1').html(`Title ${parseInt((new Date() - new Date(this.title)) / 60 / 60 / 24 / 1000)}   days ago`);

  $newArticle.find('a').html(`"" ${parseInt((new Date() - new Date(this.authorUrl)) / 60 / 60 / 24 / 1000)}   days ago`);


  $newArticle.append('<hr>');
  return $newArticle;
};


rawData.sort(function (a, b) {
  // REVIEW: Take a look at this sort method; This may be the first time we've seen it. Look at the docs and think about how the dates would be sorted if the callback were not included in this method.
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});
// DONE: Refactor these for loops using the .forEach() array method.

// $.forEach(rawData, function (articles) {
//   console.log(articles)
// });
rawData.forEach(function (notes) {
  articles.push(new Article(notes));
});

articles.forEach(function (objectList) {
  $('#articles').append(objectList.toHtml());
});

