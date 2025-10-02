import { createFileRoute } from "@tanstack/react-router";
import { Link } from "lucide-react";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="text-center">
      <Link href=""></Link>
    </div>
  );
}
