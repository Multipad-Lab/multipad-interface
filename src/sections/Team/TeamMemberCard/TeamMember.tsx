import CardHover from "src/components/cardHover"
import TeamMemberStyleWrapper from "./TeamMember.style"

const TeamMember = ({ avatar, name, designation }: any) => {
  return (
    <TeamMemberStyleWrapper className='team-item'>
      <img src={avatar} alt='Team-thumb' />
      <h4 className='team-title mb-8'>
        {/* <a href='/team-details'>{name}</a> */}
        <p>{name}</p>
      </h4>
      <div className='dsc'>{designation}</div>

      <CardHover />
    </TeamMemberStyleWrapper>
  )
}

export default TeamMember
