import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
    typography: {
        fontFamily: "Inter"
        // 400 Regular
        // 500 Medium
        // 600 Semi-Bold
        // 700 Bold
        // 800 Extra-Bold
    },
    palette: {
        text: {
            primary: "#121315", // Default Text Color
            secondary: "#FF4F3E" // Secondary Text Color
        },
        background: {
            default: "#FFFFFF" // Default Background Color
        },
        primary: {
            main: "#FF4F3E", // Document Main Primary Color
            light: "#CECECE", // Document Light Color (Button Background)
            box_shadow_black: " #0000001c", // Box Shadow Black (Header Sticky)
            success: "#4CAF50", // SuccessMessage Color
            box_shadow_client: "#0000001c", /// Box Shadow Clinet Slider
            box_show_blog: "#FF4F3E21", //Box Shadow Blog Section
            box_shadow_blog_2: "#0000001a", // Box Shadow Blog Category
            divider: "#AEAEAE", // Divider Color (All Section Divider)
            social_bg: "#E7E7E7", // Social Background Color
            social_color: "#415674", // Social Icon Color
            inputBorder: "#0000001f", //For NewsLetter Input Border Color
            HeroGradient: "linear-gradient(to right, #FFF , #FF4F3E42)", // Gradient (Hero Section)
            WorkGradient: "linear-gradient(to right, #FF4F3E42, #FFF)", // Gradient (Portfolio Section)
            ContactGradient: "linear-gradient(to right, #FF4F3E42, #FFFFFF4A)", // Gradient (Contact Section)
        }
    },
    breakpoints: {
        values: {
            xxs: 0, // Double Extra Small Devices
            xs: 360, // Extra Small Devices
            sm: 480, // Small Devices
            msm: 576, // Medium Small Devices
            lsm: 640, // Large Small Devices
            smd: 768, // Small Medium Devices
            md: 992, // Medium Devices
            lg: 1200, // Large Devices
            xl: 1536, // Extra Small Devices
            xxl: 1980 // Double Extra Devices
        },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    '@media (min-width: 0px)': {
                        paddingLeft: '3%',
                        paddingRight: '3%',
                    },
                    '@media (min-width: 480px)': {
                        paddingLeft: '3%',
                        paddingRight: '3%',
                    },
                    '@media (min-width: 992px)': {
                        paddingLeft: '3%',
                        paddingRight: '3%',
                    },
                    '@media (min-width: 1200px)': {
                        paddingLeft: '5%',
                        paddingRight: '5%',
                    }
                }
            }
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    fontFamily: "Inter"
                },
            },
        },
    }
});

export default theme;