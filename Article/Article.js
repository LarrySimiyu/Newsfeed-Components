// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(article) { //constructor receives individual article 
    // assign this.domElement to the passed in domElement
    this.article = article; // create a reference to the article 
  
    // create a reference to the ".expandButton" class. 
    this.expandButton = article.querySelector('.expandButton'); // selecting individual button class

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand'; //setting text content to 'expand'
    // Set a click handler on the expandButton reference, calling the expandArticle method.

      //arrow function implicitly binds `this`
    this.expandButton.addEventListener('click', () => this.expandArticle()); // listening for click-event to invoke call back function 

      //explicit binding `this`
    //this.expandButton.addEventListener('click', this.expandArticle.bind(this));

  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.article.classList.toggle('article-open');
    
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.article'); // selecting all articles
articles.forEach( article => new Article (article)); // looping through each article, and  instantiating each article and passing the individual article to the constructor 
