import { useContext, useEffect, useState } from 'react'
import { LeagueServiceContext } from '../services/LeagueService'


function Schedule() {

  const leagueService = useContext(LeagueServiceContext) 
  const [matches, setMatches] = useState([])

    useEffect(() => {
      load();
      // eslint-disable-next-line
    }, []);

  async function load() {
    // Load data from backend
    await leagueService.fetchData();
    
    // get matches from leagues service
      const league = leagueService.getMatches();
      setMatches(league);
    }

  // Convert match date from milisec to Date
   function formatMilliseconds(ms) {
    const date = new Date(ms);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Add leading zeros to day, month, hours, and minutes if necessary
    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const formattedMonth = month < 10 ? `0${month}` : `${month}`;
    const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

    return `${formattedDay}.${formattedMonth}.${year} ${formattedHours}:${formattedMinutes}`;
  }


  return (
    <div className='contain'>
      <h1 className="heading p-0"> League Schedule</h1>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col" className="date">Date/Time</th>
            <th scope="col" className="stadium">Stadium</th>
            <th scope="col" className="text-sm-right">Home Team</th>
            <th scope="col"></th>
            <th scope="col">Away Team</th>
          </tr>
        </thead>
        <tbody>
          {
            matches.map((match, i) => (
              <tr key={i}>
                <th className="table-cell date" scope="row">{formatMilliseconds(match.matchDate)}</th>
                <td className="stadium">{match.stadium}</td>
                <td className="table-cell-bold text-sm-right">{match.awayTeam} <img src={`https://flagsapi.codeaid.io/${match.awayTeam}.png`} alt='' width="53px" height="37px" className="ml-2"/> </td>
                <td className="table-cell-bold">{match.homeTeamScore} : {match.awayTeamScore}</td>
                <td className="table-cell-bold"> <img src={`https://flagsapi.codeaid.io/${match.homeTeam}.png`} alt='' width="53px" height="37px" className="mr-2"/> {match.homeTeam}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Schedule