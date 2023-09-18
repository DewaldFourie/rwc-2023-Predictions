/* eslint-disable react/prop-types */
import { useState } from "react";

const QuarterFinal = ({ qfName, teams, onSelect, onReset, className }) => {
    const [winnerQF, setWinnerQF] = useState(null);

    const handleTeamClick = (teamName) => {
        if (!winnerQF) {
            setWinnerQF(teamName)
            onSelect(qfName, teamName)
            console.log(`Selected ${teamName} to win ${qfName}`)
        }
    }

    const handleReset = () => {
        setWinnerQF(null);
        onReset();
        console.log(`Reset ${qfName}`)
    }


    return (
        <div className={className}>
            <h2>{qfName}</h2>
            <div className="qf-control-div">
                <div className="qf-team-buttons-div">
                    {teams
                        .filter((team) => team.name !== null) // Filter out null values
                        .map((team) => (
                            <div key={team.id}>
                                <button className={`team-button ${winnerQF === team.name ? 'selected' : ''}`} 
                                        onClick={() => handleTeamClick(team.name)}
                                        disabled={winnerQF}> 
                                        <img className="playoff-logo" src={team.logo} alt="" /> {team.name}
                                </button>
                            </div>
                    ))}
                </div>
                {winnerQF && <button className={`qf-reset-button reset-button 
                    ${qfName === 'QF1' || qfName === 'QF2' ? 'left-reset' : 'right-reset'}`} onClick={handleReset}>
                </button>}
            </div>
        </div>
    );
};

export default QuarterFinal;



