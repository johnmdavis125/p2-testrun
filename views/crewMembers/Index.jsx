const React = require('react'); 

class Index extends React.Component {
    render(){
        const { crewMembers } = this.props; 
        return (
            <div>
                <h1>This is the Crew Members Index Page</h1>
                    <a href='/crewMembers/new'>Enter a New Crew Member's Info</a>
                <ul>
                    {
                        crewMembers.map((crewMember, i)=>{
                            return (
                                <li><a href={`/crewMembers/${crewMember._id}`}>{crewMember.name}</a><br/>
                                    {crewMember.rank}<br/>
                                    {crewMember.homePlanet}<br/>
                                    {crewMember.engineeringAccess ? `This member has access` : `This member does not have access`}

                                    <form action={`/crewMembers/${crewMember._id}?_method=DELETE`} method='POST'>
                                        <input type='submit' value='Delete Member'/>
                                    </form>

                                    <a href={`/crewMembers/${crewMember._id}/edit`}>Edit</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index; 