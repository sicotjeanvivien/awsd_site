import React, { useCallback, useEffect, useState } from "react";
import Case from "./Case";
import styles from "./Morpion.module.css";

const MorpionGame: React.ElementType = () => {
	const boardStart = [
		{ "index": 0, "value": "" },
		{ "index": 1, "value": "" },
		{ "index": 2, "value": "" },
		{ "index": 3, "value": "" },
		{ "index": 4, "value": "" },
		{ "index": 5, "value": "" },
		{ "index": 6, "value": "" },
		{ "index": 7, "value": "" },
		{ "index": 8, "value": "" },
	]
	let [player, setPlayer] = useState("X");
	let [gameFinished, setGameFinished] = useState(false);
	let [board, setBoard] = useState(boardStart);
	let [gameStatus, setGameStatus] = useState("Tour du joueur " + player);

	const clickCase = useCallback((e: Event) => {
		if (
			!gameFinished
			&& e.target !== null
			&& e.target instanceof HTMLElement
			&& e.target.dataset.index
		) {
			let index = parseInt(e.target.dataset.index);
			let newBoard: any = [];
			let newPlayer = "X";
			board.map((value, key) => {
				if (value.index === index && value.value === "") {
					value.value = player;
					if (player === "X") newPlayer = "O";
				};
				newBoard = [...newBoard, value];
			})

			displayedTurn(newPlayer, newBoard);
			setBoard(newBoard);
		}
	}, [board, player, gameStatus]);

	const displayedTurn = (newPlayer: string, newBoard: any) => {
		if (checkWinner()) {
			setGameStatus("Victoire du joueur " + player);
			setGameFinished(true);
		} else if (!checkCellIfVoid(newBoard)) {
			console.log("null");
			setGameStatus("Match nul!!!");
		} else {
			setGameStatus("Tour du joueur " + newPlayer);
			setPlayer(newPlayer);
		}
	}

	const checkWinner = () => {
		const winningPattern = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];
		return winningPattern.some(combination => {
			return combination.every((index) => {
				return player === board[index].value;
			})

		})
	}

	const checkCellIfVoid = (newBoard: any) => {
		return newBoard.find((cell) => {
			return cell.value === "";
		})
	}

	return (
		<div className="row">
			<div className="col-12 ">
				<h3 className="text-center">Morpion</h3>
			</div>
			<div className="col-12 ">
				<h3 className="text-center">{gameStatus}</h3>
			</div>
			<div className="col-12 p-0 text-center">
				<div className={styles.jeu}>
					{
						board.map((value, key) => {
							return (
								<Case key={key} value={value} onClick={clickCase} />
							)
						})
					}
				</div>
			</div>
			<div className="col-2">

			</div>
		</div>
	)
}
export default MorpionGame;