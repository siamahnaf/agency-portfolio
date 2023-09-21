import { Box, Stack, Typography, LinearProgress } from "@mui/material";
import NumberCounter from 'number-counter';

// Data
import Progresses from "Data/Skill/Progress.data";


//Styles
import styles from "Styles/Skill/Progress.styles";

const Progress = () => {
    return (
        <Box>
            {Progresses &&
                Progresses.map((progress, i) => (
                    <Box key={i} sx={{ mb: "1.7em" }}>
                        <Stack direction="row" sx={{ mb: "10px" }}>
                            <Typography variant="body1" component="p" sx={styles.Title}>
                                {progress.field}
                            </Typography>
                            <NumberCounter end={progress.progress} delay={1} postFix="%" />
                        </Stack>
                        <LinearProgress
                            variant="determinate"
                            value={progress.progress}
                            sx={{ height: "5px" }}
                        />
                    </Box>
                ))
            }
        </Box>
    );
};
export default Progress;