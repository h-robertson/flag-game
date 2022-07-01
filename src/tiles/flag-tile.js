import styled from "styled-components";
import { BaseTile } from "./styles.js";

export const FlagTile = ({ image_url, handleSelect, iso_code }) => {
	return (
		<Wrapper onClick={() => handleSelect(iso_code)}>
			<img src={image_url} alt="Flag"></img>
		</Wrapper>
	);
};

const Wrapper = styled(BaseTile)``;
