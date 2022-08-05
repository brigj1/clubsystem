import UserCard from './UserCard'


function UserContainer({users}) {

    return (
     <div>
         <p><span>C</span>lub Members</p>
             {users.map(user => <UserCard  key={user.id} user={user}  />)}
     </div>
    );
  }
  
export default UserContainer