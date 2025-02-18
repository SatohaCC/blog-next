import { getMenu } from "@/lib/microcms";
import { MENU_REVALIDATE } from "@/lib/siteInfo";
import HeaderPresentation from "./HeaderPresentation";

export const revalidate = MENU_REVALIDATE;

const Header = async () => {
    const { contents } = await getMenu();
    return <HeaderPresentation contents={contents} />;
};

export default Header;
