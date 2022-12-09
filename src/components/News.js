import React, { useState } from 'react'
import Newsitems from './Newsitems'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';
const API_KEY='23dc71aa3f384611a9bc741c4cdbb122'

const News = (props) => {
  document.title=`NewsHub - ${props.type}`
  const [news, setNews] = useState([{ title: 'this is title', urlToImage: 'image', description: 'this is description' }])
  // eslint-disable-next-line
  const [pageSize, setpageSize] = useState(5)
  // eslint-disable-next-line
  const [pageNo, setPageno] = useState(1)
  // eslint-disable-next-line
  const [totalResult, setTotalresult] = useState(0)

  const [loading,setLoading]=useState(true)

  React.useEffect(() => {

    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${props.type}&apiKey=${API_KEY}&pageSize=${pageSize}`)
      .then(res => res.json())
      .then((data) => {

        setNews(data.articles)
        setLoading(false)
      })
  }, [setNews])


  const fetchMoreData = () => {
    console.log('entered fetchMore')
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${props.type}&apiKey=${API_KEY}&page=${pageNo + 1}&pageSize=${pageSize}`)
      .then(res => res.json())
      .then((data) => {
        setPageno(pageNo + 1)
        setTotalresult(data.totalResult)
        setNews(news.concat(Array.from(data.articles)))
      })


  };
  return (
    <>
      <div className="mainsecNews">
        <h1>News </h1>
      </div>
      <center>
<h1>{!loading?'':<Spinner/>}</h1>
      </center>
{ !loading&&<InfiniteScroll
      dataLength={news.length}
      next={fetchMoreData}
      hasMore={true}
      >
        <div className="newsitems">
          {
            news.map((elem) => {
              return (
                <Newsitems title={elem.title} description={elem.description} img={elem.urlToImage} link={elem.url} />
                )
              })
          }
        </div>
      </InfiniteScroll>
      }
    </>
  )
}

export default News
