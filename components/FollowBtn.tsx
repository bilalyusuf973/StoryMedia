import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";

export const followUser = async (username: string): Promise<void> => {
  const response = await axios.post(`/api/user/follow`, { username });
  const data = await response.data;
  return data;
};

export const unfollowUser = async (username: string): Promise<void> => {
  const response = await axios.post(`/api/user/unfollow`, { username });
  const data = await response.data;
  return data;
};

type FollowButtonProps = {
  username: string;
  // isFollowing: boolean;
  // setIsFollowing: React.Dispatch<React.SetStateAction<boolean>>; // Function to update isFollowing state
};

const FollowButton: React.FC<FollowButtonProps> = ({ username }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const { data: userData} = useUser(username);
  const { data: currentUserData } = useCurrentUser();
  
  useEffect(() => {
    if (userData && currentUserData) {
      setIsFollowing(userData.user.followersIds.includes(currentUserData.currentUser._id));
    }
  }, [userData, currentUserData]);

  const handleFollow = async () => {
    setIsLoading(true);
    try {
      if (isFollowing) {
        const data: any = await unfollowUser(username);
        if(data.status === 200) {
          setIsFollowing(false);
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      } else {
        const data: any = await followUser(username);
        if(data.status === 200) {
          setIsFollowing(true);
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.error("An error occurred while following/unfollowing:", error);
      toast.error("An error occurred while following/unfollowing.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleFollow}
      className={`px-4 py-2 text-white font-bold rounded-full ${
        isFollowing ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
      }`}
      disabled={isLoading}
    >
      {isLoading ? "Processing..." : isFollowing ? "Unfollow" : "Follow"}
    </button>
  );
};

export default FollowButton;
