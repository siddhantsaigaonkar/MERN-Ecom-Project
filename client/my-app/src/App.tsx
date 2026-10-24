

import { Button } from "./components/ui/button";

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center gap-4">
      <button className="rounded bg-blue-600 px-4 py-2 text-white">
        Normal Tailwind Button
      </button>

      <Button>shadcn Button</Button>
    </div>
  );
}
