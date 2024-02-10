import {FC} from "react";
import {User} from "@/services/api/gen";
import {Card} from "@/components/shadcn-ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn-ui/avatar.tsx";
import {User2} from "lucide-react";

interface ProfileProps {
  user: User;
}

const Profile: FC<ProfileProps> = ({user}) => {
  return (
    <div className="h-scw-screen mt-0 flex w-[110%] items-center justify-center  overflow-hidden">
      <div className="grid h-[40rem] w-[70rem] grid-cols-2 gap-8 p-8 ">
        <Card className="col-span-1 mb-5 flex flex-col items-start border-gray-50 px-2 text-start">
          <Card
            className="col-span-1 mb-5 flex 
            w-full flex-col items-center justify-center 
            space-y-10 border-none shadow-none"
          >
            <Avatar>
              <AvatarImage src={`data:image/jpeg;base64,${user?.photo}`} />
              <AvatarFallback>
                <User2 className="h-20 w-20" />
              </AvatarFallback>
            </Avatar>
            <div
              className="mb-5 w-[80%] rounded-lg border-2 border-violet-400 p-1
              text-center text-lg font-light text-violet-400"
            >
              About the User
            </div>
          </Card>
          <div className="flex w-full flex-col gap-4 text-left">
            <div className="mb-4 ml-2 mt-5 mr-2 text-left">
              <strong className="mr-2">Last Name:</strong>
              <small className="text-sm">{user.last_name}</small>
            </div>
            <div className="mb-4 ml-2 mt-5 mr-2 text-left">
              <strong className="mr-2">First Name:</strong>
              <small className="text-sm">{user.first_name}</small>
            </div>
            <div className="ml-2 mt-5 mr-2 text-left">
              <strong className="mr-2">Username:</strong>
              <small className="text-sm">{user.username}</small>
            </div>
          </div>
        </Card>

        <Card className="border-t-1 col-span-1 flex h-[34.7rem] flex-col items-start space-y-10 border-gray-50 text-start">
          <Card className="col-span-1 mb-2 flex w-full flex-col items-center justify-center border-none shadow-none">
            <div
              className="mb-2 w-[80%] rounded-lg border-2 border-violet-400 p-1
                text-center text-lg font-light text-violet-400"
            >
              Other details
            </div>
          </Card>
          <div className="mb-4 ml-2 text-left">
            <strong className="mr-2">Email:</strong>
            <small className="text-sm">{user.email}</small>
          </div>
          <div className="mb-4 ml-2 text-left">
            <strong className="mr-2">Birth Date:</strong>
            <small className="text-sm">
              {user.birth_date
                ? user.birth_date.toLocaleDateString()
                : "Not specified"}
            </small>
          </div>

          {user.birth_date && (
            <div className="mb-4 ml-2 text-left">
              <strong>Birthdate:</strong>{" "}
              {new Date(user.birth_date).toDateString() || "Not specified"}
            </div>
          )}

          <div className="mb-4 ml-2 text-left">
            <strong className="mr-2">Sex:</strong>
            <small className="text-sm">{user.sex}</small>
          </div>
          <Card className="col-span-1 mb-2 flex w-full flex-col items-center justify-center border-none shadow-none">
            <div
              className="mb-2 w-[80%] rounded-lg border-2 border-violet-400 p-1
                text-center text-lg font-light text-violet-400"
            >
              Summary
            </div>
          </Card>
          <div className="mb-4 ml-2 text-left">
            <strong className="mr-2">Bio:</strong>
            <small className="text-sm">{user.bio}</small>
          </div>
          <div className="ml-2 text-left">
            <strong className="mr-2">About:</strong>
            <small className="text-sm">{user.about}</small>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
