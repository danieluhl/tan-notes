import { useForm } from "@tanstack/react-form";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useStore } from "@tanstack/react-store";
import { ChevronLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { notesStore, updateNote } from "@/lib/notes-store";

export const Route = createFileRoute("/notes/$noteId")({
  component: Note,
});

function Note() {
  const { noteId } = Route.useParams();

  const note = useStore(
    notesStore,
    (state) => state.notes.filter((note) => note.id === noteId)[0],
  );

  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      title: note?.title,
      content: note?.content,
    },
    onSubmit: ({ value }) => {
      updateNote({ id: noteId, ...value });
      navigate({ to: "/notes" });
    },
  });

  return (
    <div className="flex gap-8">
      <Button onClick={() => navigate({ to: "/notes" })}>
        <ChevronLeftIcon />
        Back
      </Button>
      {!note && <h1>Didn't find note</h1>}
      {note && (
        <form
          className="flex flex-col gap-4 w-full"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <form.Field name="title">
            {(field) => (
              <Input
                name="title"
                type="text"
                value={field.state.value}
                className="text-4xl md:text-4xl sm:text-4xl p-9"
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          </form.Field>

          <form.Field name="content">
            {(field) => (
              <Textarea
                name="content"
                className="p-9 text-3xl md:text-3xl h-96 w-full"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          </form.Field>

          <div className="flex justify-end">
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
            >
              {([canSubmit, isSubmitting]) => (
                <Button
                  size="lg"
                  type="submit"
                  disabled={!canSubmit || isSubmitting}
                >
                  {isSubmitting ? "..." : "Save"}
                </Button>
              )}
            </form.Subscribe>
          </div>
        </form>
      )}
    </div>
  );
}
