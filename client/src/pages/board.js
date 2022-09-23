import { Button, Container } from '@mui/material/';
import React from 'react';

const Board = () => {
	const dimension = {
		width: 10,
		height: 10,
	};

	const array2D = Array(dimension.width)
		.fill()
		.map((_, indexH) =>
			Array(dimension.height)
				.fill()
				.map((_, indexW) => indexW)
		);
	console.log('array2D', array2D);
	return (
		<>
			<Container component='main' maxWidth='xs'>
				<div className='center'>
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: `repeat(${dimension.width}, 30px)`,
							gridTemplateRows: `repeat(${dimension.height}, 30px)`,
							border: '1px solid white',
						}}
					>
						{array2D.map((row, i) =>
							row.map((col, j) => (
								<div style={{ border: '1px solid white' }}>{col}</div>
							))
						)}
					</div>
				</div>
			</Container>
		</>
	);
};

export default Board;
