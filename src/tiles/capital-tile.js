import { CapitalTileWrapper } from "./styles";

const CapitalTile = ({ capital, handleSelect, iso_code }) => {
	return (
		<CapitalTileWrapper onClick={() => handleSelect(iso_code)}>
			{capital}
		</CapitalTileWrapper>
	);
};

export default CapitalTile;
