//import { useState } from "react";
import { useForm } from "../hooks/useForm";

const ClubStart = ({ onAddClub }) => {
  const initialState = {
    name: '',
    subject: '',
    project: '',
    description: '',
    leader: '',
  };

  const { formData, handleChange, reset } = useForm(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...formData }),
    };

    fetch("/api/clubs", configObj)
      .then((resp) => resp.json())
      .then((club) => {
        onAddClub(club);
        reset();
      });
  };

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Club</h3>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />

        <label htmlFor="subject">Subject: </label>
        <textarea
          id="subject"
          name="subject"
          onChange={handleChange}
          value={formData.subject}
        />

        <label htmlFor="project">Project/Beneficiary: </label>
        <input
          type="text"
          id="project"
          name="project"
          onChange={handleChange}
          value={formData.project}
        />

        <label htmlFor="description">Description: </label>
        <input
          type="text"
          id="description"
          name="description"
          onChange={handleChange}
          value={formData.description}
        />

        <label htmlFor="leader">Leader: </label>
        <input
          type="text"
          id="leader"
          name="leader"
          onChange={handleChange}
          value={formData.leader}
        />

        <button type="submit">Add Club</button>

        {/* DO NOT DELETE COMMENT BLOCK: it's good eg for future reference :-)
        <label htmlFor="phase">Phase</label>
        <select
          name="phase"
          id="phase"
          onChange={handleChange}
          value={formData.phase}
        >
          <option value="">Pick a Phase</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input
          type="text"
          id="link"
          name="link"
          onChange={handleChange}
          value={formData.link}
        /> */}
      </form>
    </section>
  );
};

export default ClubStart;
