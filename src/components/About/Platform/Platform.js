import React from 'react';
import styles from './Platform.module.css';
import Zoom from '../../UI/Zoom';

const Platform = props => (
    <Zoom duration={400} trigger={0.90}>
        <div className={styles.Platform}>
            <img src={props.image} alt={props.name} />
            <h3>{props.name}</h3>
            <p>{props.children}</p>
        </div>
    </Zoom>
);

export default Platform;