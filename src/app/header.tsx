import { getMenu } from "@/lib/microcms";
import HeaderPresentation from "../components/features/Header/HeaderPresentation";

export const revalidate = 3600;

const Header = async () => {
    const { contents } = await getMenu();
    return <HeaderPresentation contents={contents} />;
};

export default Header;
