import AboutMe from "@/components/features/Profile/AboutMe";
import Portfolios from "@/components/features/Profile/Portfolios";
import Qualifications from "@/components/features/Profile/Qualifications";
import { myName, siteName } from "@/lib/siteInfo";
import { Metadata } from "next/types";
import { css } from "styled-system/css";
import { Divider, Stack } from "styled-system/jsx";

export const metadata: Metadata = {
    title: `${siteName} - profile`,
    description: `${myName} のプロフィールページです。`,
};

const page = () => {
    return (
        <Stack px={5}>
            <AboutMe />
            <Divider className={css({ color: "gray.200" })} />
            <Qualifications />
            <Divider className={css({ color: "gray.200" })} />
            <Portfolios />
        </Stack>
    );
};

export default page;
