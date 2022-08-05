//import { useState } from "react";
//import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ClubListRecord = ({
  club,
  onDeleteClub,
  //onUpdateClub,
}) => {
  const { id, name, subject, project, description, leader } = club;
      //id, image, about, name, link, phase

  //function handleEditClick() {
    //onUpdateClub(club);
  //}

  const handleDeleteClick = () => {
    fetch(`/api/clubs/${id}`, {
      method: "DELETE",
    });
    onDeleteClub(club)
      .then((resp) => console.log(resp))
      .then(onDeleteClub(club));  // umm: why the second onDeleteClub?
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{subject}</td>
      <td>{project}</td>
      <td>{description}</td>
      <td>{leader}</td>
      <td>
        {/* <button type="button" className="btn btn-primary" onClick={handleEditClick}> */}
        <button type="button" className="btn btn-primary" >
          <Link to="/clubs/:id/edit">
            Edit Club
          </Link>
        </button>
      </td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleDeleteClick}>
          Delete Club
        </button>
      </td>
    </tr>
  );

};

export default ClubListRecord;

//   const datarow = [
//     id, name, subject, project, description, leader
//   ]

//   // for className="record"> - apropos of nothing; can change/use some other class name
//   return (
//     <li className="record">
//       <figure className="image">
//         <img src={image} alt={name} />
//       </figure>

//       <section className="details">
//         <h4>{name}</h4>
//         <p>{about}</p>
//         {link ? (
//           <p>
//             <a href={link}>Link</a>
//           </p>
//         ) : null}
//       </section>

//       <footer className="extra">
//         <span className="badge blue">Phase {phase}</span>
//         <div className="manage">
//           <Link to={`/api/clubs/${id}/edit`} className="button">
//             Edit
//           </Link>
//           <button onClick={handleDeleteClick}>
//             Delete
//           </button>
//         </div>
//       </footer>
//     </li>
//   );
