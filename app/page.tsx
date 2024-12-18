import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/ui/About";
import Tools from "@/components/Tools";
import { Contacts } from "@/components/Contacts";


export default function Home() {
  return (
    <div className="bg-gray-900">
      <Header />
      <Hero />
      <About /> 
      <Projects />
      <Tools />
      <Contacts />
    </div>
  );
}
