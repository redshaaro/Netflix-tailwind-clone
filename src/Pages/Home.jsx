import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../components/Requestes'

const Home = () => {
  return (
    <>
    <Main></Main>
    <Row title="UpComing" fetchURL={requests.requestUpcoming}></Row>
    <Row title="Popular" fetchURL={requests.requestPop}></Row>
    <Row title="Top Rated" fetchURL={requests.requestTopRated}></Row>
    <Row title="Trend" fetchURL={requests.requestTrend}></Row>
     


    
    
    
    </>
  )
}

export default Home