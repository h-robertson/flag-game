import styled from "styled-components";
import { BaseTile } from "./styles.js";
import { geoPath, geoMercator } from "d3-geo";
import { select } from "d3-selection";
import { useEffect, useRef } from "react";

export const ShapeTile = ({ shape_url, handleSelect, iso_code }) => {
	const svgRef = useRef();

	useEffect(() => {
		// declare the data fetching function
		const fetchData = async () => {
			const shapeData = await fetch(shape_url);
			return shapeData.json();
		};

		if (svgRef.current) {
			fetchData().then((data) => {
				const projection = geoMercator()
					.rotate([0, 0])
					.fitSize(
						[
							svgRef.current.getBoundingClientRect().width,
							svgRef.current.getBoundingClientRect().height,
						],
						data
					);

				const path = geoPath().projection(projection);

				const g = select(svgRef.current).append("g");

				g.selectAll("path")
					.data(data.features ? data.features : [data]) // just in case someone passes a single Feature
					.join("path")
					.attr("d", path);
			});
		}
	}, []);

	return (
		<Wrapper onClick={() => handleSelect(iso_code)}>
			<svg width="100%" height="100%" ref={svgRef}></svg>
		</Wrapper>
	);
};

const Wrapper = styled(BaseTile)``;
