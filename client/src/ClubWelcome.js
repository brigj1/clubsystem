// client/src/ClubWelcome.js
import { useState, useEffect } from "react";
//import { useState } from "react";
import { Switch, Link, Route, Redirect, useHistory } from "react-router-dom";

//import Header from "./components/Header";
//import Signup from "./components/Signup";
import EditUserForm from "./components/EditUserForm";
//import ClubManage from "./components/ClubManage";
import ClubList from "./components/ClubList";
import Navbar from "./components/Navbar";  // can send to a User or Club component
import ClubStart from "./components/ClubStart";
import ClubEdit from "./components/ClubEdit";

//function App()
function ClubWelcome({ currentUser, setCurrentUser, handleLogout }) {
  const history = useHistory();
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    fetch("/api/clubs")
      .then((resp) => resp.json())
      .then((clubs) => setClubs(clubs));
  }, []);

  const onAddClub = (newClub) => {
    setClubs((clubs) => [...clubs, newClub]);
  };

  const onDeleteClub = (deletedClub) => {
    const updatedClubs = clubs.filter(
      (club) => club.id !== deletedClub.id
    );
    setClubs(updatedClubs);
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


  function xhandleLogout() {
    //setUser(null);
    fetch(`/api/logout`, {
      // credentials: 'include', // xme
      method: 'DELETE'
    })
    .then(res => {
      if (res.ok) {
        setCurrentUser(null)
        history.push('/')
      }
    })
  }

  return (
    <div>
      <div className="App">
        {/* <Header user={user} onLogout={handleLogout} />   xme */}
        {/* <Header currentUser={currentUser} handleLogout={handleLogout}/> */}
        <Navbar
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
          handleLogout={handleLogout}
        />
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
          <Route path='/users/:id'>
            <EditUserForm setCurrentUser={setCurrentUser} />
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
        <h2>Manage your Clubs</h2>
        <p>
          Check out the existing clubs, join the ones you'd like, or start a new one!
        </p>
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
      </div>
    </div>
  );
}
          // <Route path='/users/new'></Route>

export default ClubWelcome;