import { useState } from "react";
import main from "../config/gemini";
import { context } from "./context";


const Provider = context.Provider;

export default function GeminiContextProvider({children}) {
    const [input, setInput] = useState('');
    const [recentPrompt, setRecentPrompt] = useState([]);
    const [loading, setLoading] = useState(false);
    const [prevPrompts, setPrevPrompts] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [resultData, setResultData] = useState('');

    const delayPara = (i, nextword) => {
        setTimeout(() => {
            setResultData((prev) => prev + nextword);
        }, 75 * i);
    }

    async function onSent() {
        setResultData('');
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input);
        const response = await main(input);
        let responseArray = response.split("**");
        let newResponse;
        for(let i=0; i<responseArray.length; i++) {
            if(i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            }else {
                newResponse += "<b>" + responseArray[i] + "</b>"
            }
        }
        let newResponse2 = newResponse.split("*").join("<br>");
        let newResponseArray = newResponse2.split(' ');
        for(let i=0; i<newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord+" ");
        }
        // setResultData(newResponse2);
        setLoading(false);
        setInput('');
    }

    const contextValue = {
        input,
        recentPrompt,
        loading,
        prevPrompts,
        showResult,
        resultData,
        setRecentPrompt,
        setInput,
        setLoading,
        setShowResult,
        setPrevPrompts,
        setResultData,
        onSent
    }

    return <Provider value={contextValue}>{children}</Provider>
}


