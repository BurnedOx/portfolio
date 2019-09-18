import React from 'react';
import styles from './Services.module.css';
import firstImg from '../../assets/images/undraw_website.svg';
import secondImg from '../../assets/images/undraw_web_developer.svg';
import thirdImg from '../../assets/images/undraw_Mobile_application.svg';
import Service from './Service/Service';

const Services = (props, ref) => {
    const [isVisible, setIsVisible] = React.useState({
        first: false,
        second: false,
        third: false
    });
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        setIsMobile(window.innerWidth <= 500);
        return window.addEventListener('resize', resize.bind());
    }, [])

    const resize = () => setIsMobile(window.innerWidth <= 500);

    function onEnter(visibility, name) {
        setIsVisible({ ...isVisible, [name]: visibility });
    };

    return (
        <div className={styles.Services} ref={ref}>
            <h1>Services</h1>

            <div style={{height: '4px', backgroundColor: 'salmon', margin: '0 45vw 40px'}} />
            
            <Service
                onEnter={(self) => onEnter(self, 'first')}
                direction="right"
                visibility={isVisible.first || isMobile}
                name="Website Design"
                image={firstImg}
            >I provide responsive web designs. Being both graphic and web designer I'm demonstrating my skills beautifully, that brings everything to life and creates a dynamic experience.</Service>

            <div style={{ backgroundColor: 'gray', height: '1px', width: '90%', margin: '0 5%' }} />

            <Service
                onEnter={(self) => onEnter(self, 'second')}
                direction="left"
                visibility={isVisible.second || isMobile}
                name="Full Stack Web Development"
                image={secondImg}
            >I'm a full stack web developer is a <strong style={{color: 'rgb(139, 34, 52)'}}>jack of all trades</strong> who can do reasonably well enough to carry your project all the way from conception to completion.</Service>

            <div style={{ backgroundColor: 'gray', height: '1px', width: '90%', margin: '0 5%' }} />

            <Service
                onEnter={(self) => onEnter(self, 'third')}
                direction="right"
                visibility={isVisible.third || isMobile}
                name="Native App Development"
                image={thirdImg}
            ></Service>
        </div>
    );
};

export default React.forwardRef(Services);