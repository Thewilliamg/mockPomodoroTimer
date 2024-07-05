import Image from "next/image";
import Navbar from "../components/navbar"
import Container from "../components/container"

export default function Home() {
  return (
    <main className="flex">
      <div className="w-52 bg-slate-600">
        <Navbar />
      </div>
      <div>
        <Container />
      </div>
    </main>
  );
}
