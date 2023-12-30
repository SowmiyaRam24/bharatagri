


import React from 'react';
import { Card } from 'react-bootstrap';

const CropCard = ({ imageUrl, cropName, onImageClick }) => {
  return (
    <Card style={{ width: '100%', marginBottom: '15px' }} className="shadow-lg mx-auto">
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={cropName}
        style={{ height: '250px', objectFit: 'cover', cursor: 'pointer' }}
        onClick={onImageClick}
      />
      <Card.Body style={{backgroundColor:'green'}}>
        <Card.Title style={{color:'white' ,textAlign:'center',backgroundColor:'green'}}>{cropName}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CropCard;
