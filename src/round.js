import PropTypes, { string } from "prop-types";
import Tile from "./tiles/tile";
import styled from "styled-components";

const DUMMY_TILE_DATA = [
	{
		name: "Rwanda",
		iso_code: "RWA",
		capital: "Kigali",
		image_url: "https://public.flourish.studio/country-flags/svg/rw.svg",
		shape_url:
			"https://raw.githubusercontent.com/georgique/world-geojson/master/countries/egypt.json",
	},
	{
		name: "Kiribati",
		iso_code: "KIR",
		capital: "Tarawa",
		image_url: "https://public.flourish.studio/country-flags/svg/ki.svg",
		shape_url:
			"https://raw.githubusercontent.com/georgique/world-geojson/master/countries/poland.json",
	},
	{
		name: "Poland",
		iso_code: "POL",
		capital: "Warsaw",
		image_url: "https://public.flourish.studio/country-flags/svg/pl.svg",
		shape_url:
			"https://raw.githubusercontent.com/georgique/world-geojson/master/countries/poland.json",
	},
	{
		name: "Peru",
		iso_code: "PER",
		capital: "Lima",
		image_url: "https://public.flourish.studio/country-flags/svg/pe.svg",
		shape_url:
			"https://raw.githubusercontent.com/georgique/world-geojson/master/countries/poland.json",
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
