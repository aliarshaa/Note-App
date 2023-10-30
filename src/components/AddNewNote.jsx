import {useState} from "react";

function AddNewNote({onAddNote}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return null;

    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    onAddNote(newNote);
    setTitle("");
    setDescription("");
  };

  return (
    // in below code i wrote h-60 in className. this is because of sticky position. the sticky position doesn't work in a h-full, so i had to specify a height for this section.
    <section className="felx flex-col gap-5 sticky top-10 h-60">
      <h2 className="p-2 flex justify-center items-center text-xl">
        Add New Note
      </h2>
      <form action="" className="grid gap-6" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          className="shadow-md rounded border border-1 p-2 col-span-1 hover:border-cyan-500 w-full focus:border-cyan-500 delay-100 duration-500 outline-none"
          placeholder="note title ..."
        />
        <input
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          type="text"
          className="shadow-md rounded border border-1 p-2 col-span-1 hover:border-cyan-500 w-full focus:border-cyan-500 delay-100  duration-500 outline-none"
          placeholder="note description ..."
        />
        <button
          type="submit"
          className="bg-cyan-500 text-white p-2 shadow-md rounded-md hover:shadow-lg hover:bg-cyan-600 delay-100 duration-500"
        >
          Add New Note
        </button>
      </form>
    </section>
  );
}

export default AddNewNote;
