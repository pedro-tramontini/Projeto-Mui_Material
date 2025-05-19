import { createTheme } from "@mui/material";

// export const darkTheme = colors ({
//     palette: {
//         primary: {
//             100: "#cccccc",
//             200: "#999999",
//             300: "#333333"
//         },
//         secondary: {
//         100: "#f7ccd2",
//         200: "#ef99a4",
//         300: "#e66677",
//         400: "#de3349",
//         }
//     }
// })

export const theme = createTheme({
    palette: {
    primary: {
        main: '#0052cc',
    },
    secondary: {
        main: '#B47AEA'
    }
},
    typography: {
        fontFamily: 'Quicksand'
    }
})