import { css } from "styled-system/css";

export default function Home() {
    return (
        <div>
            <main>
                <div
                    className={css({
                        bg: "red",
                    })}
                >
                    Hello World
                </div>
            </main>
            <footer></footer>
        </div>
    );
}
