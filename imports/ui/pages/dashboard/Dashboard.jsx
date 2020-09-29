import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'bootstrap-4-react';
import CardInfo from '../../components/CardInfo';
import { NotDataCards } from '../../components/NotData';

export default Dashboard = () => {

	const [listInfo, setListInfo] = useState([]);

	const addItem = () => {
		let data = listInfo;
		let newData = [
			...data,
			{ info1: 1, info2: 23, info3: 32, _id: new Date()}
		];
	
		setListInfo(newData);
	}

	const removeItem = (_id) => {
		let data = listInfo;
		let newData = [
			...data.slice(0, _id),
			...data.slice(_id + 1),
		];

		setListInfo(newData);
	}

	return (
		<Container>
			<Row>
				<Col>
					<h4><i className="fa fa-dashboard"/> Dashboard</h4>
				</Col>
				<Col>
					<Button float="right" sm info onClick={() => addItem()}>
						<i className="fa fa-plus"/> Agregar
					</Button>
				</Col>
			</Row>
			<Row>
				<Col>
					{
						listInfo.length > 0 ? (
							listInfo.map((item, index) => (
								<div className="item-listCard">
									<div className="content-cards">
										<Card.Group className="content-infoCards" mt="4" mb="3" key={index + 1}>
											<CardInfo icon="check" total={item.info1} title="auditorias realizadas" />
											<CardInfo icon="clock-o" total={item.info2} title="completados a tiempo" />
											<CardInfo icon="server" total={item.info2} title="% Promedio general del día" />
										</Card.Group>
									</div>
									<Card className="content-remove" text="center" onClick={() => removeItem(index)}> X</Card>
								</div>
							))
						) : (
							<Col mt="5" text="center">
								<NotDataCards/>
							</Col>
						)
					}
				</Col>
			</Row>
		</Container>
	);
}
