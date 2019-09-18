import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    button: {
        marginTop: theme.spacing(4),
        marginLeft: theme.spacing(25),
        backgroundColor: 'rgb(84, 76, 158)'
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
}));

const ContactForm = (props) => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.submit(values);
    };

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="standard-name"
                label="Your Name"
                style={{ marginRight: 16 }}
                fullWidth
                margin="normal"
                value={values.name}
                onChange={handleChange('name')}
            />
            <TextField
                id="standard-email-input"
                label="Your Email"
                style={{ marginRight: 16 }}
                fullWidth
                margin="normal"
                autoComplete="email"
                value={values.email}
                onChange={handleChange('email')}
            />
            <TextField
                id="standard-number"
                label="Phone"
                style={{ marginRight: 16}}
                fullWidth
                margin="normal"
                type="number"
                value={values.phone}
                onChange={handleChange('phone')}
            />
            <TextField
                id="filled-multiline-static"
                label="Message"
                style={{ marginRight: 16 }}
                multiline
                rows="4"
                fullWidth
                margin="normal"
                value={values.message}
                onChange={handleChange('message')}
            />
            <Button variant="contained" color="primary" className={classes.button} onClick={handleSubmit}>
                Send
                <Icon className={classes.rightIcon}>send</Icon>
            </Button>
        </form>
    );
};

export default ContactForm;