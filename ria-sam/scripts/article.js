'use strict';

let articles = [];

// COMMENT: What is the purpose of the following function? Why is its name capitalized? Explain the context of "this" within the function. What does "rawDataObj" represent?
// PUT YOUR RESPONSE HERE

function Article (rawDataObj) {
  // TODO: Use the JS object that is passed in to complete this constructor function:
  this.title =rawDataObj.title;
  this.category=rawDataObj.category;
  this.author=rawDataObj.author;
  this.authorUrl=rawDataObj.authorUrl;
  this.publishedOn = rawDataObj.publishedOn;
  this.body = rawDataObj.body;

  // Save ALL the properties of `rawDataObj` into `this`
}

// console.log(articles);

Article.prototype.toHtml = function() {
  // COMMENT: What is the benefit of cloning the article? (see the jQuery docs)
  // PUT YOUR RESPONSE HERE
  //There are three main benefits
  //a)  Manual entry is not needed, which saves time.
  // b)  Manual entry also has the potential to introduce errors.  Cloning mitigates this risk.
  // c) Using the cloning method eliminates cluttered code.  

  let $newArticle = $('article.template').clone();
  /* TODO: This cloned article still has a class of template. In our modules.css stylesheet, we should give all elements with a class of template a display of none so that our template does not display in the browser. But, we also need to make sure we're not accidentally hiding our cloned article. */
  $newArticle.removeClass('template');

  if (!this.publishedOn) $newArticle.addClass('draft');
  $newArticle.attr('data-category', this.category);
  // $newArticle.attr('div a', this.author);
  // $newArticle.attr('div a', this.authorUrl);
  $newArticle.attr('h1', this.title);
  // $newArticle.attr('.article-body', this.body);
  $newArticle.attr('data-publishedOn', this.publishedOn);
  
  // $(newArticle).find('.draft').append(newArticle.this);
  // $newArticle.find('.draft').append(newArticle.this);
  // console.log($newArticle);

  $newArticle.find('h1').html(this.title);
  $newArticle.find('a').html(this.author);
  $newArticle.find('a').attr('href', this.authorUrl);
  $newArticle.find('time').html(this.publishedOn);
  $newArticle.find('.article-body').html(this.body);


  
  /* TODO: Now use jQuery traversal and setter methods to fill in the rest of the current template clone with values of the properties of this particular Article instance.
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

// for(let i = 0; i < rawData.length; i++) {
//   articles.push(new Article(rawData[i]));
//  console.log('raw data', rawData[i]);
// }

// for(let i = 0; i < 5; i++) {
//   articles.push(new Article(rawData[i]));
//  console.log('raw data', rawData[i]);
// }

rawData.forEach(function(printThis) {
  articles.push(new Article(printThis));
  console.log('printThis + ', printThis);
});



// rawData.forEach(Article(rawDataObj) {
//   articles.push(new Article(rawData[i]));
//   console.log('raw data', rawData[i]);
// });

// for(let i = 0; i < articles.length; i++) {
//   $('#articles').append(articles[i].toHtml());
// }

// for(let i = 0; i < 5; i++) {
//   $('#articles').append(articles[i].toHtml());
// }

articles.forEach(function(printArt) {
  $('#articles').append(printArt.toHtml());
  });

// forEach(newArticle{
//   $('#articles').append(articles[i].toHtml());
// }