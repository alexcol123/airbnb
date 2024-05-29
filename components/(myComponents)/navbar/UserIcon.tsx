import { fetchProfileImage } from "@/utils/actions"
import { User } from "lucide-react"


import Image from 'next/image';

const UserIcon = async () => {
  const profileImage = await fetchProfileImage();

  if (profileImage) {
    return (
      <Image src={profileImage} alt="profile image" width={30} height={30} className="bg-primary w-6 h-6 rounded-full object-cover" />
    );
  }

  return (
    <User size={24} className="bg-primary w-6 h-6 rounded-full text-primary-foreground" />
  );
};
export default UserIcon