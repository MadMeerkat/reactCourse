import React, { useState } from "react";
import { useLayoutEffect, useRef } from "react";

export const Quote = ({ text, author }) => {
	const pRef = useRef();
	const [boxSize, setBoxSize] = useState({
		width: 0,
		height: 0,
	});

	useLayoutEffect(() => {
		const { width, height } = pRef.current.getBoundingClientRect();
		setBoxSize({ width, height });
	}, [text]);
	return (
		<>
			<blockquote
				className=' blockquote text-end'
				style={{ display: "flex" }}
			>
				<p ref={pRef} className=' mb-1'>
					{text}
				</p>
				<footer className='blockquote-footer mt-1'>{author}</footer>
			</blockquote>

			<code>{JSON.stringify(boxSize)}</code>
		</>
	);
};
