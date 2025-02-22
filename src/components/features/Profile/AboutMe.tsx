import { aboutData, iconsData } from "@/app/_data/aboutData";
import Link from "@/components/ui/Link/link";

import { cva } from "styled-system/css";
import { Flex } from "styled-system/jsx";
import BlockTitle from "./BlockTitle";

const iconStyle = cva({
    base: {
        fontSize: { base: "md", md: "lg", lg: "lg" },
        pl: "3",
    },
    variants: {
        icon: {
            twitter: { color: "#1DA1F2" },
            github: { color: "#000000" },
        },
    },
});

const AboutMe = () => {
    return (
        <div>
            <Flex pb={3} alignItems="baseline">
                <BlockTitle title={"Satoha"} />
                {iconsData.map((icon) => {
                    return (
                        <Link key={icon.id} href={icon.url} target="_blank">
                            <div className={iconStyle({ icon: icon.title })}>
                                {icon.icon && <icon.icon />}
                            </div>
                        </Link>
                    );
                })}
            </Flex>
            <div>
                {aboutData.map((data, index) => {
                    return <p key={index}>{data.text}</p>;
                })}
            </div>
        </div>
    );
};

export default AboutMe;
