/* eslint-disable react/prop-types */
import { useState } from "react";

const Final = ({finalName, teams, onSelect, onReset, className}) => {
    const [winnerFinal, setWinnerFinal] = useState(null);
    const [winnerFinalLogo, setWinnerFinalLogo] = useState(null);
    const [loserFinal, setLoserFinal] = useState(null);
    const [loserFinalLogo, setLoserFinalLogo] = useState(null);

    const handleTeamClick = (teamName, teamLogo) => {
        if (!winnerFinal) {
            setWinnerFinal(teamName);
            setWinnerFinalLogo(teamLogo)
            onSelect('winner', teamName)
            console.log(`Selected ${teamName} to win ${finalName}`);
        }

        const otherTeam = teams.find((team) => team.name !== teamName)
        if (otherTeam) {
            setLoserFinal(otherTeam.name);
            setLoserFinalLogo(otherTeam.logo)
            onSelect('loser', otherTeam.name)
        }
    }

    const handleReset = () => {
        setWinnerFinal(null);
        setLoserFinal(null);
        onReset();
        console.log(`Reset ${finalName}`);
    }

    return (
        <div className={className}>
            {className === 'final' ? <h2 className="final-header">FINAL</h2> : <h3 className="bronze-final-header">BRONZE FINAL</h3>}  
            <div className={`final-control-div`}>
                {winnerFinal && className === 'final' ? <p className="final-result">CHAMPIONS: 
                    <img className="poolLogo" src={winnerFinalLogo} alt="" /></p> : winnerFinal && className === 'bronzeFinal' ? 
                        <p className="final-result">3ʳᵈ Place: <img className="poolLogo" src={winnerFinalLogo} alt="" /></p> : null}
                <div className="final-team-buttons-div">
                    {teams
                        .filter((team) => team.name != null) // filter out null values
                        .map((team) => (
                            <div key={team.id}>
                                <button className={`${className === 'final' ? 'team-button'  : 'bronze-team-button'} ${winnerFinal === team.name ? 'selected' : ''}`} 
                                    onClick={() => handleTeamClick(team.name, team.logo)}
                                    disabled={winnerFinal}> 
                                    <img className="playoff-logo" src={team.logo} alt="" /> {team.name}
                                </button>
                            </div>
                        ))
                    }
                </div>
                {winnerFinal && <button className="final-reset-button reset-button" onClick={handleReset}></button>}
                {loserFinal && className === 'final' ? <p className="final-result">2ⁿᵈ Place: 
                <img className="poolLogo" src={loserFinalLogo} alt="" /></p> : null}
            </div>
        </div>
    );
};

export default Final; 