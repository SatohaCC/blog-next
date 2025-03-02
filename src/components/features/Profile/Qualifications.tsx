import { qualificationsData } from "@/data/qualificationsData";
import { grid } from "styled-system/patterns";
import BlockTitle from "./BlockTitle";

const Qualifications = () => {
    return (
        <section aria-label="qualifications">
            <BlockTitle title="資格" />
            <div className={grid({ columns: [1, 2], gap: "1" })}>
                {qualificationsData.map((data, index) => {
                    return <p key={index}>{data.text}</p>;
                })}
            </div>
        </section>
    );
};

export default Qualifications;
