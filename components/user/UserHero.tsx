import Image from "next/image";

import useUser from "@/hooks/useUser";

import Avatar from "@/components/Avatar"

const UserHero: React.FC<{username: string}> = ({ username }) => {
  // const { data: fetchedUser } = useUser(username);

  return ( 
    <div>
      <div className="bg-neutral-700 h-44 relative">
        {/* {fetchedUser?.coverImage && (
          <Image src={fetchedUser.coverImage} fill alt="Cover Image" style={{ objectFit: 'cover' }}/>
        )} */}
        <div className="absolute -bottom-12 md:-bottom-16 left-4">
          <Avatar username={username} />
        </div>
      </div>
    </div>
   );
}

export default UserHero