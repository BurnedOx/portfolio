import React from 'react';
import styles from './Container.module.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Timeline, Tween } from 'react-gsap';

const Container = props => (
    <Controller>
        <Scene
            indicators={false}
            duration={900}
            triggerHook="onEnter"
            offset={0}
        >
            <Timeline>
                <Tween
                    from={{ y: '95vh' }}
                    to={{ y: '0' }}
                >
                    <main className={styles.Container}>
                        {props.children}
                    </main>
                </Tween>
            </Timeline>
        </Scene>
    </Controller>
);

export default Container;