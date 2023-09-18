/* eslint-disable react/prop-types */
import { useState } from "react";


const SemiFinal = ({sfName, teams, onSelect, onReset, className}) => {
    const [winnerSF, setWinnerSF] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const [loserSF, setLoserSF] = useState(null);

    const handleTeamClick = (teamName) => {
        if (!winnerSF) {
            setWinnerSF(teamName)
            onSelect('winner', teamName);
            console.log(`Selected ${teamName} to win ${sfName}`)
        }

        const otherTeam = teams.find((team) => team.name !== teamName)
        if (otherTeam) {
            setLoserSF(otherTeam.name)
            onSelect('loser', otherTeam.name)
        }
    }

    const handleReset = () => {
        setWinnerSF(null);
        setLoserSF(null)
        onReset();
        console.log(`Reset ${sfName}`)
    }

    return (
        <div className={className}>
            <h2 className="semi-final-header">{sfName}</h2>
            <div className="sf-control-div">
                <div className="sf-team-buttons-div"> 
                    {teams
                        .filter((team) => team.name !== null) // filter out null values
                        .map((team) => (
                            <div key={team.id}>
                                <button className={`team-button ${winnerSF === team.name ? 'selected' : ''}`} 
                                    onClick={() => handleTeamClick(team.name)}
                                    disabled={winnerSF && loserSF}> 
                                    <img className="playoff-logo" src={team.logo} alt="" /> {team.name}
                                </button>
                            </div>
                        ))
                    }
                </div>
                {winnerSF && <button className={`sf-reset-button reset-button ${sfName === 'SF1' ? 'left-reset' : 'right-reset'}`} 
                    onClick={handleReset}>
                </button>}
            </div>

        </div>
    );
};

export default SemiFinal;