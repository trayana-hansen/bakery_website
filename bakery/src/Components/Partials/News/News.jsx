import axios from "axios";
import { useEffect, useState } from "react";
import "./News.scss";

const News = () => {
  const url = "https://api.mediehuset.net/bakeonline/news";
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios.get(url).then((data) => {
      console.log(data.data.items);
      setNews(data.data.items.slice(0, 3));
    });
  }, []);

  return (
    <div className="containerNews">
      {news.map((data) => {
        return (
          <figure className="articleNews" key={data.id}>
            <img src={data.image} alt="img_news" />
            <h2>{data.title}</h2>
            <p>{data.teaser}</p>
          </figure>
        );
      })}
    </div>
  );
};

export default News;
