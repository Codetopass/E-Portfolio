import Image from "next/image";

export default function Tools() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-4xl font-semibold text-white">
          <span className="text-red-500">Tools</span> used
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            alt="HTML"
            src="/html5.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="css"
            src="/ccs3.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="javascript"
            src="/javascript2.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="python"
            src="/python2.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="bootstrap"
            src="/bootstrap.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="nextjs"
            src="/nextjs.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="react"
            src="/reactjs.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="Tailwind"
            src="/tailwind.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
          />
           <Image
            alt="java"
            src="/java.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
          />
           <Image
            alt="dart"
            src="/tailwind.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
}
