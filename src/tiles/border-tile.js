import styled from "styled-components";
import { BaseTile } from "./styles.js";

export const BorderTile = ({ borders, handleSelect, iso_code }) => {
	return (
		<Wrapper onClick={() => handleSelect(iso_code)}>
			<ul>
				{borders.map((border) => (
					<li>{border}</li>
				))}
			</ul>
		</Wrapper>
	);
};

const Wrapper = styled(BaseTile)``;
