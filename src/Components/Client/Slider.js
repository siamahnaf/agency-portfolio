import { useState, useEffect, useCallback } from "react";
import { Box, ButtonBase, Avatar, Typography, Rating } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";

//Icons
import { ChevronLeft, ChevronRight } from "Utilis/Icons";

//Data
import Clients from "Data/Client/Client.data";

//Styles
import styles from "Styles/Client/Slider.styles";

const Sliders = () => {
    const [viewportRef, embla] = useEmblaCarousel({
        dragFree: true,
        containScroll: "trimSnaps"
    });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const onSelect = useCallback(() => {
        if (!embla) return;
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla]);

    useEffect(() => {
        if (!embla) return;
        embla.on("select", onSelect);
        onSelect();
    }, [embla, onSelect]);
    return (
        <Box sx={{ mt: "2em" }}>
            <Box className="embla" sx={styles.Embla}>
                <Box className="embla__viewport" ref={viewportRef}>
                    <Box className="embla__container" sx={styles.EmblaContainer}>
                        {Clients &&
                            Clients.map((client, i) => (
                                <Box className="embla__slide" sx={styles.EmblaSlide} key={i}>
                                    <Avatar
                                        alt={client.name}
                                        src={client.avatar}
                                        sx={styles.Avatar}
                                    />
                                    <Box sx={{ mt: "4.5em", mb: "3em" }}>
                                        <Typography variant="h6" component="h6" sx={styles.Title}>
                                            {client.title}
                                        </Typography>
                                        <Rating name="half-rating-read" defaultValue={client.star} precision={0.5} readOnly />
                                        <Typography variant="body1" component="p" sx={styles.Description}>
                                            {client.review}
                                        </Typography>
                                    </Box>
                                    <ButtonBase sx={styles.Name}>
                                        {client.name}
                                    </ButtonBase>
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
                <Box sx={styles.Navigation}>
                    <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                    <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
                </Box>
            </Box>
        </Box>
    );
};
export default Sliders;

//Prev Button
const PrevButton = ({ enabled, onClick }) => (
    <ButtonBase
        className={!enabled ? "disable" : ""}
        onClick={onClick}
        disabled={!enabled}
    >
        <ChevronLeft />
    </ButtonBase>
);
//Next Button
const NextButton = ({ enabled, onClick }) => (
    <ButtonBase
        className={!enabled ? "disable" : ""}
        onClick={onClick}
        disabled={!enabled}
    >
        <ChevronRight />
    </ButtonBase>
);
