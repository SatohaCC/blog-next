import { getMenu } from "@/lib/microcms";
import { Suspense } from "react";
import { css } from "styled-system/css";

const Navigation = async () => {
    const { contents } = await getMenu();
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div
                className={css({
                    flex: 1,
                    display: { base: "none", md: "flex" },
                    justifyContent: "center",
                    fontSize: { base: "md", lg: "md" },
                    gap: "20px",
                    alignItems: "center",
                })}
            >
                {contents?.map((content) => <div key={content.id}>{content.label}</div>)}
            </div>
        </Suspense>
    );
};

export default Navigation;
