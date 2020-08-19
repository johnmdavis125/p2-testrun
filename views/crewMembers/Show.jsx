const React = require('react'); 

class Show extends React.Component {
    render(){
        const { name, rank, homePlanet, engineeringAccess} = this.props.crewMember; 
        return (
            <div>
                <h1>Crew Member Show Page</h1>
                <h4>{name}</h4>
                <h6>{rank}</h6>
                <h6>{homePlanet}</h6>
                <p>{engineeringAccess ? `This member has engineering access` : `This member does not have engineering access`}</p>

                <a href='/crewMembers'>Back to Index</a>
            </div>
        )
    }
}

module.exports = Show; 