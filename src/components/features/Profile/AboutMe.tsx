import Link from "@/components/ui/Link/link";
import { aboutData, iconsData } from "@/data/aboutData";
import { myName } from "@/lib/siteInfo";
import { cva } from "styled-system/css";
import { Flex } from "styled-system/jsx";
import BlockTitle from "./BlockTitle";

const iconStyle = cva({
    base: {
        fontSize: { base: "md", md: "lg", lg: "lg" },
    },
    variants: {
        icon: {
            "twitter-icon": { color: "#1DA1F2" },
            "github-icon": { color: "#000000" },
        },
    },
});

const AboutMe = () => {
    return (
        <section aria-label="about">
            <Flex alignItems="baseline" gap="2">
                <BlockTitle title={myName} />
                {iconsData.map((icon) => {
                    return (
                        <Link key={icon.id} aria-label={icon.title} href={icon.url} target="_blank">
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
        </section>
    );
};

export default AboutMe;
