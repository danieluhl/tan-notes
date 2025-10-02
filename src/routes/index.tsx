import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center text-2xl">
      <h1>Welcome to TanStack</h1>
      <Button asChild>
        <Link to="/notes">
          Go to Notes App <ChevronRightIcon />
        </Link>
      </Button>
    </div>
  );
}
