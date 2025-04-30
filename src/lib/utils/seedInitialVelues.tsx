"use client";

import { initialDataBase } from "../actions";

export const InitialDbButton = () => {
  return (
    <button
      className="button"
      onClick={() => {
        initialDataBase()
          .then(async () => {
            console.log("Initial data created successfully");
          })
          .catch(async (e) => {
            console.error(e);
          });
      }}
    >
      initial Data
    </button>
  );
};
