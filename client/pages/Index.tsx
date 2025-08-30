import { Hero } from "@/components/site/Hero";
import { Teams } from "@/components/site/Teams";
import { Car } from "@/components/site/Car";
import { Tracks } from "@/components/site/Tracks";
import { TyreType } from "@/components/site/Technology";

export default function Index() {
  return (
    <main>
      <Hero />
      <Teams />
      <Tracks />
      <TyreType />
    </main>
  );
}
