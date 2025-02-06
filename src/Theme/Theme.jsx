import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import { createContext, useState } from "react";

export const Themecontext = createContext();

export const Theme = ({children})=>{
    const [mode, setMode] = useState('dark');

    const modetheme = createTheme({
        palette:{
            mode : mode
        }
    })

    const toggle = ()=>{
        setMode(mode==='light' ? 'dark' : 'light')
    }

    return(
        <Themecontext.Provider value={{mode, toggle}}>
        <ThemeProvider theme={modetheme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    </Themecontext.Provider>
    )

}