import { Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import * as Scroll from 'react-scroll'

const ScrollLink = Scroll.Link

const Home = () => {

    return (


        <Flex w="80%"
            h="100vh"
            bg="transparent"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >

            <Heading
                textAlign="center"
                lineHeight={{ base: "4rem", lg: "5rem" }}
                fontSize={{ base: "35px", md: "40px", lg: "45px" }}
                color="brand.200">Hello, my name is
            <span style={{ color: "#66fcf1" }}> Ivan Banovacki</span>
                <p>I'm front-end developer based in Belgrade, Serbia</p>
            </Heading>

            <ScrollLink to="contact" smooth={true}>
                <Button
                    size="lg"
                    mt="2rem"
                    mb={{ base: "10rem", md: "5rem" }}
                    _hover={{ bgColor: "brand.500", color: "brand.900" }}
                    variant="outline"
                    borderColor="brand.500"
                    color="brand.500"
                    zIndex="1"

                >
                    Get in touch</Button>
            </ScrollLink>
        </Flex>
    )
}

export default Home