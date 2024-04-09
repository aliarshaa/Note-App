import "./index.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import Header from "./components/Header";
import { useState } from "react";
import { NotesProvider } from "./context/notesContext";
function App() {
  const [sortBy, setSortBy] = useState("");

    // const handleAddNote = (newNote) => {
  //   dispatch({type: 'add', payload: newNote})
  // };

  // const handleDeleteNote = (id) => {
  //   dispatch({type:'delete', payload: id})
  // };

  // const handleCompleteNote = (e) => {
  //   const noteId = Number(e.target.value);
  //   dispatch({type:'complete', payload: noteId})
  // };

  return (
    <NotesProvider><div className="container mx-auto w-3/5 p-4">
    <Header  sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)}/>
    <hr />
    <main className="grid grid-cols-3 mt-5 gap-x-10">
      <AddNewNote  />
      <NoteList
        sortBy={sortBy}
      />
    </main>
  </div></NotesProvider>
  );
}

export default App;
