import React from 'react';
import { Card, Col, Row } from 'bootstrap-4-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default CardInfo = (props) => {
	const total = props.data ? props.data : '--';

	return (
        <Card className="cardTag">
            <Card.Header className="header-cardTag">
                {props.title}
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col col="8" text="center">
                        <h5>{total}</h5>
                    </Col>
                    <Col col="4">
                        <FontAwesomeIcon icon={['fas', props.icon]} style={{ fontSize: 30 }} color="#00b5ad" />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
	);
}
