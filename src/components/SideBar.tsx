import { Menu, PlusIcon } from "lucide-react";
import { useState } from "react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      className={`relative flex flex-col justify-start items-start h-screen ${
        isOpen ? "w-32 sm:w-52" : "w-14 sm:w-16"
      }  bg-gray-800 px-3 sm:px-4 text-white transition-all duration-300 ease-in-out`}
    >
      <div
        className="z-50 text-center flex items-center justify-center hover:cursor-pointer mt-10 p-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="lg:w-6 lg:h-6 w-5 h-5" />
      </div>
      <div className="text-white hover:cursor-pointer flex justify-start items-center gap-3 mt-16">
        <div className="bg-gray-500 p-1 rounded-lg hover:bg-gray-600 transition-colors duration-200">
          {" "}
          <PlusIcon className="lg:w-6 lg:h-6 w-5 h-5" />
        </div>
        <p className={`font-poppins ${isOpen ? "opacity-100" : "opacity-0"} transition-all duration-300 text-[18px] md:text-base`}>
          New
        </p>
      </div>
      <div
        className={`flex flex-col gap-6 justify-between items-start mt-24 ${
          isOpen ? "opacity-100" : "opacity-0"
        } transition-all duration-300 `}
      >
        <p className="font-montserrat text-[18px] md:text-xl">Chats</p>
        <div className="flex flex-col text-[14px] md:text-sm gap-2">
          <p className="font-poppins">Chat 1</p>
          <p className="font-poppins">Chat 2</p>
          <p className="font-poppins">Chat 3</p>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
