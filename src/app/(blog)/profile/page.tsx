import AboutMe from "@/components/features/Profile/AboutMe";
import Portfolios from "@/components/features/Profile/Portfolios";
import Qualifications from "@/components/features/Profile/Qualifications";
import { Divider, Stack } from "styled-system/jsx";

const page = () => {
    return (
        <Stack px={5}>
            <AboutMe />
            <Divider />
            <Qualifications />
            <Divider />
            <Portfolios />
        </Stack>
    );
};

export default page;
