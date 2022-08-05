// client/src/componenets/ClubManage.js
import { useState, useEffect } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
//import { useHistory } from "react-router-dom";

//import Header from "./components/Header";
import ClubStart from "./ClubStart";
import ClubList from "./ClubList";
import ClubEdit from "./ClubEdit";
//import EditUserForm from "./components/EditUserForm";
//import Navbar from "./components/Navbar";  // can send to a User or Club component

//function App()
function ClubManage({ currentUser, setCurrentUser, handleLogout }) {
  const [clubs, setClubs] = useState([]);
  //const history = useHistory();

  useEffect(() => {
    fetch("/api/clubs")
      .then((resp) => resp.json())
      .then((clubs) => setClubs(clubs));
  }, []);

  const onAddClub = (newClub) => {
    setClubs((clubs) => [...clubs, newClub]);
  };

  const onUpdateClub = (updatedClub) => {
    const updatedClubs = clubs.map((ogClub) => {
      if (ogClub.id === updatedClub.id) {
        return updatedClub;
      } else {
        return ogClub;
      }
    });
    setClubs(updatedClubs);
  };

  // looks like JUNK here:
  // const onSelectClub = (selectedClub) => {
  //   const clubInfoToEdit = 
  //   setFormData({ ...formData, selectedClub });
  //   const updatedClubs = clubs.filter(
  //     (club) => club.id !== deletedClub.id
  //   );
  //   setClubs(updatedClubs);
  // };

  const onDeleteClub = (deletedClub) => {
    const updatedClubs = clubs.filter(
      (club) => club.id !== deletedClub.id
    );
    setClubs(updatedClubs);
  };

  // function xhandleLogout() {
  //   //setUser(null);
  //   fetch(`/api/logout`, {
  //     // credentials: 'include', // xme
  //     method: 'DELETE'
  //   })
  //   .then(res => {
  //     if (res.ok) {
  //       setCurrentUser(null)
  //       history.push('/')
  //     }
  //   })
  // }

  return (
    <div>
        <h2>Manage your Clubs</h2>
        <p>
          Check out the existing clubs, join the ones you'd like, or start a new one!
        </p>
        {/* <ClubList setCurrentUser={setCurrentUser} />
        <ClubStart setCurrentUser={setCurrentUser} /> */}
        <Link to="/clubs" >
          <h1>
            Existing Clubs
          </h1>
        </Link>
        <Link to="/clubs/new" >
          <h1>
            Start a New Club
          </h1>
        </Link>
      <div className="App">
        {/* <Header user={user} onLogout={handleLogout} />   xme */}
        {/* <Header currentUser={currentUser} handleLogout={handleLogout}/> */}
        {/* <Navbar
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
          handleLogout={handleLogout}
        /> */}
        <Switch>
          {/* <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route exact path="/login">
            <Login onLogin={handleLogin} />
          </Route>
          <Route path='/signup'>
            <Signup setCurrentUser={setCurrentUser} />
          </Route> */}
          <Route exact path='/clubs/new'>
            <ClubStart onAddClub={onAddClub} currentUser={currentUser} setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path='/clubs/:id/edit'>
            <ClubEdit onUpdateClub={onUpdateClub} currentUser={currentUser} setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path="/clubs">
            <ClubList
              clubs={clubs}
              onDeleteClub={onDeleteClub}
              onUpdateClub={onUpdateClub}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          </Route>
          <Redirect to="/clubs" />
        </Switch>
        <footer>
        </footer>
      </div>
    </div>
  );
}
          // <Route path='/users/new'></Route>

export default ClubManage;