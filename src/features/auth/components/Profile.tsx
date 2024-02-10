import { FC } from "react";
import { User } from "@/services/api/gen";
import { Card } from "@/components/shadcn-ui/card";

interface ProfileProps {
  user: User;
}

const Profile: FC<ProfileProps> = ({ user }) => {
    return (
      <div className="flex justify-center items-center w-[110%] h-scw-screen mt-0  overflow-hidden">
        <div className="grid grid-cols-2 gap-8 w-[70rem] h-[40rem] p-8 ">
          <Card className="col-span-1 flex flex-col items-start text-start mb-5 border-gray-50">
            <Card 
            className="col-span-1 flex flex-col 
            items-center justify-center w-full mb-5 
            space-y-10 shadow-none border-none">
              <img
                src={user.photo}
                alt="Profile"
                className="w-[220px] h-[220px]  items-center
                object-cover rounded-full border-black "
              />
              <div 
              className="text-lg font-light mb-5 border-2 w-[80%] text-center
              rounded-lg border-violet-400 text-violet-400 p-1"
            >
              About the User
            </div>
            </Card>
            <div className="mb-4 mt-5 text-left ml-2">
              <strong>Last Name:</strong> {user.last_name}
            </div>
            <div className="mb-4 mt-5 text-left ml-2">
              <strong>First Name:</strong> {user.first_name}
            </div>
            <div className="text-left ml-2 mt-5">
              <strong>Username:</strong> {user.username}
            </div>
          </Card>

          <Card className="col-span-1 flex flex-col items-start h-[34.7rem] space-y-10 text-start border-t-1 border-gray-50">
            <Card className="col-span-1 flex flex-col items-center justify-center w-full mb-2 border-none shadow-none">
              <div 
                className="text-lg font-light mb-2 border-2 w-[80%] text-center
                rounded-lg border-violet-400 text-violet-400 p-1"
              >
                Information Personnels
              </div>
            </Card>
            <div className="mb-4 text-left ml-2">
              <strong>Email:</strong> {user.email}
            </div>
            <div className="mb-4 text-left ml-2">
              <strong>Birth Date:</strong>{" "}
              {user.birth_date ? user.birth_date.toDateString() : "Not specified"}
            </div>
            <div className="mb-4 text-left ml-2">
              <strong>Sex:</strong> {user.sex}
            </div>
            <Card className="col-span-1 flex flex-col items-center justify-center w-full mb-2 border-none shadow-none">
              <div 
                className="text-lg font-light mb-2 border-2 w-[80%] text-center
                rounded-lg border-violet-400 text-violet-400 p-1"
              >
                Other details
              </div>
            </Card>
            <div className="mb-4 text-left ml-2">
              <strong>Bio:</strong> {user.bio}
            </div>
            <div className="text-left ml-2">
              <strong>About:</strong> {user.about}
            </div>
          </Card>
        </div>
      </div>
    );
  };
  
  export default Profile;
