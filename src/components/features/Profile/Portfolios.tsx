import { portfolioData } from "@/app/_data/portfolioData";
import { css } from "styled-system/css";
import BlockTitle from "./BlockTitle";
import PortfolioRow from "./PortfolioRow";

const containerStyle = css({
    display: "grid",
    gap: "8",
});

const Portfolios = () => {
    return (
        <div>
            <BlockTitle title="ポートフォリオ" />
            <div className={containerStyle}>
                {portfolioData.map((data, index) => {
                    return <PortfolioRow key={index} data={data} />;
                })}
            </div>
        </div>
    );
};

export default Portfolios;
