import AddNewNote from "./components/AddNewNote";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("");

  // const handleAddNote = (newNote) => {
  //   setNotes((prevNotes) => [...prevNotes, newNote]);
  // };
  function handleAddNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function handleSortNote(e) {
    return setSortBy(e.target.value);
  }

  function handleDeleteNote(id) {
    return setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  }

  function handleCompleteNote(e) {
    const noteId = Number(e.target.value);
    return setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id == noteId ? { ...note, completed: !note.completed } : note
      )
    );
  }

  return (
    <div className="container mx-auto w-3/5 p-4">
      <Header notes={notes} sortBy={sortBy} onSort={handleSortNote} />
      <hr />
      <main className="grid grid-cols-3 mt-5 gap-x-10">
        <AddNewNote onAddNote={handleAddNote} />
        <NoteList
          notes={notes}
          sortBy={sortBy}
          onDelete={handleDeleteNote}
          onComplete={handleCompleteNote}
        />
      </main>
    </div>
  );
}

export default App;
