import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        color: 'inherit',
        textDecoration: 'none',
        marginBottom: theme.spacing(2),
    },
    'toolbar:visited': {
        color: 'inherit',
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}));

export default function Header(props) {
    const classes = useStyles();
    const { sections, title } = props;

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar} component="a" href='https://mshalam.github.io/charcadoinc/#'>
                <Typography
                    component="h2"
                    variant="h3"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    {title}
                </Typography>
            </Toolbar>

        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};