import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Inspector from "./Inspector";
import ImageViewer from "./ImageViewer";

const ViewTimecard = ({ tc }) => {
  console.log("VIEWTIMECARD");
  console.log(tc.user);

  return (
    <Container fluid>
      <Row>
        <Col>
          <ImageViewer timecardPhotoUrls={tc.timecardPhotoUrls}></ImageViewer>
        </Col>
        <Col>
          <Inspector tc={tc}></Inspector>;
        </Col>
      </Row>
    </Container>
  );
};

export default ViewTimecard;
