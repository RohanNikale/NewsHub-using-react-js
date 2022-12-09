import React, { useEffect, useState } from 'react'
import '../style/style.css'
const API_KEY='23dc71aa3f384611a9bc741c4cdbb122'
const NewsHedding = () => {
  const [news, setNews] = useState([{title:'this is title',urlToImage:'image',description:'this is description',url:'rohannikale.com'}])
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}&pageSize=5`)
      .then(res => res.json())
      .then((data) => {

        setNews(data.articles)
      })
  }, [setNews])
  return (
    <>
      <br />
      <br />
      <div className="mainHedding">
        <div className="bigBOx" style={{ background: `url(${news[0].urlToImage})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
          <div className="text">
        <a href={news[0].url}>
            <h1>{news[0].title}</h1>
            {news[0].description}
            </a>
          </div>
        </div>
        <div className="smallbox">
          {
            news.map((elem, index) => {
              if (index >= 1) {
                return (
                  <div className="box" style={{ backgroundImage: `url(${elem.urlToImage})` }}><h3><a href={elem.url}>{elem.title}</a></h3></div>
                )
              }
            })
          }
        </div>
      </div>
    </>
  )
}

export default NewsHedding
