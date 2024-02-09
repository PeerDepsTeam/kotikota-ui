import {FC} from "react";
import {Card, CardContent} from "./shadcn-ui/card";
import {Button} from "./shadcn-ui/button";
import tsunami from "../../public/images/tsunami.png";

export const CardSuggestion: FC = () => {
  return (
    <Card className=" w-[314px] overflow-hidden rounded-lg">
      <img
        alt="Tsunami in Malika"
        className="h-48 w-full object-cover"
        height="200"
        src={tsunami}
        style={{
          aspectRatio: "314/200",
          objectFit: "cover",
        }}
        width="314"
      />
      <CardContent className="p-4">
        <div className="flex flex-wrap justify-between">
          <div className="flex items-center  justify-center text-xs text-gray-500">
            June 27, 2021
          </div>
          <div className="flex items-center justify-center text-xs text-gray-500">
            1,099 donations
          </div>
        </div>

        <div className="mt-2 text-lg font-bold">Tsunami in Malika</div>
        <p className="mt-1 text-sm text-gray-700">
          Emergency! A tsunami has just hit Malika, Tarasudi District. Help our
          affected brothers and sisters.
        </p>
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

function MessageSquareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
