# pa-hacker-news
Replica of Hacker-News
An angular version 10 app which uses Bootstrap, jquery and ng2-charts to show the hacker news feed

# Functionalities
> Loads the live feed from using api https://hn.algolia.com/api/v1/
> Pagination loads the data per page
> On click on upvote, vote count increases and data gets stored in local storage 
> User can hide the feed he/she wants, hide information will be stored in local storage
> On Refresh, the changes still reflect
> Line chart introduced using ng2-charts and charts. js
> Charts rerender only on pagination and refresh

# Unit Testing
> Unit test cases added for news-feed & news-chart component
> 2 Angular services added for localStorage & httpService call respectively

# Performance
> Lighthouse check for Performance

# Deployment
> App is deployed on GitHubPages with URL https://priya-ahuja.github.io/pa-hacker-news/



