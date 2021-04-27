import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card1: {
        maxWidth: '48%',
        //margin: 10,
        marginLeft: 0
    },
    card2: {
        maxWidth: '48%',
        //margin: 10,
        marginRight: 0
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
                    <CardMedia
                        className={classes.media}
                        image="https://source.unsplash.com/random"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        size="small"
                        color="primary"
                        href='https://docs.google.com/forms/d/e/1FAIpQLSd4MJ3lnEedMmNPptSeCJfdYjXCzoBm4fxVZZEkDSbJDfiBjQ/viewform?usp=sf_link'
                        target="_blank"
                    >
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.card2}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://source.unsplash.com/random"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                    </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </React.Fragment>
    );
}
