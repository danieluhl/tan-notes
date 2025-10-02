import { createFileRoute, Link } from "@tanstack/react-router";
import { useStore } from "@tanstack/react-store";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { notesStore } from "@/lib/notes-store";

export const Route = createFileRoute("/notes/")({
  component: NotesComponent,
});

function NotesComponent() {
  const notes = useStore(notesStore, (state) => state.notes);
  return (
    <div className="grid place-items-center">
      <header className="flex gap-4 justify-between items-center py-12">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button asChild>
          <Link to="/notes/$noteId" params={{ noteId: "1" }}>
            <PlusIcon />
          </Link>
        </Button>
      </header>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link to="/notes/$noteId" params={{ noteId: note.id }}>
              {note.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
