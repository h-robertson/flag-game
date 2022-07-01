import PropTypes from "prop-types";
import { CapitalTile } from "./capital-tile";
import { FlagTile } from "./flag-tile";
import { ShapeTile } from "./shape-tile";
import { BorderTile } from "./border-tile";

const Tile = ({ round_index, ...props }) => {
	switch (round_index) {
		case 2:
			return <CapitalTile {...props} />;
		case 1:
			return <FlagTile {...props} />;
		case 0:
			return <ShapeTile {...props} />;
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
