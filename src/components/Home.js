import React from 'react'
import News from './News'
import NewsHedding from './NewsHedding'

const Home = () => {
  return (
    <>
      <NewsHedding/>
      <News key='general' type="general"/>
    </>
  )
}

export default Home
