import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';

const sections = [
    { title: 'TUTORING', url: '#' },
    { title: 'CODING BOOTCAMP', url: '#' },
    { title: 'SAT/ACT PREP', url: '#' },
    { title: 'ABOUT US', url: '#' },
    { title: 'CONTACT US', url: '#' },
];

const mainFeaturedPost = {
    title: 'JOIN OUR CODING BOOTCAMP',
    description:
        "LEARN TO DEVELOP CODING PROJECTS FROM APPS TO VIDEO GAMES. ALL IN THIS IN DEPTH CODING BOOTCAMP FOR BEGINNERS.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'SIGN UP NOW',
    link: 'bootcamp'
};

const featuredPosts = [
    {
        title: 'TUTORING',
        description:
            'We do everything from middle school to college. Whether it be Math, Science, or English, we can help enhance your understanding and boost your grades. ',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
        link: '/tutoring',
        linkText: 'BOOK NOW',
    },
    {
        title: 'SAT/ACT PREP',
        description:
            'In depth SAT/ACT prep in order to help students with ther problem areas and boost their scores in order to attend their dream colleges.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
        link: '/sat',
        linkText: 'BOOK NOW',
    },
];

export default function Blog() {

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Charcado inc." sections={sections} />
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} />
                        ))}
                    </Grid>
                </main>
            </Container>
        </React.Fragment>
    );
}