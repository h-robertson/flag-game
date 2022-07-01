import PropTypes from "prop-types";
import Tile from "./tiles/tile";
import styled from "styled-components";

const DUMMY_TILE_DATA = [
	{
		name: "Rwanda",
		iso_code: "RWA",
		capital: "Kigali",
		image_url: "https://public.flourish.studio/country-flags/svg/rw.svg",
		borders: ["Uganda", "Tanzania", "Burundi", "D.R. Congo"],
	},
	{
		name: "Egypt",
		iso_code: "EGY",
		capital: "Cairo",
		image_url: "https://public.flourish.studio/country-flags/svg/eg.svg",
		borders: ["Libya", "Sudan", "Israel"],
	},
	{
		name: "Poland",
		iso_code: "POL",
		capital: "Warsaw",
		image_url: "https://public.flourish.studio/country-flags/svg/pl.svg",
		borders: [
			"Germany",
			"Ukraine",
			"Russia",
			"Belarus",
			"Czech Republic",
			"Lithuania",
		],
	},
	{
		name: "Peru",
		iso_code: "PER",
		capital: "Lima",
		image_url: "https://public.flourish.studio/country-flags/svg/pe.svg",
		borders: ["Ecuador", "Colombia", "Bolivia", "Chile", "Brazil"],
	},
];

const Round = ({ round_index, current_country, handleSelect }) => {
	return (
		<>
			<h2>COUNTRY: {current_country.name}</h2>
			<Grid>
				{DUMMY_TILE_DATA.map((data, i) => (
					<Tile
						key={i}
						round_index={round_index}
						handleSelect={handleSelect}
						{...data}
					/>
				))}
			</Grid>
		</>
	);
};

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
`;

Round.propTypes = {
	tileData: PropTypes.array,
	round_index: PropTypes.number,
	current_country: PropTypes.shape({
		name: PropTypes.string,
		iso_code: PropTypes.string,
	}),
};

export default Round;
