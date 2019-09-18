import React from 'react';
import styles from './Projects.module.css';
import bgImage from '../../assets/images/curvyLines.png';
import simpliwaveImg from '../../assets/images/simpliwave.png';
import workReportImg from '../../assets/images/work-report.png';
import studioImg from '../../assets/images/studiowaves.png';
import gameImg from '../../assets/images/triple-win.png';
import portfolioImg from '../../assets/images/portfolio.png';
import cabImg from '../../assets/images/cab.png';
import ImageButton from '../UI/ImageButton';

const background = {
    backgroundImage: `url(${bgImage})`
};

const Projects = (props, ref) => {
    return (
        <div style={background} className={styles.Projects} ref={ref}>
            <h1>Some of My Projects</h1>

            <div style={{height: '4px', backgroundColor: 'salmon', margin: '0 45vw 40px'}} />

            <div className={styles.Gallery}>
                <ImageButton image={simpliwaveImg} title="Consultancy" width="33.4%"/>
                <ImageButton image={workReportImg} title="Work-Report" width="33.4%"/>
                <ImageButton image={studioImg} title="Studio" width="33.4%"/>
            </div>
            <div className={styles.Gallery}>
                <ImageButton image={portfolioImg} title="Portfolio" width="33.4%"/>
                <ImageButton image={cabImg} title="Cab-Booking" width="33.4%"/>
                <ImageButton image={gameImg} title="Gaming" width="33.4%"/>
            </div>
        </div>
    );
};

export default React.forwardRef(Projects);