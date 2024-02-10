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
        <Card className="col-span-1 mb-5 flex flex-col items-start border-gray-50 px-2 pt-5 text-start">
          <Card
            className="col-span-1 mb-5 flex 
            w-full flex-col items-center justify-center 
            space-y-10 border-none shadow-none"
          >
            <Avatar className="h-[10rem] w-[10rem]">
              <AvatarImage
                src={
                  user.photo?.includes("data:image")
                    ? user.photo
                    : `data:image/jpeg;base64,${user?.photo}`
                }
              />
              <AvatarFallback>
                <User2 className="h-[10rem] w-[10rem]" />
              </AvatarFallback>
            </Avatar>
            <div
              className="mb-5 w-[80%] rounded-lg border-2 border-violet-400 p-1
              text-center text-lg font-light text-violet-400"
            >
              About the User
            </div>
          </Card>
          <div className="mb-4 ml-2 mt-5 text-left">
            <strong>Lastname:</strong> {user?.last_name}
          </div>
          <div className="mb-4 ml-2 mt-5 text-left">
            <strong>Firstname:</strong> {user?.first_name}
          </div>
          <div className="ml-2 mt-5 text-left">
            <strong>Username:</strong> {user?.username}
          </div>
        </Card>

        <Card className="border-t-1 col-span-1 flex h-[34.7rem] flex-col items-start space-y-10 border-gray-50 pt-5 text-start">
          <Card className="col-span-1 mb-2 flex w-full flex-col items-center justify-center border-none shadow-none">
            <div
              className="mb-2 w-[80%] rounded-lg border-2 border-violet-400 p-1
                text-center text-lg font-light text-violet-400"
            >
              Other details
            </div>
          </Card>
          <div className="mb-4 ml-2 text-left">
            <strong>Email:</strong> {user?.email}
          </div>

          {user?.birth_date && (
            <div className="mb-4 ml-2 text-left">
              <strong>Birthdate:</strong>{" "}
              {user?.birth_date
                ? new Date(user.birth_date).toDateString()
                : "Not specified"}
            </div>
          )}

          <div className="mb-4 ml-2 text-left">
            <strong>Sex:</strong> {user?.sex}
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
            <strong>Bio:</strong> {user?.bio}
          </div>
          <div className="ml-2 text-left">
            <strong>About:</strong> {user?.about}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
