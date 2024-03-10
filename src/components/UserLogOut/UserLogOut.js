import {logOut} from '../../utilities/users-service'
import { LogOut } from 'lucide-react';
export default function UserLogOut(
    {user, setUser}
    ){
    function handleLogOut() {
        logOut();
        setUser(null);
      }
        
    return(
        <>
        <div onClick = {handleLogOut}><LogOut size={48}/></div> 
        </>
    )
}