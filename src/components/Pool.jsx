/* eslint-disable react/prop-types */
import { useState } from "react";

const Pool = ({ poolName, teams, onSelect, onReset, className }) => {
    const [topTeam, setTopTeam] = useState(null);
    const [topTeamLogo, setTopTeamLogo] = useState(null);
    const [secondTeam, setSecondTeam] = useState(null);
    const [secondTeamLogo, setSecondTeamLogo] =useState(null);


    const handleTeamClick = (teamName , teamLogo) => {
        if (!topTeam) {
            setTopTeam(teamName);
            setTopTeamLogo(teamLogo);
            onSelect('top', teamName);
            console.log(`Selected ${teamName} for Top Pool ${poolName}`);
        } else if (!secondTeam) {
            setSecondTeam(teamName);
            setSecondTeamLogo(teamLogo)
            onSelect('second', teamName)
            console.log(`Selected ${teamName} for Second Pool ${poolName}`);
        }
        
    };

    const handleReset = () => {
        setTopTeam(null);
        setSecondTeam(null);
        onReset();
        console.log(`Reset Pool ${poolName}`);
    };

    return (
        <div className={className}>
            <h2 className='poolHeader'>Pool {poolName}</h2>
            <div className="pool-team-buttons-div">
                {teams.map((team) => (
                <button
                    key={team.name}
                    onClick={() => handleTeamClick(team.name, team.logo)}
                    disabled={topTeam && secondTeam || topTeam === team.name || secondTeam === team.name}
                    className={`poolBtn ${(topTeam === team.name || secondTeam === team.name) ? "selected" : ""}`}
                >
                <img className="poolLogo" src={team.logo} alt="" />
                {team.name}
                </button>
                ))}
            </div>
            <div className="selected-teams">
                {topTeam && <p className="selected-teams-line">Top : 
                    <img className="poolLogo" src={topTeamLogo} alt="" /></p>}
                {secondTeam && <p className="selected-teams-line">2ⁿᵈ : 
                    <img className="poolLogo" src={secondTeamLogo} alt="" /></p>}
            </div>
            {topTeam && <button className="pool-reset-button reset-button" onClick={handleReset}></button>}
        </div>
    );
};

export default Pool;
