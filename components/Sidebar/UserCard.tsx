import { getUserInfo } from "@/app/actions/getUserInfo";
import { CircleUser } from "lucide-react";
import { useEffect, useState } from "react";

interface userInfoState {
  username: string;
  created_at: Date | null;
}

export default function UserCard() {
  const [userInfo, setUserInfo] = useState<userInfoState>();
  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await getUserInfo()
      if (!userInfo) return
      setUserInfo(userInfo)
    }
    fetchUser()
  }, [])
  return (
    <div className="flex items-center group-[.close]:justify-center bg-white p-3 rounded-2xl w-full m-2">
      <div>
        <CircleUser />
      </div>
      <div className="font-medium ml-3 group-[.close]:hidden dark:text-white">
        <h2 className="text-md text-black">{userInfo?.username}</h2>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {userInfo?.created_at && new Date(userInfo?.created_at as Date).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}