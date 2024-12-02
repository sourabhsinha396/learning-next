import { Button } from "@/components/ui/button";
import NavBar from "@/components/ui/navbar";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center flex-col">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Taxing Laughter: The Joke Tax Chronicles
        </h1>
        <Button className="mt-4">Click me</Button>
      </div>
    </div>
  );
}
