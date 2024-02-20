import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

import useUser from "@/hooks/useUser";

type AvatarProps = {
  username: string;
  hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ username, hasBorder }) => {
  const router = useRouter();

  // const { data: fetchedUser } = useUser(username);

  const onClick = useCallback((event: any) => {
    event.stopPropagation();

    const url = `/users/${username}`;

    router.push(url);
  }, [router, username]);

  return (
    <div
      className={`
        ${hasBorder ? 'border-4 border-black' : ''}
        w-24 h-24 md:w-32 md:h-32
        rounded-full
        hover:opacity-90 
        transition 
        cursor-pointer
        relative
      `}
    >
      {/* <Image
        fill
        style={{
          objectFit: 'cover',
          borderRadius: '100%'
        }}
        alt="Avatar"
        onClick={onClick}
        src={fetchedUser?.profileImage || '/avatarImage.png'}
        priority
        sizes="100%"
      /> */}
    </div>
  );
}
 
export default Avatar;