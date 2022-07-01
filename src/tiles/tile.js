import PropTypes from "prop-types";
import { CapitalTile } from "./capital-tile";
import { FlagTile } from "./flag-tile";
import { ShapeTile } from "./shape-tile";
import { BorderTile } from "./border-tile";

const Tile = ({ round_index, ...props }) => {
	switch (round_index) {
		case 0:
			return <CapitalTile {...props} />;
		case 1:
			return <FlagTile {...props} />;
		case 2:
			return (
				<ShapeTile
					{...props}
					shape_url={`https://raw.githubusercontent.com/mledoze/countries/master/data/${props.iso_code.toLowerCase()}.geo.json`}
				/>
			);
		case 3:
			return <BorderTile {...props} />;
		default:
			return null;
	}
};

Tile.propTypes = {
	round_index: PropTypes.number,
	handleSelect: PropTypes.func,
};

export default Tile;
