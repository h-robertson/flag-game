import PropTypes from "prop-types";
import CapitalTile from "./capital-tile";

const Tile = ({ round_index, ...props }) => {
	switch (round_index) {
		case 0:
			return <CapitalTile {...props} />;
		case 1:

		case 2:

		case 3:
		default:
			return null;
	}
};

Tile.propTypes = {
	round_index: PropTypes.number,
	handleSelect: PropTypes.func,
};

export default Tile;
