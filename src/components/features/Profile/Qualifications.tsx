import { qualificationsData } from "@/data/qualificationsData";
import { grid } from "styled-system/patterns";
import BlockTitle from "./BlockTitle";

const Qualifications = () => {
    return (
        <div>
            <BlockTitle title="資格" />
            <div className={grid({ columns: [1, 2], gap: "1" })}>
                {qualificationsData.map((data, index) => {
                    return <p key={index}>{data.text}</p>;
                })}
            </div>
        </div>
    );
};

export default Qualifications;
