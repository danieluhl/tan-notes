import { Store } from "@tanstack/react-store";

type Note = { id: string; title: string; content: string };

const notesStore = new Store({
  notes: [
    { id: "1", title: "Note 1", content: "test" },
    { id: "2", title: "Note 2", content: "test" },
    { id: "3", title: "Note 3", content: "test" },
    { id: "4", title: "Note 4", content: "test" },
    { id: "5", title: "Note 5", content: "test" },
    { id: "6", title: "Note 6", content: "test" },
    { id: "7", title: "Note 7", content: "test" },
    { id: "8", title: "Note 8", content: "test" },
    { id: "9", title: "Note 9", content: "test" },
  ],
});

const updateNote = (newNote: Note) => {
  notesStore.setState((prev) => {
    const index = prev.notes.findIndex((note) => note.id === newNote.id);
    if (index === -1) {
      return prev;
    }
    prev.notes[index] = newNote;
    // todo: test if we need a new obj here or not
    return { ...prev };
  });
};

export { notesStore, updateNote };
