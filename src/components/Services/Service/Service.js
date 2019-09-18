import React from 'react';
import styles from './Service.module.css';
import { Slide } from '@material-ui/core'
import VisibilitySensor from 'react-visibility-sensor';

const Service = props => (
    <div className={styles.Container}>
        <VisibilitySensor onChange={props.onEnter}>
            <div>
                <Slide direction={'right'} in={props.visibility} timeout={400}>
                    {
                        props.direction === 'right' ?
                            <div className={styles.Service}>
                                <div className={styles.Details}>
                                    <h2>{props.name}</h2>
                                    <p>{props.children}</p>
                                </div>
                                <div className={styles.imageContainer}>
                                    <img src={props.image} alt={"Web"} />
                                </div>
                            </div> :
                            <div className={styles.Service}>
                                <div className={styles.imageContainer}>
                                    <img src={props.image} alt={"Web"} />
                                </div>
                                <div className={styles.Details}>
                                    <h2>{props.name}</h2>
                                    <p>{props.children}</p>
                                </div>
                            </div>
                    }
                </Slide>
            </div>
        </VisibilitySensor>
    </div>
);

export default Service;