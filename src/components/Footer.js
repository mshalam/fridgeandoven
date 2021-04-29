import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        // marginTop: theme.spacing(8),
        padding: theme.spacing(6, 0),
    },
    divider: {
        borderTop: `1px solid ${theme.palette.divider}`
    }
}));

export default function Footer(props) {
    const classes = useStyles();
    const { title } = props;

    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Typography className={classes.divider} variant="h6" align="center" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Email: charcadoinc@gmail.com
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Text: (702) 821-6144
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Address: 4848 N. Goldwater Blvd. Scottsdale, AZ, 85251
                </Typography>
            </Container>
        </footer>
    );
}

Footer.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
};