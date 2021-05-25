import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import pythonLogo from '../images/pythonLogo.png'
import cSharpLogo from '../images/cSharpLogo.png'

const useStyles = makeStyles({
    card: {
        maxWidth: '48%',
        marginBottom: 30,
        minWidth: 250
    },
    media: {
        height: 140,
    },
});

export default function BootcampCards(props) {
    const classes = useStyles();
    const { session } = props;

    let pythonDates = 'Starts Saturdays September 4th - November 13th'
    let cSharpDates = 'Starts Sundays September 5th - November 14th'

    switch (session) {
        case 'fall':
            pythonDates = 'Starts Saturdays September 4th - November 13th'
            cSharpDates = 'Starts Sundays September 5th - November 14th'
            break;
        case 'spring':
            pythonDates = 'Starts Saturdays February 5th - April 16th'
            cSharpDates = 'Starts Sundays February 6th - April 17th'
            break;
        case 'summer':
            pythonDates = 'Starts Saturdays June 4th - August 13th'
            cSharpDates = 'Starts Sundays June 5th - August 14th'
            break;
        default:
            pythonDates = 'Starts Saturdays September 4th - November 13th'
            cSharpDates = 'Starts Sundays September 5th - November 14th'
    }


    return (
        <React.Fragment>
            <Card className={classes.card}>
                <CardActionArea>
                    <div align="center">
                        <img src={pythonLogo} />
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="h2" align="center">
                            <b>Python</b>
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h6" align="center">
                            <b>Learn To Code Apps, Websites And More!</b>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            {pythonDates}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            There will be 11 three-hour sessions
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            Sessions will be in-person. Either 9:30 am - 12:30 pm or 2:30 pm - 5:30 pm
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            This course is for beginners of all ages and will cover coding basics and understanding the fundamentals of programming
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            By the end of the course you will learn how to build your own program
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            You will obtain the building blocks to create apps, websites, artificial intelligence, automation,
                            and more!
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Typography variant="body2" color="textSecondary" component="h1" style={{ color: "black" }}>
                        <b>Price:</b>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="h1" style={{ color: "green" }}>
                        $999.99
                    </Typography>
                    <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        href='https://docs.google.com/forms/d/e/1FAIpQLSd4MJ3lnEedMmNPptSeCJfdYjXCzoBm4fxVZZEkDSbJDfiBjQ/viewform?usp=sf_link'
                        target="_blank"
                    >
                        REGISTER NOW
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.card}>
                <CardActionArea>
                    <div align="center">
                        <img src={cSharpLogo} />
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="h2" align="center">
                            <b>C#</b>
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h6" align="center">
                            <b>Learn To Build 2D {'&'} 3D Games</b>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            {cSharpDates}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            There will be 11 three-hour sessions
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            Sessions will be in-person. Either 9:30 am - 12:30 pm or 2:30 pm - 5:30 pm
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            This course is for beginners of all ages and will cover coding basics and understanding the fundamentals of programming
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            By the end of the course you will learn how to build your own program
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            You will obtain the building blocks to create 2D {'&'} 3D games across all platforms. including
                            ios, android, pc, and more!
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Typography variant="body2" color="textSecondary" component="h1" style={{ color: "black" }}>
                        <b>Price:</b>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="h1" style={{ color: "green" }}>
                        $999.99
                    </Typography>
                    <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        href='https://docs.google.com/forms/d/e/1FAIpQLSd4MJ3lnEedMmNPptSeCJfdYjXCzoBm4fxVZZEkDSbJDfiBjQ/viewform?usp=sf_link'
                        target="_blank"
                    >
                        REGISTER NOW
                    </Button>
                </CardActions>
            </Card>
        </React.Fragment>
    );
}
