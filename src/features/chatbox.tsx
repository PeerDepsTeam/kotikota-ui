import {useState} from "react";
import {motion} from "framer-motion";
import {Button} from "@/components/shadcn-ui/button.js";
import {User} from "@/services/api/gen";
import {Input} from "@/components/shadcn-ui/input.tsx";
import {SendIcon} from "lucide-react";

export const Chatbox = ({user}: {user: User}) => {
  const [open, setOpen] = useState(false);

  function show() {
    setOpen(!open);
  }

  return (
    <div className="fixed bottom-10 left-0 w-20 z-10">
      <div className="relative py-6">
        {open && (
          <motion.div
            initial={{opacity: 0, translateX: -50}}
            animate={{opacity: 1, translateX: 0}}
            transition={{transition: 1, delay: 0.3}}
            className="z-100 absolute bottom-16 left-10 w-80 rounded-[8px] bg-white p-6 shadow dark:border-gray-700"
          >
            <h2 className="text-bold text-xl text-gray-800">
              Send message to {user.username}
            </h2>
            <div className="my-6 flex gap-2 justify-between">
              <Input />
              <SendIcon className="cursor-pointer" onClick={() => setOpen(false)} />
            </div>
          </motion.div>
        )}
        <div
          className="absolute m-2 flex h-12 w-12 rounded-[100%] bg-yellow-500"
          onClick={show}
        >
          <svg
            className="m-auto h-6 w-6 text-white dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M3 6c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6.6l-2.9 2.6c-1 .9-2.5.2-2.5-1.1V17H5a2 2 0 0 1-2-2V6Zm4 2a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H7Zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm-8 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Zm5 0a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
