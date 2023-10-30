function NoteStatus({notes}) {
  const allNotes = notes.length;
  const completedNotes = notes.filter((n) => n.completed).length;
  const unCompletedNodes = allNotes - completedNotes;

  if (!allNotes)
    return (
      <h2 className="flex justify-center items-center">
        No notes has already been added.
      </h2>
    );
  else
    return (
      <div>
        <ul className="flex justify-between w-full pb-2">
          <li className="">
            All
            <span className="bg-slate-300 py-1 px-2 rounded-full text-xs">
              {allNotes}
            </span>
          </li>
          <li>
            Completed
            <span className="bg-slate-300 py-1 px-2  rounded-full text-xs">
              {completedNotes}
            </span>
          </li>
          <li>
            Open
            <span className="bg-slate-300 py-1 px-2 rounded-full text-xs">
              {unCompletedNodes}
            </span>
          </li>
        </ul>
      </div>
    );
}

export default NoteStatus;
