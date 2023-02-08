# News Summary Challenge

### Task

You'll test-drive a single page application in React that send requests to the Guardian API to get Headline and Article data and display them. 

### Serving your app

You'll use React's toolchain to take care of serving your HTML, CSS and JavaScript files.  

## User Stories

Some of these stories will need decomposing if they seem too large.

### Standard
```
As a busy politician
So I know what the big stories of the day are
I can see all of today's headlines in one place
```

```
As a busy politician
So that I have something nice to look at
I can see a relevant picture to illustrate each news article when I browse headlines
```

### Extended

```
As a busy politician
So that I can get an in depth understanding of a very important story
I can click a news headline to see a summary and a photo of the news article
```

```
As a busy politician
So I can get a few more details about an important story
I can see click a news article summary title which links to the original article
```

```
As a busy politician
Just in case my laptop breaks
I can read the site comfortably on my phone
```

<!-- ```
As a busy politician
To make my news reading more fun
I can see whizzy animations in the app
``` -->

### Headlines page

![Headlines page mockup](/images/news-summary-project-headlines-page-mockup.png)

## Component Hierarchy
For the headlines page my component hierarchy begins with the main app page.
This would contain all the other components. Following on, the components on the next level are the Header,
AllHeadLines and Footer. The last component would be the HeadLineCard inside the AllHeadLines component.

|Component | Colour |
| ---- | ---- |
|App | <span style="color:yellow">Yellow</span> |
| Header | <span style="color:pink">Pink</span> |
| AllHeadLines | <span style="color:#55aac0">Blue</span> |
| HeadLineCard | <span style="color:red">Red</span> |
| Footer | <span style="color:orange">Orange</span> |


## Tests
### Header
1. Snapshot test

### Footer
1. Snapshot test

### HeadLineCard
1. Testing if the component rendered has the same image source as the prop
2. Testing if the component rendered has the same headline text as the prop
3. Testing if the component only renders an image and header html element

### AllHeadLines
1. Testing if the number of news items rendered matches the number of news items in the mock data


## External Data

### Using the data directly after importing
```
I formed a static version by importing the data, assigning a variable to the specific part of the data I want to use and then pass that as props to the AllHeadLines component.
```
### Using the use state to set the data 
```
I transformed that initial static version from using the the variable assigned to the specific part of data I need to use to using the useState functionality to work in the same manner. Using this method means i have a setNews method but its not being used as the useState is directly setting the data.
```
### Using use state and use effect to set the data
```
I removed the direct setting of data by using use effect to set the news instead
```
### Article summary page

![Article page mockup](/images/news-summary-project-article-page-mockup.png)

## Component Hierarchy

|Component | Colour |
| ---- | ---- |
| App | <span style="color:yellow">Yellow</span> |
| Header | <span style="color:pink">Pink</span>
| Article | <span style="color:grey">Grey</span> |
| HeadLineCard | <span style="color:red">Red</span> |
| ArticleBody | <span style="color:purple">Purple</span>|
| Footer | <span style="color:orange">Orange</span>|
## Routes

### Using react-router-dom
```
I imported the BrowserRouter as Router,Routes and Route from the react-router-dom. This means it uses aliases so that if i were to change the BrowserRouter to something else, I wouldn't have to change it everywhere in the code and just in the import.
```
## Tests
### ArticleBody
```
I initialized the tests for the ArticleBody:
1. Testing that it renders the correct body of text for the prop passed in
2. Testing that it renders the correct HTML element in the component
```

### Article
Having ran through multiple types of tests, I was having the same issue with the tests for the main Article as I was with the app.test.js where it would not run. I attempted to mock the useParams and that also did not work. I had to resort to using a test that just checks if the rendered component is truthy for both the App.test.js and Article.test.js . I don't think this was a good test and looking back, a way that I could have checked got the header and footer components could possibly be by setting a time-out before each test to ensure that it was completely rendered and wasn't waiting for the data from the guardian API.


### API request rate limits and stubbing

The Guardian and Aylien text summarisation APIs are severely rate-limited.

**Please stub your tests so you don't exceed the daily limit.  Otherwise, all requests will be rejected and your app will stop working!**

### Guardian API example

**Please stub your tests to avoid exceeding the API rate limit**

If you wanted to get the content of an article from the Guardian API, this is the cURL request you might make.  Notice how it has a query parameter for `api-key`.

```sh
# Search endpoint
curl "https://content.guardianapis.com/search?q=coronavirus&show-fields=body&api-key=API_KEY"
```
```sh
# Single Item endpoint
curl "https://content.guardianapis.com/world/2021/mar/22/link-between-diabetes-and-coronavirus-infections?show-fields=body&api-key=API_KEY"
```

#### Example request data

[Mock Data](./mockNewsData.json) - contains a request to the Guardian API with fields selected that will help you with the challenge.  The actual request made was to:

https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=INSERT_YOUR_KEY_HERE

You will need to replace `INSERT_YOUR_KEY_HERE` with your own Guardian API key.  Use this data whilst developing, serving it from `json-server` - it will help on the request rate limit in the API.

<!-- ### Aylien text summarisation API example

**Please stub your tests to avoid exceeding the API rate limit**

If you wanted to use the Aylien API to summarise an article by Bret Victor, this is the cURL request you might make.  Notice how it has headers to authenticate with the Aylien API.

```
curl "https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html" \
  -H "X-AYLIEN-TextAPI-Application-ID: APPLICATION_ID" \
  -H "X-AYLIEN-TextAPI-Application-Key: SECRET_APPLICATION_KEY"
```
-->

## Resources

* [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)
<!-- * [Aylien text summary API docs](http://docs.aylien.com/docs/summarize) -->
* cURL [man page](https://curl.haxx.se/docs/manpage.html)
* [Hurl](https://www.hurl.it/), a web interface for sending HTTP requests

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `npm i` 

installs all the dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

