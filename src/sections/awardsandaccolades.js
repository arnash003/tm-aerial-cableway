/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from 'theme-ui';
import SectionHeader from 'components/section-header';
// import Rating from 'components/rating';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';
import Avatar1 from 'assets/awards/avatar1.png';


const data = [
    {
        id: 1,
        title: 'SABS ISO 14001',
        description:
            'Environmental Certification',
        avatar: Avatar1,
        name: 'Environmental Certification Certification',
        review: 5,
    },
    {
        id: 2,
        title: 'SABS ISO 450001',
        description:
            'Health &Safety Certification',
        avatar: '',
        name: 'Health & Safety Certification',
        designation: '',
        review: 5,
    },
    {
        id: 3,
        title: 'Africa’s Leading Tourist Attraction',
        description:
            'Africa’s Leading Tourist Attraction',
        avatar: '',
        name: 'Table Mountain is named Africa’s Leading Tourist Attraction in the World Travel Awards.',
        designation: '',
        review: 5,
    },
    {
        id: 4,
        title: 'African Responsible Tourism Awards',
        description:
            'African Responsible Tourism Awards for Best Resource Management',
        avatar: '',
        name: '',
        designation: '',
        review: 5,
    },
    {
        id: 5,
        title: 'New 7 Wonder of Nature',
        description:
            'Table Mountain is an official New 7 Wonder of Nature.',
        avatar: '',
        name: '',
        designation: '',
        review: 5,
    },
    {
        id: 6,
        title: 'TripAdvisors Travellers Choice Awards',
        description:
            'TripAdvisors Certificate of Excellence 2014',
        avatar: '',
        name: '',
        designation: '',
        review: 5,
    },
    {
        id: 7,
        title: 'Level 1 B-BBEE rating',
        description:
            'Awarded a Level 1 B-BBEE rating',
        avatar: '',
        name: '',
        designation: '',
        review: 5,
    },
    {
        id: 8,
        title: 'SANParks Cape Regional Achievement',
        description:
            'Business Partner of the Year',
        avatar: '',
        name: '',
        designation: '',
        review: 5,
    },
    {
        id: 9,
        title: 'Imvelo Award for Responsible Tourism',
        description:
            'Best single resource management: Waste management (finalist)',
        avatar: '',
        name: '',
        designation: '',
        review: 5,
    },
    {
        id: 10,
        title: 'Lilizela Tourism Award 2015',
        description:
            'Visitor Experience of the Year (provincial winner)',
        avatar: '',
        name: '',
        designation: '',
        review: 5,
    },
    {
        id: 11,
        title: 'Cheapflights Travel Award 2016',
        description:
            'Best South African Attraction',
        avatar: '',
        name: '',
        designation: '',
        review: 5,
    },
    {
        id: 12,
        title: 'Best Tourist Attraction',
        description:
            'The KFM Best of the Cape Awards',
        avatar: '',
        name: '',
        designation: '',
        review: 5,
    },
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1619 },
        items: 4,
        slidesToSlide: 4, // optional, default to 1.
    },
    laptop: {
        breakpoint: { max: 1619, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 639, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

const carouselParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: "",
    containerClass: "carousel-container",
    customButtonGroup: <ButtonGroup />,
    dotListClass: "",
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    itemClass: "",
    keyBoardControl: true,
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: "",
    slidesToSlide: 1,
}

export default function AwardsAndAccolades() {
    return (
        <section id="testimonial" sx={{ variant: 'section.testimonial' }}>
            <Container css={{ textAlign: 'center' }}>
                <SectionHeader
                    slogan="Awards & Accolades"
                    title="Client Recognition"
                />
            </Container>
            <Box sx={styles.carouselWrapper}>
                <Carousel {...carouselParams}>
                    {data.map((item) => (
                        <Box sx={styles.reviewCard} key={item.sliderClass}>
                            {/* <Rating rating={item.review} /> */}
                            <Heading as="h3" sx={styles.title}>
                                {item.title}
                            </Heading>
                            <Text sx={styles.description}>{item.description}</Text>
                            <div className="card-footer">
                                <div className="image">
                                    <Image src={item.avatar} alt="Client Image" />
                                </div>
                                <div className="reviewer-info">
                                    <Heading as="h4" sx={styles.heading}>{item.name}</Heading>
                                    <Text sx={styles.designation}>
                                        {item.designation}
                                    </Text>
                                </div>
                            </div>
                        </Box>
                    ))}

                </Carousel>
            </Box>
        </section>
    );
}

const styles = {
    carouselWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        alignItems: 'flex-end',
        mt: '-30px',
        px: '15px',
        '.carousel-container': {
            width: '100%',
            maxWidth: [
                '100%',
                null,
                null,
                '750px',
                '1000px',
                '1180px',
                null,
                'calc(50% + 865px)',
            ],
            mr: ['auto', null, null, null, null, null, null, '-220px'],
            ml: 'auto',
            '.react-multi-carousel-item': {
                transition: 'all 0.25s',
            },
            '.react-multi-carousel-item--active:nth-of-type(4n)': {
                opacity: '0.5',
                '@media screen and (max-width: 1620px)': {
                    opacity: 1,
                },
            },
        },
    },
    reviewCard: {
        boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
        transition: 'all 0.3s',
        borderRadius: '6px',
        p: [
            '30px 20px 35px',
            '30px 25px 35px',
            '30px 20px 35px',
            '35px 30px 40px 40px',
            '30px 30px 35px',
            '35px 30px 40px 40px',
        ],
        bg: 'white',
        textAlign: 'left',
        m: [
            '28px 5px 30px 5px',
            '28px 20px 30px 20px',
            '28px 15px 30px 15px',
            '28px 15px 30px 15px',
            '30px 20px 40px',
        ],
        '&:hover': {
            boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
        },
        '.rating': {
            mb: [1, null, null, 2],
            ul: {
                pl: 0,
                listStyle: 'none',
                mb: 0,
                display: 'flex',
            },
            svg: {
                marginRight: '2px',
                '&:last-of-type': {
                    marginRight: 0,
                },
            },
            '.star': {
                color: 'primary',
                mr: '1px',
            },
            '.star-o': {
                color: '#ddd',
                mr: '1px',
            },
        },
        '.card-footer': {
            display: 'flex',
            alignItems: 'center',
            marginTop: [5, null, null, '33px'],
            '.image': {
                flexShrink: 0,
                mr: [3, null, null, 4],
                display: 'flex',
                img: {
                    width: '55px',
                    height: '55px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                },
            },
        },
    },
    title: {
        fontSize: [1, 2],
        fontWeight: 700,
        mb: [3, null, null, '22px'],
        color: 'text',
        lineHeight: 1.6,
    },
    description: {
        fontSize: [1, null, null, 2],
        fontWeight: 'normal',
        color: 'text',
        lineHeight: [1.85, null, 2],
    },
    heading: {
        fontSize: [1, null, null, 2],
        fontWeight: 700,
        mb: '3px',
        color: 'text',
        lineHeight: 1.3,
    },
    designation: {
        color: 'primary',
        fontWeight: '500',
        fontSize: 1,
        lineHeight: 1.4,
    },
};
