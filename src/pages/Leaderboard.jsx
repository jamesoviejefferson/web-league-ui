
import { useEffect , useContext, useState } from 'react'
import { LeagueServiceContext } from "../services/LeagueService";

function Leaderboard() {
  const leagueService = useContext(LeagueServiceContext)
  const [teams, setTeam] = useState([])
  
    useEffect(() => {
      load();
      // eslint-disable-next-line
    }, []);

    async function load() {
      await leagueService.fetchData();
      const leagueBoard = leagueService.getLeaderBoard();
      setTeam(leagueBoard);
      console.log(leagueBoard)
    }


  return (
    <div className='contain'>
      
      <h1 className="heading p-0">League Standings</h1>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col-7">Team Name</th>
            <th scope="col">MP</th>
            <th scope="col" className="gf">GF</th>
            <th scope="col" className="ga">GA</th>
            <th scope="col" className="gd">GD</th>
            <th scope="col">Points</th>
          </tr>
        </thead>
        <tbody>
          {
            teams.map((team, i) => (
              <tr key={i}>
                <th scope="row" className="col-7 table-cell-bold"><img src={`https://flagsapi.codeaid.io/${team.name}.png`} alt='' width="53px" height="37px" className="mr-2"/> {team.name}</th>
                <td className="table-cell">{team.played}</td>
                <td className="table-cell gf">{team.goalsFor}</td>
                <td className="table-cell ga">{team.goalsAgainst}</td>
                <td className="table-cell gd">{team.goalDifference}</td>
                <td className="table-cell-bold text-primary">{team.points}</td>
              </tr>
              
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Leaderboard