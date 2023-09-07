// this component handles the editing of a post

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editInfoPost } from "../API/info";



export default function CreateInfoPost(infoId) {
	const [newGametitle, setNewGametitle] = useState("");
	const [newTheme, setNewTheme] = useState("");
    const [newYear, setNewYear] = useState("");
    const [newExpansions, setNewExpansions] = useState(false);//if I put false here do it make it into a boolean?how can I make this into a t/f
    const [submitData, setSubmitData] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
	// const [newRatelineid, setNewRatelineid] = useState("");
	// const [newListlineid, setNewListlineid] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const createInfoPost = await createInfoPost( newGametitle, newTheme, newYear, newExpansions);
            setSubmitData(createInfoPost);
            console.log({ newGametitle });
            setNewGametitle("");
            alert("Created a new info post!")
            navigate("/infoPosts");
          } catch (error) {
            console.error(error);
            setError("Failed to create a new info post");
          }
        }
        return (
            <>
              <div className="creatingpost">
                <h1 className="infopostTitle">Create a Post</h1>
                <form className="infoPostForm" onSubmit={handleSubmit}>
                  {error && <p>{error}</p>}
                  <div>
                    <label>
                      <b>Borad Game Title: </b>
                    </label>
                    <input
                      type="text"
                      name="newGametitle"
                      required
                      value={newGametitle}
                      onChange={(event) => setNewGametitle(event.target.value)}
                    />
                    <br />
                    <label className="theme">
                      <b>Theme: </b>
                    </label>
                    <input
                      type="text"
                      name="newTheme"
                      required
                      value={newTheme}
                      onChange={(event) => setNewTheme(event.target.value)}
                    />
                    <br />
                    <label className="year">
                      <b>Year: </b>
                    </label>
                    <input
                      type="text"
                      name="newYear"
                      required
                      value={newYear}
                      onChange={(event) => setNewYear(event.target.value)}
                    />
                    <br />
                    <label>
                      <b>Expansions: </b>
                    </label>
                    <input
                      type="text"
                      name="newExpansions"
                      required
                      value={newExpansions}
                      onChange={(event) => setNewExpansions(event.target.value)}
                    />
                    <br />
                    <br />
                  </div>
                  <button className="newInfoPostButton">CREATE POST</button>
                </form>
              </div>
            </>
          );
        }