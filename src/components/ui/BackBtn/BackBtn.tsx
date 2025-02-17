"use client";

import { useRouter } from "next/navigation";
import Button from "../Button/button";

const BackBtn = () => {
    const router = useRouter();
    return <Button onPress={() => router.back()}>戻る</Button>;
};

export default BackBtn;
