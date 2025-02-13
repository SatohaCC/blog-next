import Button from "@/components/ui/Button";
import { css } from "styled-system/css";

export default function Home() {
    return (
        <div>
            <main>
                <div>
                    <div
                        className={css({
                            bg: "red",
                        })}
                    >
                        Hello World
                    </div>
                    <Button>aae</Button>
                </div>
            </main>
            <footer></footer>
        </div>
    );
}
