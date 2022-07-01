import styled from "styled-components";
import { BaseTile } from "./styles.js";

export const CapitalTile = ({ capital, handleSelect, iso_code }) => {
	return <Wrapper onClick={() => handleSelect(iso_code)}>{capital}</Wrapper>;
};

const Wrapper = styled(BaseTile)``;
