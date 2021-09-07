import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import NewsList from "./components/NewsList";

function App() {
  // Define category and news
  const [category, setCategory] = useState("");
  const [news, setNews] = useState([]);

  useEffect(() => {
    try {
      const API_KEY = "a20aab23f8d24dc5addda7d1857643a6";
      const country = "jp";
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;
      const getNews = async () => {
        const response = await fetch(url);
        const newsRecived = await response.json();
        setNews(newsRecived.articles);
      };
      getNews();
    } catch (err) {
      console.log(err);
    }
  }, [category]);

  return (
    <>
      <Header title="News Search" />
      <div className="container white">
        <Form setCategory={setCategory} />
        <NewsList newsList={news} />
      </div>
    </>
  );
}

export default App;
