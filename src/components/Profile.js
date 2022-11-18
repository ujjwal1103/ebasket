
import AuthService from "../services/auth.service";
import axios from "axios";
const Profile = () => {
  // const[user,setuser] = useState()
  // const [product,setProduct] = useState({});
  const currentUser = AuthService.getCurrentUser();
  console.log(currentUser)
  


 const addUser= async(id)=>{
   
  let data = await axios.get("http://localhost:8084/product/9").catch(err=>console.log(err))
  let product = data.data
  console.log(product);
    let user = {
      firstName:"omraj",
      lastName:"wagh",
      username:currentUser.username,
      email:currentUser.email,
      products:[product],
      userImage:"image",
    }
    // console.log(product)
    console.log(user);

    axios.post("http://localhost:8084/api/v1/adduser",user).catch(err=>alert(err))
  }

  return (
    <div>
      <header >
        <h3>
          <strong>{currentUser.username.substring(0,1).toUpperCase() + currentUser.username.substring(1,currentUser.username.length)}</strong> Profile
        </h3>
      </header>
      
       
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul> 
      <button onClick={()=>{addUser()}}>add user</button> 
    </div>
  )
}

export default Profile;
