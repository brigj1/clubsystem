// client/src/componenets/ClubList.js
import ClubListRecord from "./ClubListRecord";
//import { useState } from "react";

const ClubList = ({
  //enterProjectEditModeFor,
  clubs,
  onUpdateClub,
  onDeleteClub,
  //currentUser,
  //setCurrentUser,
}) => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const searchResults = clubs.filter((club) => {
//     return club.name.toLowerCase().includes(searchQuery.toLowerCase());
//   });

  //const showClubRecords = searchResults.map((club) =>
  const showClubRecords = clubs.map((club) => {
    return (
      <ClubListRecord
        key={club.id}
        club={club}
        // enterProjectEditModeFor={enterProjectEditModeFor}
        onDeleteClub={onDeleteClub}
        onUpdateClub={onUpdateClub}
      />
    );
  });

  //const handleOnChange = (e) => setSearchQuery(e.target.value);

  return (
    <section>
      <h2>Clubs</h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Subject</th>
            <th scope="col">Project</th>
            <th scope="col">Description</th>
            <th scope="col">Leader</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>{showClubRecords}</tbody>
      </table>

      {/* Hmm, what is this?
      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input type="text" placeholder="Search..." onChange={handleOnChange} />

      <ul className="cards">{showClubRecords}</ul> */}
    </section>
  );
};

export default ClubList;
