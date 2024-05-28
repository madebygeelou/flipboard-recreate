import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Navbar.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import ArtArticle from './components/ArtArticle.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './components/Footer.js'
import Gallery from './components/Gallery.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='welcome'>
        <h1>Welcome to my Flipboard Reinvisioned Replica!</h1>
      </div>
      <div className='ArtCards'>
        <Gallery/>
      {/* <Container>
      <Row>
        <Col xs>   <ArtArticle/></Col>
        <Col xs={{ order: 12 }}> <ArtArticle/></Col>
        <Col xs={{ order: 1 }}> <ArtArticle/></Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col xs>   <ArtArticle/></Col>
        <Col xs={{ order: 12 }}> <ArtArticle/></Col>
        <Col xs={{ order: 1 }}> <ArtArticle/></Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col xs>   <ArtArticle/></Col>
        <Col xs={{ order: 12 }}> <ArtArticle/></Col>
        <Col xs={{ order: 1 }}> <ArtArticle/></Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col xs>   <ArtArticle/></Col>
        <Col xs={{ order: 12 }}> <ArtArticle/></Col>
        <Col xs={{ order: 1 }}> <ArtArticle/></Col>
      </Row>
    </Container> */}
    </div>
    <Footer/>
    </div>
  );
}

export default App;
