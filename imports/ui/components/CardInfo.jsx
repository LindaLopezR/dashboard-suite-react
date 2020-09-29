import React from 'react';
import { Card } from 'bootstrap-4-react';

export default CardInfo = (props) => {
	const icon = `fa fa-${props.icon}`;
	const total = props.total ? props.total : '--';

	return (
			<Card>
				<Card.Body mx="auto">
						<h4>
							<i className={icon} /> {total}{' '}
							<small>{props.title}</small>
						</h4>
				</Card.Body>
			</Card>
	);
}
