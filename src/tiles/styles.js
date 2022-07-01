import styled from "styled-components";

const BaseTileWrapper = styled.div`
	border: 2px solid blue;
`;

export const CapitalTileWrapper = styled(BaseTileWrapper)`
	border: 1px solid black;
	padding: 30px;
	text-align: center;
`;
