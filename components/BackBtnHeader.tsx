import { useRouter } from "next/navigation";

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

type HeaderProps = {
  showBackArrow?: boolean;
  label: string;
}

const BackBtnHeader: React.FC<HeaderProps> = ({ showBackArrow, label }) => {
  const router = useRouter();
  
  return (
    <div className="p-3 font-medium">
      <div className="flex items-center gap-2">
        {showBackArrow && (
          <KeyboardBackspaceIcon 
            onClick={() => router.back()}
            sx={{ fontSize: 25 }}
            className="
              cursor-pointer 
              hover:opacity-70
          "/>
        )}
        <h1 className="text-md">
          @{label}
        </h1>
      </div>
    </div>
  );
}

export default BackBtnHeader;