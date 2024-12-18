import { FocusCards } from "@/components/ui/focus-cards";

export function Projects() {
  const cards = [
    {
      title: "Keni Food Corner",
      src: "/foodcorner.png",
    },
    {
      title: "Basic Calculator",
      src: "/calcu.png",
    },
    {
      title: "Login System UI",
      src: "/loginsystem.png",
    },
    {
      title: "My SQL",
      src: "/sql.png",
    },
    {
      title: "Diary & To do List",
      src: "/todo.jpg",
    },
    {
      title: "Arithmetic Calculator",
      src: "/arithmeticcalcu.jpg",
    },
    {
      title: "Dhvsu Room Checker",
      src: "/roomchecker.png",
    },
    {
      title: "Netflix Clone",
      src: "/netflix.png",
    },
  ];

  return (
    <div id="projects" className="max-w-7xl mx-auto px-8 py-18">
    <section className="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-white mb-6">
        <span className="text-red-500">Projects</span> and Collaborations
      </h2>
      <FocusCards cards={cards} />
    </section>
    </div>
  );
}
