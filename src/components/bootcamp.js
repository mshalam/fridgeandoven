import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import BootcampCards from './bootcampCards';
import Grid from '@material-ui/core/Grid';
import bootcampBanner from '../images/bootcampBanner.png'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Footer from './Footer';

const sections = [
    { title: 'TUTORING', url: 'https://mshalam.github.io/charcadoinc/#/tutoring' },
    { title: 'CODING BOOTCAMP', url: 'https://mshalam.github.io/charcadoinc/#/bootcamp' },
    { title: 'SAT/ACT PREP', url: 'https://www.picktime.com/charmander#booking-content:~:text=test%20prep', target: "_blank" },
    { title: 'VIOLIN LESSONS', url: 'https://www.picktime.com/charmander#booking-content:~:text=violin', target: "_blank" },
    { title: 'ABOUT US', url: 'https://mshalam.github.io/charcadoinc/#/about' },
    { title: 'CONTACT US', url: 'https://mshalam.github.io/charcadoinc/#/contact' },
];

const mainFeaturedPost = {
    title: 'JOIN OUR CODING BOOTCAMP',
    description:
        "LEARN TO DEVELOP CODING PROJECTS FROM APPS TO VIDEO GAMES. ALL IN THIS IN DEPTH CODING BOOTCAMP FOR BEGINNERS.",
    image: bootcampBanner,
    imgText: 'main image description',
    linkText: 'REGISTER NOW',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSd4MJ3lnEedMmNPptSeCJfdYjXCzoBm4fxVZZEkDSbJDfiBjQ/viewform?usp=sf_link'
};

export class Bootcamp extends Component {

    async componentDidMount() {
        //console.log("i'm over here: ")
    }

    render() {

        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Header title="Charcado inc." sections={sections} />
                    <main>
                        <MainFeaturedPost post={mainFeaturedPost} />
                        <Grid container spacing={2} justify="space-around" >
                            <BootcampCards />
                        </Grid>
                        <Card >
                            <div >
                                <CardContent>
                                    <Typography component="h2" variant="h5">
                                        <b>Private Coding Lessons</b>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="li">
                                        Individualized attention
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="li">
                                        Custom curriculum to your specific needs
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="li">
                                        Group rates available upon request
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="li">
                                        $75/hour for in office and online lessons
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="li">
                                        $100/hour for in-home lessons
                                    </Typography>
                                    <br />
                                    <Button
                                        size="large"
                                        variant="contained"
                                        color="primary"
                                        href='https://docs.google.com/forms/d/e/1FAIpQLSf9Gxhh606RVOllKQFegonhfQptjN7llQbS5pzrrLyFGlpNmQ/viewform?usp=sf_link'
                                        target="_blank"
                                    >
                                        REGISTER NOW
                                    </Button>
                                </CardContent>
                            </div>
                        </Card>
                    </main>
                </Container>
                <Footer title="Contact Us" />
            </React.Fragment>
        )
    }
}

export default Bootcamp