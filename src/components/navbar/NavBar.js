import { Link } from 'components/link';
import React from 'react'
import { jsx, Container, Flex, Button } from 'theme-ui';
import menuItems from './navbar.data';


const NavBar = () => {
    return (
        <Container sx={styles.NavBar}>
            <Flex as="nav" sx={styles.nav}>
                {menuItems.map((menuItem, i) => (
                    <Link
                        activeClass="active"
                        to={menuItem.path}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        key={i}
                    >
                        {menuItem.label} : {menuItem.Mocktext}
                    </Link>
                ))}
            </Flex>
        </Container>
    )
};



export default NavBar;

const styles = {
    NavBar: {
        color: 'text',
        fontWeight: 'body',
        py: 10,
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'transparent',
        transition: 'all 0.4s ease',
        // animation: `${positionAnim} 0.4s ease`,
        '.donate__btn': {
            flexShrink: 0,
            mr: [15, 20, null, null, 0],
            ml: ['auto', null, null, null, 0],
        },
        nav: {
            mx: 'auto',
            display: 'none',
            '@media screen and (min-width: 1024px)': {
                display: 'block',
            },
            a: {
                fontSize: 2,
                fontWeight: 'body',
                px: 4,
                cursor: 'pointer',
                lineHeight: '1.2',
                transition: 'all 0.15s',
                '&:hover': {
                    color: 'primary',
                },
                '&.active': {
                    color: 'primary',
                },
            },
        },
    },
};