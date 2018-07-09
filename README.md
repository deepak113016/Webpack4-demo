# Webpack4-demo
## Why WebPack ?
### Demo Description

We need to create a html page page. In the html page we will have a button and a paragraph.
When we will click on Button "Show the Fact". It will show some fact below the button and
button will change into "Hide the Fact". When we will click on "Hide the Fact" fact should
be invisible and button should be change into "Show the Fact".

#### Before Clicking the button

<img width="386" alt="before clicking the button" src="https://user-images.githubusercontent.com/27186815/42442693-fb056efe-8388-11e8-8176-338512554f07.PNG">

#### After Clicking the botton

<img width="387" alt="after clicking the button" src="https://user-images.githubusercontent.com/27186815/42442686-f1a3a6b4-8388-11e8-8b95-39134116612f.PNG">

Please Check Code of why-webpack folder

  <img width="176" alt="folderstructur" src="https://user-images.githubusercontent.com/27186815/42441053-f5b82c74-8384-11e8-8020-a827e0e5cd39.png">
  
Loading html element as object in  dom-loader.js file and using thease object in app.js file
  
   <img width="382" alt="dom-loader" src="https://user-images.githubusercontent.com/27186815/42441519-03c59b66-8386-11e8-9f2e-e2c58fd52fb6.PNG">
   
   <img width="365" alt="app" src="https://user-images.githubusercontent.com/27186815/42443372-f1772704-838a-11e8-8cb9-e7d23bbad7ed.PNG">

Look at SCRIPT tage of index.html first we have included dom-loader.js and then app.js 

<img width="438" alt="index" src="https://user-images.githubusercontent.com/27186815/42443934-72d603e6-838c-11e8-8736-f6bd08414cda.png">

But, If you incluede app.js first and dom-loader later. then you will get error
 
 <img width="384" alt="error" src="https://user-images.githubusercontent.com/27186815/42444389-95b012a2-838d-11e8-92a3-106cb80e1cd6.PNG">
 
Exactly what is happening when we are including "app.js" first and then dom-loader. Here, we are trying to use object of dom-loader in app.js that is not available because when app.js is running dom-loader.js is not included. This error is coming because we are trying to use object that is not available.

##### Conclusion of the story is when we are writing web application then precedence of script file is very important and we have to take care of that. If our project is very complex then it is troublesome work to do.

Here comes the role of package bundler. So, Webpack is one of the package bundler that is very populer.
### What WebPack does?
webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.
for more details please visit this link https://webpack.js.org/concepts

