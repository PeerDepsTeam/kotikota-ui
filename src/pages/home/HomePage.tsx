import {CardSuggestion} from "@/components/CardSuggestion";
import {PaginationCustom} from "@/components/common/PaginationCustom";
import {Badge} from "@/components/shadcn-ui/badge";
import {Button} from "@/components/shadcn-ui/button";
import {Input} from "@/components/shadcn-ui/input";
import {FC} from "react";

export const HomePage: FC = () => {
  return (
    <>
      <div className=" bg-customBackground mx-auto max-w-screen-lg">
        <header className="flex flex-col items-center justify-between py-5">
          <h1 className="text-xl font-semibold text-primary">
            <span className="font-['DM Sans'] text-[32px] font-bold leading-[44.80px] text-zinc-900">
              Open{" "}
            </span>
            <span className="font-['DM Sans'] text-[32px] font-bold leading-[44.80px] text-slate-400">
              donations
            </span>
          </h1>
          <div className="flex w-1/2">
            <Input className="w-full" placeholder="Find donations..." />
            <Button
              className="ml-2 hover:bg-secondary hover:text-white"
              variant="default"
            >
              Search
            </Button>
          </div>
        </header>
        <div className="flex flex-wrap items-center justify-center gap-4 py-4">
          <Badge
            variant="default"
            className="hover:bg-secondary hover:text-white"
          >
            Disaster
          </Badge>
          <Badge
            variant="default"
            className="hover:bg-secondary hover:text-white"
          >
            Children
          </Badge>
          <Badge
            variant="default"
            className="hover:bg-secondary hover:text-white"
          >
            Food Crisis
          </Badge>
          <Badge
            variant="default"
            className="hover:bg-secondary hover:text-white"
          >
            Health
          </Badge>
          <Badge
            variant="default"
            className="hover:bg-secondary hover:text-white"
          >
            Sanitation
          </Badge>
          <Badge
            variant="default"
            className="hover:bg-secondary hover:text-white"
          >
            Animal
          </Badge>
          <Badge
            variant="default"
            className="hover:bg-secondary hover:text-white"
          >
            Pandemic
          </Badge>
          <Badge
            variant="default"
            className="hover:bg-secondary hover:text-white"
          >
            War Crisis
          </Badge>
        </div>
        <div className=" flex flex-wrap items-center justify-evenly gap-4 pb-4">
          <CardSuggestion />
          <CardSuggestion />
          <CardSuggestion />
          <CardSuggestion />
          <CardSuggestion />
          <CardSuggestion />
        </div>
        <PaginationCustom />
      </div>
    </>
  );
};
