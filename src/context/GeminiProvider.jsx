import { useState } from "react";
import main from "../config/gemini";
import { context } from "./context";


const Provider = context.Provider;

export default function GeminiContextProvider({children}) {
    const [input, setInput] = useState('');
    const [recents, setRecents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [prevPrompts, setPrevPrompts] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [resultData, setResultData] = useState('');

    async function onSent(prompt) {
        await main(prompt);
    }
    onSent("What is react");

    const contextValue = {
        input,
        recents,
        loading,
        prevPrompts,
        showResult,
        resultData,
        setRecents,
        setInput,
        setLoading,
        setShowResult,
        setPrevPrompts,
        setResultData
    }

    return <Provider value={contextValue}>{children}</Provider>
}


