import React from 'react';
import styles from './Banner.module.css';
import image from '../../assets/images/Banner.jpg';
import { Slide, ButtonBase, Typography, makeStyles } from '@material-ui/core';
import VisibilitySensor from 'react-visibility-sensor';

const background = {
    backgroundImage: `url(${image})`
};

const useStyles = makeStyles(theme => ({
    image: {
        position: 'relative',
        marginTop: "20px",
        '& $imageTitle': {
            border: '4px solid currentColor',
        },
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    }
}))

const Banner = props => {
    const classes = useStyles();
    const [isVisible, setVisible] = React.useState(false);

    function onChange(isVisible) {
        setVisible(isVisible);
    };

    return (
        <div style={background} className={styles.Banner}>
            <VisibilitySensor onChange={onChange}>
                <div className={styles.Backdrop}>
                    <Slide style={{ maxWidth: '80%' }} direction="right" in={isVisible} timeout={500}>
                        <div className={styles.Heading}>
                            <h1>Your Thoughts, My Creation.</h1>
                            <p>Start building your profession website which starts only with 500 buks. Start building your apps at 1/5th of the market price.</p>
                            <ButtonBase
                                focusRipple
                                key={image.title}
                                className={classes.image}
                            >
                                <Typography
                                    component="span"
                                    variant="subtitle1"
                                    color="inherit"
                                    className={classes.imageTitle}
                                >LEARN MORE</Typography>
                            </ButtonBase>
                        </div>
                    </Slide>
                </div>
            </VisibilitySensor>
        </div>
    );
};

export default Banner;