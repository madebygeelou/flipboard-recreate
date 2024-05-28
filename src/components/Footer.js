import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function Footer() {
  return (
        <>
        <div className='footer'>
          {['sm'].map((breakpoint) => (
            <ListGroup key={breakpoint} horizontal={breakpoint} className="my-2">
              <ListGroup.Item><h3>About Us</h3></ListGroup.Item>
              <ListGroup.Item><h3>Contact Us</h3></ListGroup.Item>
              <ListGroup.Item><p>Email: example@example.com</p> {breakpoint}</ListGroup.Item>
              <ListGroup.Item><p>Phone: 123-456-7890</p></ListGroup.Item>
            </ListGroup>
          ))}
        </div>
        </>
      );
    }


export default Footer;
