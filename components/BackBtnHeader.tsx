import { useRouter } from "next/navigation";

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Name from "./Name";

type HeaderProps = {
  showBackArrow?: boolean;
  label: string;
}

const BackBtnHeader: React.FC<HeaderProps> = ({ showBackArrow, label }) => {
  const router = useRouter();
  
  return (
    <div className="p-2 font-medium">
      <div className="flex items-center gap-5">
        {showBackArrow && <div className="p-1 mx-1 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full" onClick={() => router.back()}>
          <KeyboardBackspaceIcon sx={{ fontSize: 24 }}/>
        </div>}
        <Name name={label} sx='text-lg'/>
      </div>
    </div>
  );
}

export default BackBtnHeader;