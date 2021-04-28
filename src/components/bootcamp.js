import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import BootcampCards from './bootcampCards';
import Grid from '@material-ui/core/Grid';
import bootcampBanner from '../images/bootcampBanner.png'


const sections = [
    { title: 'TUTORING', url: 'https://www.picktime.com/charmander#booking-content:~:text=tutoring,-In' },
    { title: 'CODING BOOTCAMP', url: 'https://www.picktime.com/charmander/classes' },
    { title: 'SAT/ACT PREP', url: 'https://www.picktime.com/charmander#booking-content:~:text=test%20prep' },
    { title: 'VIOLIN LESSONS', url: 'https://www.picktime.com/charmander#booking-content:~:text=violin' },
    { title: 'CONTACT US', url: 'https://www.picktime.com/charmander' },
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
                    </main>
                </Container>
            </React.Fragment>
        )
    }
}

export default Bootcamp