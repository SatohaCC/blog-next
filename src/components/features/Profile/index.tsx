import { css } from "styled-system/css";
import { Divider, Stack } from "styled-system/jsx";
import AboutMe from "./AboutMe";
import Portfolios from "./Portfolios";
import Qualifications from "./Qualifications";

const Profile = () => {
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

export default Profile;
