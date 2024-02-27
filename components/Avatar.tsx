import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

type AvatarProps = {
  username: string;
  hasBorder?: boolean;
  image?: string;
}

const Avatar: React.FC<AvatarProps> = ({ username, hasBorder, image }) => {
  const router = useRouter();

  const onClick = useCallback((event: any) => {
    event.stopPropagation();

    const url = `/users/${username}`;

    router.push(url);
  }, [router, username]);

  return (
    <div
      className={`
        ${hasBorder ? 'border-4 dark:border-black border-white' : ''}
        w-24 h-24 md:w-32 md:h-32
        rounded-full 
        transition 
        cursor-pointer
        relative
      `}
    >
      <Image
        fill
        style={{
          objectFit: 'cover',
          borderRadius: '100%'
        }}
        alt="Avatar"
        onClick={onClick}
        src={image || '/avatarImage.png'}
        priority
        sizes="100%"
      />
    </div>
  );
}
 
export default Avatar;