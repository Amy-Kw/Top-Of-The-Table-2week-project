import React from "react";
import { useNavigate } from "react-router-dom";

export default function InfoListName({ infoId }) {
  const navigate = useNavigate();
  return (
    <div>
      <h3>{infoId.gametitle}</h3>
      <button
        onClick={() => {
          navigate(`/${gametitle.infoId}`);
        }}
      >
        See Details
      </button>
    </div>
  );
}