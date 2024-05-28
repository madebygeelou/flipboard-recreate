import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Gallery from './components/Gallery.js'

function ArtArticle(props) {
  console.log(props.image);
  const pictureURL = props.pictureURL
  const imageID = props.image.image_id
  return (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={`${pictureURL}/${imageID}/full/843,/0/default.jpg`} />
  </Card>
  )
}

export default ArtArticle;
