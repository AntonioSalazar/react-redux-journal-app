import React from "react";
// import NothingSelected from "./NothingSelected";
import Sidebar from "./Sidebar";
import NotesScreen from "../notes/NotesScreen";

const JournalScreen = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />
      <main>
        {/* <NothingSelected /> */}
        <NotesScreen />
      </main>
    </div>
  );
};

export default JournalScreen;