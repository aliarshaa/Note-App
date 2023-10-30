function Header({notes, sortBy, onSort}) {
  const allNotes = notes.length;

  return (
    <header className="flex justify-around w-full my-1 p-4">
      <h1 className="flex justify-center items-center text-2xl">
        {`My notes(${allNotes})`}
      </h1>
      <select
        name=""
        id=""
        value={sortBy}
        onChange={onSort}
        className="border rounded-md p-2 bg-white shadow-md hover:border-cyan-500 delay-100 duration-500"
      >
        <option value="latest">Sort based on latest notes</option>
        <option value="earliest">Sort based on earliest notes</option>
        <option value="completed">Sort based on completed notes</option>
      </select>
    </header>
  );
}

export default Header;
