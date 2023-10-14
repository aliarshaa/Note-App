// import { useState } from "react";
import NoteStatus from "./NoteStatus";

function NoteList({ notes, onDelete, onComplete, sortBy }) {
  let sortedNotes = notes;
  if (sortBy == "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    ); // a-b = a > b ? 1 : -1
  if (sortBy == "latest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    ); // b-a = a > b ? -1 : 1
  if (sortBy == "completed")
    sortedNotes = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );

  return (
    <section className="col-span-2 justify-center w-full">
      <div className="mt-3 px-5 grid gap-y-5">
        <NoteStatus notes={notes} />

        {sortedNotes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}
      </div>
    </section>
  );
}

function NoteItem({ note, onDelete, onComplete }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="w-full rounded-lg p-3 grid gap-1 border shadow-md">
      <div className="flex justify-between">
        <h3 className={`font-bold ${note.completed ? " line-through " : ""}`}>
          {note.title}
        </h3>
        <div className="flex gap-3 justify-center items-center pt-1">
          <span
            onClick={() => {
              onDelete(note.id);
            }}
            className="flex
            justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.2em"
              viewBox="0 0 448 512"
              className="text-red-400 fill-current w-5 h-5 cursor-pointer hover:text-red-600"
            >
              <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
            </svg>
          </span>
          <span
            className="flex
            justify-center items-center"
          >
            <input
              type="checkbox"
              className="w-5 h-5 rounded-md"
              id={note.id}
              name={note.id}
              value={note.id}
              checked={note.onComplete}
              onChange={onComplete}
            />
          </span>
        </div>
      </div>
      <div>
        <p className="text-gray-400">{note.description}</p>
      </div>
      <hr />
      <p className="text-gray-400 flex justify-center items-center text-sm">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </p>
    </div>
  );
}

export default NoteList;
