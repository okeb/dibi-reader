import { Card } from "@mantine/core";
import Image from "next/image";
import { TextGenerateEffect } from "../../components/base/verset";

export default function Home() {
  const sent = "Celui donc qui aura renversé l'un de ces plus petits commandements et qui aura ainsi enseigné les gens, sera appelé le plus petit dans le Royaume des cieux. Mais celui qui les observera et qui enseignera à les observer, celui-là sera appelé grand dans le Royaume des cieux."
  return (
    <main>
      <TextGenerateEffect words={sent} />
    </main>
  );
}
