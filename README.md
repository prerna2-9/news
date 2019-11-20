# news

#### This is just a news website which fetch news of india and display the top headlines of the day.


#### The news on this website  is provided by the third party api from https://newsapi.org

#### The news displayed by this websites are

+ Headlines
+ Sports
+ Tech
+ Health
+ Topic you search in the search bar

The Api endpoints which are used in this project are

```
https://newsapi.org/v2/top-headlines

to fetch the top haedlines
```

```
https://newsapi.org/v2/everything?q={data}

to fetch anything related to search query
```

```
https://newsapi.org/v2/top-headlines&country={country}&category={category}

to fetch the category wise news
```

```
https://newsapi.org/v2/top-headlines&country={country}&sortBy={date}&publishedAt={date}

to fetch the latest articles
```