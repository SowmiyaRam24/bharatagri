import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Pagination,
  Row,
  Col,
  Form,
  Modal,
  Button,
  Container,
} from "react-bootstrap";
import CropCard from "./CropCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import "./Style.css";

const CropList = () => {
  const [crops, setCrops] = useState([]);
  const [filteredCrops, setFilteredCrops] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCrop, setSelectedCrop] = useState(null);


  const [pageNumber, setPageNumber] = useState(0);
  const cropsPerPage = 9; 

  useEffect(() => {
    axios
      .get(
        "https://api-cache-test.leanagri.com/pop/pop_list/en/64/pop_list.json"
      )
      .then((response) => {
        setCrops(response.data.data || []);
      })
      .catch((error) => console.error("Error fetching crop data:", error));
  }, []);

  useEffect(() => {

    const filtered = crops.filter((crop) =>
      crop.crop_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCrops(filtered);
  }, [crops, searchTerm]);


  const pageCount = Math.ceil(filteredCrops.length / cropsPerPage);

  const changePage = (newPage) => {
    setPageNumber(newPage);
  };

  const displayCrops = filteredCrops
    .slice(pageNumber * cropsPerPage, (pageNumber + 1) * cropsPerPage)
    .map((crop) => (
      <Col key={crop.id} xs={10} sm={5} md={5} lg={4}>
        <div onClick={() => openModal(crop)}>
          <CropCard
            imageUrl={crop.thumbnails[0].image}
            cropName={crop.crop_name}
            onImageClick={() => openModal(crop)}
          />
        </div>
      </Col>
    ));

  const openModal = (crop) => {
    setSelectedCrop(crop);
  };

  const closeModal = () => {
    setSelectedCrop(null);
  };

  return (
    <div>
      <Navbar fixed="top" style={{backgroundColor:'green',height:'64px',color:'white',justifyContent:'center',fontSize:'24px',fontFamily:'cursive'}}>BharatAgri 🌾</Navbar>
      <Container fluid>
        <Row>
          <Col>
            <Form.Control
              variant="success"
              type="text"
              placeholder=  " Search crops..."
              value={searchTerm}
          
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                marginTop: "86px",
                color: "green",
                width: "95%",
                marginLeft: "47px",
              }}
            />
          </Col>
        </Row>

        <Row xs={1} className="g-4 mt-3 ms-5">
          {displayCrops}
        </Row>

        <Pagination className="custom-pagination">
          <Pagination.Prev
            onClick={() => changePage(pageNumber - 1)}
            disabled={pageNumber === 0}
            variant="success"
          />
          {Array.from({ length: pageCount }, (_, index) => (
            <Pagination.Item
              key={index}
              active={index === pageNumber}
              onClick={() => changePage(index)}
              style={{ color: "green" }}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => changePage(pageNumber + 1)}
            disabled={pageNumber === pageCount - 1}
            variant="success"
          />
        </Pagination>

        {selectedCrop && (
          <Modal show={true} onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title style={{color:"green",alignItems:'center'}}>{selectedCrop.crop_name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedCrop.thumbnails[0].image}
                alt={selectedCrop.crop_name}
                style={{ width: "100%" }}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </Container>
    </div>
  );
};

export default CropList;
