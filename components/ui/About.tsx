"use client";
import { CardStack } from "../ui/card-stack";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <div id="about" className="max-w-7xl mx-auto px-8 py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-4xl font-semibold text-white px-6 lg:px-8">
          <span className="text-red-500">About</span> me
        </h2>
      </div>
      <div className="h-[40rem] flex items-center justify-center w-full">
        <CardStack items={CARDS} />
      </div>
    </div>
  );
}
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Schools Attended",
    designation: "Highschool-College",
    content: (
      <p>
        Holy Angel University(Grade 7), Baliti Integrated School(Grade 8-10),
        College of Our Lady of Mt. Carmel(Grade 11-12){" "}
        <Highlight>Don Honorio Ventura State University</Highlight>(1st-4th
        Year).📓
      </p>
    ),
  },
  {
    id: 1,
    name: "Skills",
    designation: "",
    content: (
      <p>
        My skills include being a good communicator, having strong computer
        skills, and <Highlight>programming</Highlight>.💻
      </p>
    ),
  },
  {
    id: 2,
    name: "Hobbies",
    designation: "",
    content: (
      <p>
        My hobbies include watching anime, playing online games, and working
        out.🎮
      </p>
    ),
  },
  {
    id: 3,
    name: "Favorite Quote",
    designation: "Erwin Smith",
    content: (
      <p>
        If you begin to regret, you&apos;ll dull your future decisions and let
        others make your choices for you. All that&apos;s left for you then is
        to die. Nobody can foretell the outcome.{" "}
        <Highlight>
          Each decision you make holds meaning only by affecting your decision
        </Highlight>
        .🫡
      </p>
    ),
  },
];

const Card = ({
  name,
  designation,
  content,
}: {
  name: string;
  designation: string;
  content: React.ReactNode;
}) => {
  return (
    <div className="bg-white text-black border border-black rounded-lg shadow-md p-6 m-4 w-[20rem]">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm italic text-gray-600">{designation}</p>
      <div>{content}</div>
    </div>
  );
};

export default Card;
