import { useEffect, useState } from "react";
import Round from "./round";

function App() {
	const [round, setRound] = useState(0);
	const [streak, setStreak] = useState(0);
	const [current_country_code, setCurrentCountryCode] = useState("POL");

	const handleSelect = (selected_iso_code) => {
		const is_correct = selected_iso_code === current_country_code;
		const total_rounds = 3;
		if (is_correct) {
			if (round < total_rounds) {
				setRound((prev_round) => prev_round + 1);
			} else {
				setStreak((prev_streak) => prev_streak + 1);
				setRound(0);
			}
		} else {
			setStreak(0);
			setRound(0);
			// soem ui stuff
		}
	};

	useEffect(() => {
		// go back to showing the country tiles (start of new set)
	}, [streak]);

	useEffect(() => {
		// go to the next round of that set
	}, [round]);

	return (
		<div className="App">
			<div>Round: {round + 1}</div>
			<div>streak: {streak}</div>
			<Round
				round_index={round}
				current_country_code={current_country_code}
				handleSelect={handleSelect}
			/>
		</div>
	);
}

export default App;
