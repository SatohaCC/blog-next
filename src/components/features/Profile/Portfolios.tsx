import { portfolioData } from "@/data/portfolioData";
import { css } from "styled-system/css";
import BlockTitle from "./BlockTitle";
import PortfolioRow from "./PortfolioRow";

const containerStyle = css({
    display: "flex",
    flexDirection: "column",
    gap: "3",
});

const Portfolios = () => {
    return (
        <section aria-label="portfolios">
            <BlockTitle title="ポートフォリオ" />
            <div className={containerStyle}>
                {portfolioData.map((data, index) => {
                    return <PortfolioRow key={index} data={data} />;
                })}
            </div>
        </section>
    );
};

export default Portfolios;
