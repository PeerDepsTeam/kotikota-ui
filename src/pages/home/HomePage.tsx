import {CardSuggestion} from "@/components/CardSuggestion";
import {Landing} from "@/components/Landing";
import {PaginationCustom} from "@/components/common/PaginationCustom";
import {Badge} from "@/components/shadcn-ui/badge";
import {Button} from "@/components/shadcn-ui/button";
import {Input} from "@/components/shadcn-ui/input";
import {CardPostPopular} from "@/components/CardPostPopular.tsx";
import {FC} from "react";

export const HomePage: FC = () => {
  return (
    <>
      <div className=" max-w-screen-full mx-auto bg-white">
        <Landing />
        <div className=" mt-5 flex flex-col items-center justify-between py-5">
          <h1 className="text-xl font-semibold text-primary">
            <span className="font-['DM Sans'] text-[32px] font-bold leading-[44.80px] text-zinc-900">
              Open{" "}
            </span>
            <span className="font-['DM Sans'] text-[32px] font-bold leading-[44.80px] text-slate-400">
              donations
            </span>
          </h1>
          <div className="mt-5 flex w-1/2">
            <Input className="w-full" placeholder="Find project..." />
            <Button
              className="ml-2 hover:bg-secondary hover:text-white"
              variant="default"
            >
              Search
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 py-4">
          <Badge
            variant="outline"
            className="hover:bg-secondary hover:text-white"
          >
            Disaster
          </Badge>
          <Badge
            variant="outline"
            className="hover:bg-secondary hover:text-white"
          >
            Children
          </Badge>
          <Badge
            variant="outline"
            className="hover:bg-secondary hover:text-white"
          >
            Food Crisis
          </Badge>
          <Badge
            variant="outline"
            className="hover:bg-secondary hover:text-white"
          >
            Health
          </Badge>
          <Badge
            variant="outline"
            className="hover:bg-secondary hover:text-white"
          >
            Sanitation
          </Badge>
          <Badge
            variant="outline"
            className="hover:bg-secondary hover:text-white"
          >
            Animal
          </Badge>
          <Badge
            variant="outline"
            className="hover:bg-secondary hover:text-white"
          >
            Pandemic
          </Badge>
          <Badge
            variant="outline"
            className="hover:bg-secondary hover:text-white"
          >
            War Crisis
          </Badge>
        </div>
        <div className="mx-auto my-8 max-w-4xl">
          <div className="grid grid-cols-1 gap-8">
            <CardPostPopular />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <CardSuggestion />
              <CardSuggestion />
              <CardSuggestion />
            </div>
            <PaginationCustom />
          </div>
        </div>
      </div>
    </>
  );
};
