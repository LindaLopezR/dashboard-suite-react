import React from 'react';
import { Button, Col, Container, Row } from 'bootstrap-4-react';

const imgNotFound = 'img/NotFound.png';

export default NotFound = () => {
    return (
        <Container className="content-notFound">
            <Row>
                <Col col="12 sm-12 md-6" className="txt-notFound">
                    <h3>Error 404</h3>
                    <p>
                        Sorry! Page not Found
                    </p>
                    <Button info outline>
                        Back to home
                    </Button>
                </Col>
                <Col col="12 sm-12 md-6" text="center">
                    <img src={imgNotFound} />
                </Col>
            </Row>
        </Container>
    );
}
