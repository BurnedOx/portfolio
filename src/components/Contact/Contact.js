import React from 'react';
import styles from './Contact.module.css';
import ContactForm from './ContactForm/ContactForm';
import Icon from '@material-ui/core/Icon';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

const Contact = (props, ref) => {
    const [loading, setLoading] = React.useState(false);

    const formSubmit = (data) => {
        setLoading(true);
        axios.post('https://mak-dev-b0b36.firebaseio.com/contacts.json', data)
            .then(res => {
                setLoading(false);
                alert("Sent!");
            })
            .catch(err => alert(err.message));
    };

    return (
        <div className={styles.Contact} ref={ref}>
            {!loading ?
                <React.Fragment>
                    <div className={styles.Form}>
                        <h1>Send me a message</h1>
                        <p>You can contact me with anything related to Services. I'll get in touch with you as soon as possible.</p>
                        <ContactForm submit={formSubmit} />
                    </div>
                    <div className={styles.Information}>
                        <div>
                            <Icon style={{ color: 'rgb(84, 76, 158)' }}>call</Icon>
                            <h3>Give me a call</h3>
                        </div>
                        <p>Mainak Debnath</p>
                        <p>+91 8100513876</p>

                        <div>
                            <Icon style={{ color: 'rgb(84, 76, 158)' }}>work</Icon>
                            <h3>Legal Information</h3>
                        </div>
                        <p>Bank: State Bank of India</p>
                        <p>Acc No.: 32343242432432</p>
                        <p>ISFC: SBIN0042</p>
                    </div>
                </React.Fragment> : <CircularProgress />
            }
        </div>
    );
};

export default React.forwardRef(Contact);