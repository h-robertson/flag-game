import styled from "styled-components";

export const FlagTile = ({ capital, handleSelect, iso_code }) => {
	return <Wrapper onClick={() => handleSelect(iso_code)}>{capital}</Wrapper>;
};

const Wrapper = styled.div`
	border: 5px solid red;
`;
