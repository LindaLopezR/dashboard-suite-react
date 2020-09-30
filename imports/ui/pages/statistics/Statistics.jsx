import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'bootstrap-4-react';
import CardTag from '../../components/CardTag';
import { NotDataCards } from '../../components/NotData';


export default Statistics = () => {

	const [listInfo, setListInfo] = useState([]);

	const addItem = () => {
		let data = listInfo;
		let newData = [
			...data,
			{ _id: new Date(), title: "Tag", data: [
				{ title: 'Creadas en el periodo', result: 123, icon: 'calendar-plus' },
				{ title: 'Cerradas en el periodo', result: 123, icon: 'calendar-check' },
				{ title: 'Pasan a urgente en el periodo', result: 123, icon: 'exclamation-triangle' },
				{ title: 'Pasan a crítica en el periodo', result: 123, icon: 'calendar-times' },
				{ title: 'Creadas vs Cerradas', result: 123, icon: 'calendar' },
				{ title: 'Total', result: 123, icon: 'calendar-alt' },
			]}
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
					<h4><i className="fa fa-bar-chart"/> Statistics</h4>
				</Col>
				<Col>
					<Button float="right" sm info onClick={() => addItem()}>
						<i className="fa fa-plus"/> Agregar
					</Button>
				</Col>
			</Row>
			
			{
				listInfo.length > 0 ? (
					listInfo.map((item, index) => (
						<Row key={index}>
							<Col col="12" mt="3">
								<h6 className="title-divisor">{item.title}</h6>
								<hr className="line-divisor"/>
							</Col>
							{item.data.map((tag, i) => (
								<Col col="12 md-6 lg-4" mb="3" key={i}>
									<CardTag 
										title={tag.title}
										data={tag.result}
										icon={tag.icon} 
									/>
								</Col>
							))}
						</Row>
					))
				) : (
					<Row>
						<Col mt="5" text="center">
							<NotDataCards/>
						</Col>
					</Row>
				)
			}
				
		</Container>
	);
}
