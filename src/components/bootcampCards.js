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
    card1: {
        maxWidth: '48%',
    },
    card2: {
        maxWidth: '48%',
    },
    media: {
        height: 140,
    },
});

export default function BootcampCards() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Card className={classes.card1}>
                <CardActionArea>
                    <div align="center">
                        <img src={pythonLogo} />
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" align="center">
                            Python
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            Starts Monday and Wednesdays June 7th - July 28th
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            There will be 16 two-hour sessions
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            Sessions will be in-person. Either 10:00 am - 12:00 pm or 3:00 pm - 5:00 pm
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            The course will cover programming basics
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            By the end of the course you will learn how to build your own program
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            You will obtain the building blocks to create apps, webistes, artificial intelligence, automation,
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
                        color="primary"
                        href='https://docs.google.com/forms/d/e/1FAIpQLSd4MJ3lnEedMmNPptSeCJfdYjXCzoBm4fxVZZEkDSbJDfiBjQ/viewform?usp=sf_link'
                        target="_blank"
                    >
                        REGISTER NOW
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.card2}>
                <CardActionArea>
                    <div align="center">
                        <img src={cSharpLogo} />
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" align="center">
                            C#
                    </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            Starts Tusdays and Thrusdays June 8th - July 29th
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            There will be 16 two-hour sessions
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            Sessions will be in-person. Either 10:00 am - 12:00 pm or 3:00 pm - 5:00 pm
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            The course will cover programming basics
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
