import {FC} from "react";
import {Card, CardContent} from "./shadcn-ui/card";
import {Button} from "./shadcn-ui/button";
import tsunami from "../assets/images/tsunami.png";

export const CardSuggestion: FC = () => {
  return (
    <Card className="mb-8 w-[280px] overflow-hidden rounded-lg">
      <div className="relative h-48">
        <img
          alt="Tsunami in Malika"
          className="absolute inset-0 h-full w-full rounded-t-lg object-cover"
          src={tsunami}
        />
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 px-4 py-2 text-white">
          <div className="text-xl font-semibold">
            <a
              href="post/[id]"
              className="transform transition-all duration-300 hover:scale-110 hover:text-primary"
            >
              Tsunami in Malika
            </a>
          </div>
          <div className="text-sm">June 27, 2021</div>
          <div className="text-xs">1,099 donations</div>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="text-sm text-gray-700">
          Emergency! A tsunami has just hit Malika, Tarasudi District. Help our
          affected brothers and sisters.
        </div>
        <div className="mt-4 flex items-center justify-between">
          <Button
            className="rounded bg-primary px-4 py-2 text-white hover:bg-secondary"
            variant="default"
          >
            Donate now
          </Button>
          <MessageSquareIcon className="text-gray-500" />
        </div>
      </CardContent>
    </Card>
  );
};

function MessageSquareIcon({className}: {className: string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
