import { getMenu } from "@/lib/microcms";
import HeaderPresentation from "./HeaderPresentation";

export const revalidate = 3600;

const Header = async () => {
    const { contents } = await getMenu();
    return <HeaderPresentation contents={contents} />;
};

export default Header;
