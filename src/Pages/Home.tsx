import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../App";
import { IUser } from "../interfaces";

export default function HomePage(): JSX.Element {
  const [users, setUsers] = useState<IUser[]>([])
  
  useEffect(()=>{
    const endpoint = url + "/users"

    const fetchUserNames = async() => {
      const {data} = await axios.get(endpoint)
      setUsers(data) 
    }
    fetchUserNames()
  }, []) 
  
  
  return (
    <div>
      <select>

      {users.map(user =>
       <option key = {user.user_name} value={user.user_name}>{user.user_name}</option>
      )}
        </select>
      <p>Home</p>
    </div>
  );
}
