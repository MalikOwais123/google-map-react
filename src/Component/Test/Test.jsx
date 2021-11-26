import React, { useState } from "react";

const Test = () => {
    const [players, setPlayers] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState("");
    const teams = [
        {
            id: 1,
            name: "Dumbs",
            players: [
                {
                    id: 11,
                    name: "Hamza",
                    shirtNum: 11,
                },
                {
                    id: 12,
                    name: "Owais",
                    shirtNum: 12,
                },
                {
                    id: 13,
                    name: "Hiba",
                    shirtNum: 13,
                },
            ],
        },
        {
            id: 12,
            name: "Coders",
            players: [
                {
                    id: 21,
                    name: "Jaffar",
                    shirtNum: 21,
                },
                {
                    id: 22,
                    name: "Shajil",
                    shirtNum: 22,
                },
                {
                    id: 23,
                    name: "Ayub",
                    shirtNum: 23,
                },
            ],
        },
        {
            id: 13,
            name: "Xorders",
            players: [
                {
                    id: 31,
                    name: "Ah",
                    shirtNum: 31,
                },
                {
                    id: 32,
                    name: "Asss",
                    shirtNum: 32,
                },
                {
                    id: 33,
                    name: "ASASASAS",
                    shirtNum: 33,
                },
            ],
        },
    ];

    const getTeamPlayers = (id) => {
        const teamsPlayers = teams.find((d) => d.id === id);
        const { players, name } = teamsPlayers;
        setSelectedTeam(name);
        setPlayers(players);
    };

    return (
        <>
            <div>
                <h1>TEAMS</h1>
                {teams.map((d) => (
                    <>
                        <div style={{ cursor: "pointer" }} onClick={() => getTeamPlayers(d.id)}>
                            Team Name : {d.name}
                        </div>
                        <hr />
                    </>
                ))}

                {/* Selected team players will map there by their name */}
                {selectedTeam && <h1>{selectedTeam} : Players</h1>}
                {players.length > 0 &&
                    players.map((d) => (
                        <>
                            <div style={{ cursor: "pointer" }} onClick={() => getTeamPlayers(d.id)}>
                                Player Name : {d.name}
                            </div>
                            <hr />
                        </>
                    ))}
            </div>
        </>
    );
};

export default Test;
