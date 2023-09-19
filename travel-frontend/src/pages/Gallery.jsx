import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { MasonryImagesGallery } from "../components/Image-gallery/MasonryImagesGallery";

export const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <MasonryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
