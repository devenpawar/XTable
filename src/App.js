import React, { useState } from "react";

const data = [
  { date: "2022-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" },
];

function App() {
  const [articles, setArticles] = useState(data);

  const sortByDate = () => {
    const sortedData = [...articles].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setArticles(sortedData);
  };

  const sortByViews = () => {
    const sortedData = [...articles].sort((a, b) => a.views - b.views);
    setArticles(sortedData);
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews} style={{ marginLeft: "10px" }}>
          Sort by Views
        </button>
      </div>
      <table style={{ marginTop: "10px", width: "50%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr key={index}>
              <td>{article.date}</td>
              <td>{article.views}</td>
              <td>{article.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
