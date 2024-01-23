import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import CoffeeImage from "@/public/images/coffee.jpg";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>
        Hello,{" "}
        {session ? <span>{session.user!.name}</span> : <span>world</span>}!!!
      </h1>
      <Image width={400} src={CoffeeImage} alt="Image of coffee being poured" />
    </main>
  );
}
