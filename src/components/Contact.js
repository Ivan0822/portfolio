import { Flex, Heading, Box, Icon, Link, Divider, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai'


const Contact = () => {


    return (
        <Box id="contact" h="80vh" w={{ base: "80%", md: "60%" }} color="brand.200" mt="10rem">
            <Heading>Get in touch<Divider mt="1rem" /></Heading>
            <Flex pt="10rem" m="auto" w={{ base: "80%", md: "50%" }} flexDirection="column" alignItems="center" data-aos="fade-up">
                <Heading textAlign="center" >If you've got any questions, feel free to contact me!</Heading>
                <Flex mt="5rem">
                    <Box>
                        <Link href='https://github.com/IvanBanovacki' isExternal>
                            <Icon
                                w={{ base: "80px", md: "100px" }}
                                h={{ base: "80px", md: "100px" }}
                                as={AiFillGithub}
                                mr="2rem"
                                _hover={{ color: "brand.500" }}
                                transition="ease-in-out 0.3s"
                            />
                        </Link>
                    </Box>
                    <Box>
                        <Link href="https://www.linkedin.com/in/ivan-banovacki" isExternal>
                            <Icon
                                w={{ base: "80px", md: "100px" }}
                                h={{ base: "80px", md: "100px" }}
                                as={AiFillLinkedin}
                                mr="2rem"
                                _hover={{ color: "brand.500" }}
                                transition="ease-in-out 0.3s"
                            />
                        </Link>
                    </Box>
                    <Link href="mailto:banovacki.ivan@gmail.com" isExternal>
                        <Icon
                            w={{ base: "80px", md: "100px" }}
                            h={{ base: "80px", md: "100px" }}
                            as={AiFillMail}
                            _hover={{ color: "brand.500" }}
                            transition="ease-in-out 0.3s"
                        />
                    </Link>
                </Flex>
            </Flex>
            <Flex w="100%" h="7vh" mt="11rem" bg="brand.900" alignItems="center" justifyContent="center" >
                <Text color="brand.200">&copy; Copyright {new Date().getFullYear()} Ivan Banovacki</Text>
            </Flex>
        </Box >
    )
}

export default Contact

