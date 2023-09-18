import { useState, useEffect } from 'react';
import './App.css';
import Pool from './components/Pool'
import QuarterFinal from './components/QuarterFinal';
import SemiFinal from './components/SemiFinal';
import Final from './components/Final';
import rwcLogo2023 from './assets/rwcLogo2023F.png'
import franceLogo from './assets/team-logos/france.png'
import newZealandLogo from './assets/team-logos/newZealand.png'
import italyLogo from './assets/team-logos/italy.png'
import uruguayLogo from './assets/team-logos/uruguay.png'
import namibiaLogo from './assets/team-logos/namibia.png'
import irelandLogo from './assets/team-logos/ireland.png'
import southAfricaLogo from './assets/team-logos/southAfrica.png'
import scotlandLogo from './assets/team-logos/scotland.png'
import tongaLogo from './assets/team-logos/tonga.png'
import romaniaLogo from './assets/team-logos/romania.png'
import walesLogo from './assets/team-logos/wales.png'
import australiaLogo from './assets/team-logos/australia.png'
import fijiLogo from './assets/team-logos/fiji.png'
import georgiaLogo from './assets/team-logos/georgia.png'
import portugalLogo from './assets/team-logos/portugal.png'
import englandLogo from './assets/team-logos/england.png'
import argentinaLogo from './assets/team-logos/argentina.png'
import japanLogo from './assets/team-logos/japan.png'
import samoaLogo from './assets/team-logos/samoa.png'
import chileLogo from './assets/team-logos/chile.png'


const poolsData = {
  A: [
    { name: 'France', logo: franceLogo},
    { name: 'New Zealand', logo: newZealandLogo},
    { name: 'Italy', logo: italyLogo},
    { name: 'Uruguay', logo: uruguayLogo},
    { name: 'Namibia', logo: namibiaLogo},
  ],
  B: [
    { name: 'Ireland', logo: irelandLogo},
    { name: 'South Africa', logo: southAfricaLogo},
    { name: 'Scotland', logo: scotlandLogo},
    { name: 'Tonga', logo: tongaLogo},
    { name: 'Romania', logo: romaniaLogo},
  ],
  C: [
    { name: 'Wales', logo: walesLogo},
    { name: 'Australia', logo: australiaLogo},
    { name: 'Fiji', logo: fijiLogo},
    { name: 'Georgia', logo: georgiaLogo},
    { name: 'Portugal', logo: portugalLogo},
  ],
  D: [
    { name: 'England', logo: englandLogo},
    { name: 'Argentina', logo: argentinaLogo},
    { name: 'Japan', logo: japanLogo},
    { name: 'Samoa', logo: samoaLogo},
    { name: 'Chile', logo: chileLogo},
  ],
};


function App() {
  // Initialize state for selected teams
  const [selectedTeams, setSelectedTeams] = useState(() => {
    const initialSelectedTeams = {};
    // Initialize each pool with top and second set to null
    Object.keys(poolsData).forEach((poolName) => {
      initialSelectedTeams[poolName] = {
        top: null,
        topLogo: null,
        second: null,
        secondLogo: null
      };
    });
    return initialSelectedTeams;
  });

  // Declare and initialize quarterFinalsData state for QF
  const [quarterFinalsData, setQuarterFinalsData] = useState(() => ({
    QF1: [
      { name: null, id: 1, logo: null},
      { name: null, id: 2, logo: null},
    ],
    QF2: [
      { name: null, id: 3, logo: null},
      { name: null, id: 4, logo: null},
    ],
    QF3: [
      { name: null, id: 5, logo: null},
      { name: null, id: 6, logo: null},
    ],
    QF4: [
      { name: null, id: 7, logo: null},
      { name: null, id: 8, logo: null},
    ],
  }));

  // Initialize state for QF winners
  const [qfWinners, setQfWinners] = useState(() => {
    const initialSelectedTeam = {};
    // Initialize each QF with winner set to null
    Object.keys(quarterFinalsData).forEach((qfName) => {
      initialSelectedTeam[qfName] = {
        winner: null,
        logo: null
      }
    });
    return initialSelectedTeam
  })
  

  // Declare and initialize SemiFinalsData state for SF
  const [semiFinalsData, setSemiFinalsData] = useState(() => ({
    SF1: [
      { name: null, id: 1, logo: null},
      { name: null, id: 2, logo: null},
    ],
    SF2: [
      { name: null, id: 3, logo: null},
      { name: null, id: 4, logo: null},
    ]
  }))

  // Initialize state for SF Result
  const [semiFinalResult, setSemiFinalResult] = useState(() => {
    const initialSelectedTeams = {};
    // Initialize each of SF with winner and loser set to null
    Object.keys(semiFinalsData).forEach((sfName) => {
      initialSelectedTeams[sfName] = {
        winner: null,
        winnerLogo: null,
        loser: null,
        loserLogo: null
      }
    });
    return initialSelectedTeams
  })

  // Declare and initialize FinalsData state for Final
  const [finalsData, setFinalsData] = useState(() => ({
    final: [
      { name: null, id: 1, logo: null},
      { name: null, id: 2, logo: null},
    ]
  }))

  // Initialize state for Final result
  const [finalResult, setFinalResult] = useState(() => {
    const initialSelectedTeams = {};
    // Initialize each of the final with winner and loser set to null
    Object.keys(finalsData).forEach((final) => {
      initialSelectedTeams[final] = {
        winner: null,
        winnerLogo: null,
        loser: null,
        loserLogo: null
      }
    });
    return initialSelectedTeams
  })

  // Declare and initialize FinalsData state for BronzeFinal
  const [bronzeFinalsData, setBronzeFinalsData] = useState(() => ({
    bronzeFinal: [
      { name: null, id: 1, logo: null},
      { name: null, id: 2, logo: null},
    ]
  }))

    // Initialize state for BronzeFinal result
const [bronzeFinalResult, setBronzeFinalResult] = useState(() => {
  const initialSelectedTeams = {};
  // Initialize each of the bronzeFinal with winner and loser set to null
  Object.keys(bronzeFinalsData).forEach((bronzeFinal) => {
    initialSelectedTeams[bronzeFinal] = {
      winner: null,
      loser: null,
    }
  });
  return initialSelectedTeams
})

const [userPrompt, setUserPrompt] = useState('Pick the Teams that will Top their pool!');

  useEffect(() => {
    setQuarterFinalsData({
      QF1: [
        { name: selectedTeams.C.top, id: 1, logo: selectedTeams.C.topLogo },
        { name: selectedTeams.D.second, id: 2, logo: selectedTeams.D.secondLogo},
      ],
      QF2: [
        { name: selectedTeams.B.top, id: 3, logo: selectedTeams.B.topLogo },
        { name: selectedTeams.A.second, id: 4, logo: selectedTeams.A.secondLogo },
      ],
      QF3: [
        { name: selectedTeams.D.top, id: 5, logo: selectedTeams.D.topLogo},
        { name: selectedTeams.C.second, id: 6, logo: selectedTeams.C.secondLogo},
      ],
      QF4: [
        { name: selectedTeams.A.top, id: 7, logo: selectedTeams.A.topLogo},
        { name: selectedTeams.B.second, id: 8, logo: selectedTeams.B.secondLogo},
      ],
    });
  }, [selectedTeams]);

  useEffect(() => {
    setSemiFinalsData({
      SF1: [
        { name: qfWinners.QF1.winner, id: 1, logo: qfWinners.QF1.logo},
        { name: qfWinners.QF2.winner, id: 2, logo: qfWinners.QF2.logo },
      ],
      SF2: [
        { name: qfWinners.QF3.winner, id: 3, logo: qfWinners.QF3.logo},
        { name: qfWinners.QF4.winner, id: 4, logo: qfWinners.QF4.logo },
      ]
    });
  }, [qfWinners])

  useEffect(() => {
    setFinalsData({
      final: [
        { name: semiFinalResult.SF1.winner, id: 1, logo: semiFinalResult.SF1.winnerLogo},
        { name: semiFinalResult.SF2.winner, id: 2, logo: semiFinalResult.SF2.winnerLogo},
      ]
  })
  }, [semiFinalResult])

  useEffect(() => {
    setBronzeFinalsData({
      bronzeFinal: [
        { name: semiFinalResult.SF1.loser, id: 1, logo: semiFinalResult.SF1.loserLogo},
        { name: semiFinalResult.SF2.loser, id: 2, logo: semiFinalResult.SF2.loserLogo},
      ]
    })
  }, [semiFinalResult])


  useEffect(() => {
    // Check if quarterFinalsData has been filled
    const isQFFilled = !containsNullValue(quarterFinalsData);

    // Check if semiFinalsData has been filled
    const isSFFilled = !containsNullValue(semiFinalsData);

    // Check if finalsData has been filled
    const isFinalFilled = !containsNullValue(finalsData);

    const finalHasWinner = Object.values(finalResult).some(
      (result) => result.winner !== null
    );

    const bronzeHasWinner = Object.values(bronzeFinalResult).some(
      (result) => result.winner !== null
    )

    if (finalHasWinner && bronzeHasWinner) {
      setUserPrompt('All set! Good Luck with your Predictions!')
    } else if (!isQFFilled) {
      setUserPrompt('Pick the Teams that will Top their Pool');
    } else if (!isSFFilled) {
      setUserPrompt('Pick the Quarter-Final Winners');
    } else if (!isFinalFilled) {
      setUserPrompt('Pick the Semi-Final Winners');
    } else {
      setUserPrompt('Pick the Final & Bronze Final Winner');
    }
  }, [quarterFinalsData, semiFinalsData, finalsData, finalResult, bronzeFinalResult]);


  // Function to handle team selection for Pool
  const handleTeamSelectPool = (poolName, position, teamName) => {
    const selectedTeamData = poolsData[poolName].find((team) => team.name === teamName);
    
    setSelectedTeams((prevSelectedTeams) => ({
      ...prevSelectedTeams,
      [poolName]: {
        ...prevSelectedTeams[poolName],
        [position]: teamName,
        [position + 'Logo']: selectedTeamData ? selectedTeamData.logo : null
      },
    }));
  };

  // Function to handle pool reset
  const handlePoolReset = (poolName) => {
    setSelectedTeams((prevSelectedTeams) => ({
      ...prevSelectedTeams,
      [poolName]: {
        top: null,
        topLogo: null,
        second: null,
        secondLogo: null
      },
    }));
  };

  // Function to handle winner selection for QF
  const handleQFWinnersSelect = (qfName, teamName) => {
    const selectedTeamData = quarterFinalsData[qfName].find((team) => team.name === teamName);

    setQfWinners((prevSelectedTeams) => ({
      ...prevSelectedTeams,
      [qfName]: {
        ...prevSelectedTeams[qfName],
        winner: teamName,
        logo: selectedTeamData ? selectedTeamData.logo : null
      },
    }));
  };

  // Function to handle QF Reset
  const handleQFWinnersReset = (qfName) => {
    setQfWinners((prevSelectedTeams) => ({
      ...prevSelectedTeams,
      [qfName]: {
        winner: null,
        logo: null
      },
    }))
  }

  // Function to handle team selection for SF
  const handleSFTeamSelect = (sfName, position, teamName) => {
    const selectedTeamData = semiFinalsData[sfName].find((team) => team.name === teamName);

    setSemiFinalResult((prevSelectedTeams) => ({
      ...prevSelectedTeams,
      [sfName]: {
        ...prevSelectedTeams[sfName],
        [position]: teamName,
        [position + 'Logo']: selectedTeamData ? selectedTeamData.logo : null
      },
    }))
  }

  // Function to handle team Reset for SF
  const handleSFReset = (sfName) => {
    setSemiFinalResult((prevSelectedTeams) => ({
      ...prevSelectedTeams,
      [sfName]: {
        winner: null,
        winnerLogo: null,
        loser: null,
        loserLogo: null
      },
    }))
  }

  // Function to handle team select for Final
  const handleFinalSelect = (finalName, position, teamName) => {
    const selectedTeamData = finalsData[finalName].find((team) => team.name === teamName);

    setFinalResult((prevSelectedTeams) => ({
      ...prevSelectedTeams,
      [finalName]: {
        ...prevSelectedTeams[finalName],
        [position]: teamName,
        [position + 'Logo']: selectedTeamData ? selectedTeamData.logo : null
      },
    }))
  }

  const handleFinalReset = (finalName) => {
    setFinalResult((prevSelectedTeams) => ({
      ...prevSelectedTeams,
      [finalName]: {
        winner: null,
        loser: null,
      },
    }))
  }

  const handleBronzeFinalSelect = (bronzeFinalName, position, teamName) => {
    setBronzeFinalResult((prevSelectedTeams) => ({
      ...prevSelectedTeams,
      [bronzeFinalName]: {
        ...prevSelectedTeams[bronzeFinalName],
        [position]: teamName
      },
    }))
  }

  const handleBronzeFinalReset = (bronzeFinalName) => {
    setBronzeFinalResult((prevSelectedTeams) => ({
      ...prevSelectedTeams,
      [bronzeFinalName]: {
        winner: null,
        loser: null,
      },
    }))
  }

  function containsNullValue(quarterFinalsData) {
    // Iterate through each property (QF1, QF2, etc.)
    for (const key in quarterFinalsData) {
      // eslint-disable-next-line no-prototype-builtins
      if (quarterFinalsData.hasOwnProperty(key)) {
        const qfArray = quarterFinalsData[key];
        // Check if any element in the qfArray has null values
        if (qfArray.some(qf => qf.name === null || qf.logo === null)) {
          return true; // Found a null value
        }
      }
    }
    return false; // No null values found
  }

  const handleStartOver = () => {
    window.location.reload(); // Reload the page
  };

  return (
    <div className="App">
      <div className='main-container'>
        <div className='main-header-div'>
          <h2 className='main-sub-title'><p className='main-sub-title-left'>ROAD TO</p><p className='main-sub-title-right'>THE FINAL</p></h2>
          <div className='main-header'>
            <img className='rwc-logo' src={rwcLogo2023} alt="" />
            <h1 className='main-header-text'>PREDICTIONS</h1>
          </div>
        </div>
        <h2 className='userPrompt'>{userPrompt}</h2>
        <div className="pools">
          {Object.keys(poolsData).map((poolName, index) => (
            <Pool
              key={poolName}
              poolName={poolName}
              teams={poolsData[poolName]}
              onSelect={(position, teamName) => handleTeamSelectPool(poolName, position, teamName)}
              onReset={() => handlePoolReset(poolName)}
              selectedTeams={selectedTeams[poolName] || {}}
              className={index === 0 ? "pool poolA" : index === 1 ? "pool poolB" : index === 2 ? "pool poolC" : "pool poolD"}
            />
          ))}
        </div>
        <div className='quarters'>
          {Object.keys(quarterFinalsData).map((qfName, index) => (
            <QuarterFinal
              key={qfName}
              qfName={qfName}
              teams={quarterFinalsData[qfName]}
              onSelect={(qfName, teamName) => {handleQFWinnersSelect(qfName, teamName)}}
              onReset={() => handleQFWinnersReset(qfName)}
              qfWinners={qfWinners[qfName] || {}}
              className={index === 0 ? "qf qf1" : index === 1 ? "qf qf2" : index === 2 ? "qf qf3" : "qf qf4"}
            />
          ))}    
        </div>
        <div className='semis'>
          {Object.keys(semiFinalsData).map((sfName, index) => (
            <SemiFinal 
              key={sfName}
              sfName={sfName}
              teams={semiFinalsData[sfName]}
              onSelect={(position, teamName) => handleSFTeamSelect(sfName, position, teamName)}
              onReset={() => handleSFReset(sfName)}
              semiFinalResult={semiFinalResult[sfName] || {}}
              className={index === 0 ? "semiFinal semiFinal1" : "semiFinal semiFinal2"}
            />
          ))}
        </div>
        <div className='finals'>
          {Object.keys(finalsData).map((finalName) => (
            <Final 
              key={finalName}
              finalName={finalName}
              teams={finalsData[finalName]}
              onSelect={(position, teamName) => handleFinalSelect(finalName, position, teamName)}
              onReset={() => handleFinalReset(finalName)}
              finalResult={finalResult[finalName] || {}}
              className={"final"}
            />
          ))}
        </div>
        <div className='bronzeFinals'>
          {Object.keys(bronzeFinalsData).map((bronzeFinalName) => (
            <Final 
              key={bronzeFinalName}
              finalName={bronzeFinalName}
              teams={bronzeFinalsData[bronzeFinalName]}
              onSelect={(position, teamName) => handleBronzeFinalSelect(bronzeFinalName, position, teamName)}
              onReset={() => handleBronzeFinalReset(bronzeFinalName)}
              finalResult={bronzeFinalResult[bronzeFinalName] || {}}
              className={"bronzeFinal"}
            />
          ))}  
        </div>
        <button className='start-over-btn' onClick={handleStartOver}>START OVER</button>
        <span className='copyright-footer'>©DewaldFourie 2023</span>
      </div>
    </div>
  );
}

export default App;

