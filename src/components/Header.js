import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { Box, Flex, Heading, Link } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import useScrollDirection from "../hooks/useScrollDirection"
import * as Scroll from 'react-scroll'

const ScrollLink = Scroll.Link

const MenuItem = ({ text, target }) => {
    return (
        <ScrollLink to={target} smooth={true} spy={true}>
            <Link
                textAlign={{ base: "center" }}
                mt={{ base: "2rem", md: "0" }}
                mr={{ base: "0", md: "2rem" }}
                color="brand.200"
                _hover={{ color: "brand.500" }}
                transition="ease-in-out 0.3s"
                fontSize={{ base: "25px", md: "20px" }}
            >
                {text}
            </Link>
        </ScrollLink>
    )
}
const Header = () => {

    const [isMounted, setIsMounted] = useState(false);
    const [show, setShow] = useState(false)
    const [scroll, setScroll] = useState(false)
    const scrollDir = useScrollDirection('down')

    const toggleMenu = () => setShow(!show)

    const handleScroll = () => {
        setScroll(window.pageYOffset < 50)
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsMounted(true);
        }, 100);

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (

        <Box w="100%"
            position="sticky"
            top="0"
            left="0"
            bg="brand.900"
            transform={{ base: "none", md: !scroll && scrollDir === 'down' ? "translateY(-100%)" : "none" }}
            transition="transform 0.3s ease-in-out"
            zIndex="99"
        >
            <Flex
                m="auto"
                w={{ base: "100%", md: "70%" }}
                h="8vh"
                align="center"
                justifyContent="space-between"
                p={{ base: "2rem", md: "0rem" }}
            >
                <Box>
                    <Heading color="brand.500"
                        fontFamily="PT Sans"
                        fontSize="30px"
                    >Ivan Banovacki
                        </Heading>
                </Box>
                <Flex
                    transform={{ base: show ? "translateX(0)" : "translateX(-100%)", md: "none" }}
                    transition="transform 0.3s ease-in-out"
                    zIndex="99"
                    position={{ base: "fixed", md: "relative" }}
                    bg="brand.900"
                    top={{ base: "0" }}
                    left={{ base: "0" }}
                    mt={{ base: "4rem", md: "0" }}
                    w={{ base: "100%", md: "auto" }}
                    h={{ base: "100vh", md: "auto" }}
                    flexDirection={{ base: "column", md: "row" }}
                >
                    <MenuItem target={"home"} text="Home" />
                    <MenuItem target={"projects"} text="Projects" />
                    <MenuItem target={"contact"} text="Contact" />
                </Flex>
                <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
                    {show ? <CloseIcon color="brand.500" /> : <HamburgerIcon color="brand.500" />}
                </Box>
            </Flex >
        </Box>

    )
}

export default Header