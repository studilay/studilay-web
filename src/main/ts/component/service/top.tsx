import {useTheme} from "../../hooks/themeHook";
import React from "react";
import {siteName} from "../../bundle";
import {useService} from "../../hooks/serviceHook";

interface Prop {
}

export function Top(props: Prop) {
    const theme = useTheme()

    return <div className={""} style={{backgroundColor: theme.plain}}>
        <div className={"pb-1"}>
            <img src={useService("top").topImg} className={""} alt={"top img"}/>
            <p className={"mt-16 mb-16 w-full text-5xl text-center"}
               style={{color: theme.accent}}>{siteName}</p>
        </div>
    </div>
}