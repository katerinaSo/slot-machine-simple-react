import React from "react";
import "./App.css";

const Machine = ({ choices }) => {
  const list = choices();
  const win =(list[0] === list[1] && list[1] === list[2])
  return (
    <div className="choices">
      {list.map((l, i) => {
        return (
          <span key={i} className="emoji">
            {(l === "1" && "🎸") || (l === "2" && "🥁") || (l === "3" && "🏎")}
          </span>
        );
      })}
      <div className={win?'winner':'loser'}>
        {win
          ? "!!!!!!!!winner!!!!!!!!!"
          : "not this time..."}
      </div>
    </div>
  );
};
Machine.defaultProps = { choices: ["1", "2", "3"] };

export default Machine;
