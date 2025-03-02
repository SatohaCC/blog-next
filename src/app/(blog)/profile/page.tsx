import Profile from "@/components/features/Profile";
import { myName, siteName } from "@/lib/siteInfo";
import { Metadata } from "next/types";

export const metadata: Metadata = {
    title: `${siteName} - profile`,
    description: `${myName} のプロフィールページです。`,
};

const ProfilePage = () => {
    return <Profile />;
};

export default ProfilePage;
