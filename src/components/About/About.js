import React from 'react';
import styles from './About.module.css';
import bgImage from '../../assets/images/curvyLines.png';
import Platform from './Platform/Platform';
import reactLogo from '../../assets/images/logo512.png';
import djangoLogo from '../../assets/images/django.svg';
import RNLogo from '../../assets/images/ReactNative.png';

const background = {
    backgroundImage: `url(${bgImage})`
};

const About = (props, ref) => {
    return (
        <div style={background} className={styles.About} ref={ref}>
            <div className={styles.Header}>
                <h1>About Me</h1>
                <div style={{height: '4px', backgroundColor: 'salmon', margin: '0 45vw 40px'}} />
                <p>Hi, I'm Mainak Debnath. I'm a fullstack developer, develop web and mobile apps. I have experience in working with live projects in industry and two times winner of intra-college coding competition. I'm also freelancer. This platform is one step closer to the solution to develop your business using a perfect website or app.</p>
            </div>
            <div className={styles.Platforms}>
                <Platform
                    image={reactLogo}
                    name="React Js"
                >React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.</Platform>

                <Platform
                    image={djangoLogo}
                    name="Django"
                >Django is a high-level Python web framework that enables rapid development of secure and maintainable websites.</Platform>

                <Platform
                    image={RNLogo}
                    name="React Native"
                >React Native is an open-source mobile application framework created by Facebook. It is used to develop applications for Android, iOS, Web and UWP.</Platform>
            </div>
        </div>
    );
};

export default React.forwardRef(About);