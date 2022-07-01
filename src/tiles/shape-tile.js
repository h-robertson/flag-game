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
				const centroid = geoPath().centroid(data);
				const projection = geoMercator()
					.center(centroid)
					.rotate([0, 0])
					.fitSize(
						[
							svgRef.current.getBoundingClientRect().width,
							svgRef.current.getBoundingClientRect().height,
						],
						data
					);

				const path = geoPath().projection(projection);
				const geometry = path(data);

				select(svgRef.current)
					.append("path")
					.attr("d", geometry)
					.attr("fill", "red");
			});
		}
	}, []);

	return (
		<Wrapper onClick={() => handleSelect(iso_code)}>
			<svg ref={svgRef}></svg>
		</Wrapper>
	);
};

const Wrapper = styled(BaseTile)``;
