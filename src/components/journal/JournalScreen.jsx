import React from "react";
import NothingSelected from "./NothingSelected";
import Sidebar from "./Sidebar";
import NotesScreen from "../notes/NotesScreen";
import { useSelector } from "react-redux";

const JournalScreen = () => {
  const { active } = useSelector((state) => state.notes);

  return (
    <div className="journal__main-content">
      <Sidebar />
      <main>{active ? <NotesScreen /> : <NothingSelected />}</main>
    </div>
  );
};

export default JournalScreen;
