import { NextPage } from "next";
import ListGames from "../component/games/ListGames";

const Games: NextPage = () => {

    const games = [
        {
            "name": "Morpion",
            "rules" : "Le premier joueur a aligner 3 symboles identiques gagne la partie. Attention, le joueur qui débute est toujours avantagé pour gagner. Pensez donc à alterner!",
            "image" : "/",
            "link" : "/games/morpion"
        },
        {
            "name": "Candy Crush Saga",
            "rules" : "",
            "image" : "/",
            "link" : "/games/candy-crush-saga"

        }
    ];

    return (
        <>
            <ListGames games={games} />
        </>
    )
}

export default Games;