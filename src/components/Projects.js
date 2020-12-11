import { ExternalLinkIcon, Icon } from '@chakra-ui/icons'
import { Box, Divider, Flex, Heading, HStack, Image, Link, SimpleGrid, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'

const ProjectItem = ({ project }) => {

    return (

        <Flex
            bg="transparent"
            height={{ base: "500px", md: "400px" }}
            width="100%" m="auto"
            flexDirection={{ base: "column", md: "row" }}
            alignItems={{ base: "center", md: "auto" }}
        >
            <Box
                w={{ base: "100%", md: "50%" }}
                h={{ base: "50%", md: "100%" }}
                borderRadius="8px"
                position='relative'
                zIndex='10'
                bg="brand.500"
                filter="grayscale(70%)"
                _hover={{ filter: "grayscale(10%)" }}
                transition="ease-in-out 0.3s"
            >

                <Link href={project.linkDemo} isExternal>
                    <Image
                        w="100%"
                        h="100%"
                        bg="brand.900"
                        alt={project.name}
                        borderRadius="8px"
                        src={project.img}
                        objectFit="cover"
                        position='relative'
                        zIndex='-1'
                    // objectPosition="50% 50%"
                    />
                </Link>
            </Box>

            <Flex
                w={{ base: "100%", md: "50%" }}
                h={{ base: "50%", md: "100%" }}
                p={{ base: "1rem", md: "2rem" }} flexDirection="column"
                textAlign={{ base: "left", md: "right" }}
                justifyContent="space-between"
                alignItems="end"
            >

                <Heading
                    color="brand.500"
                    mt={{ base: "0", md: "2rem" }}
                    fontSize={{ base: "20px", md: "35px" }}
                    w="100%"
                >{project.name}
                </Heading>

                <Text
                    color="brand.200"
                    h={{ base: "30%", md: "50%" }}
                    mt={{ base: "0.5rem", md: "2rem" }}
                    fontSize={{ base: "12px", md: "15px" }}
                >{project.desc}
                </Text>

                <HStack w="100%" spacing="24px">
                    {project.tags.map(tag => <Tag color="brand.200" borderColor="brand.200" variant="outline" size="md">{tag}</Tag>)}
                </HStack>

                <HStack m={{ base: "auto", md: "0" }} mt="1rem">

                    <Link href={project.linkGithub} isExternal>
                        <Icon
                            w="35px"
                            h="35px"
                            color="brand.200"
                            as={AiFillGithub}
                            mr="0.5rem"
                            _hover={{ color: "brand.500" }}
                            transition="ease-in-out 0.3s"
                        />
                    </Link>

                    <Link href={project.linkDemo} isExternal>
                        <ExternalLinkIcon
                            w="35px"
                            h="35px"
                            color="brand.200"
                            _hover={{ color: "brand.500" }}
                            transition="ease-in-out 0.3s"
                        />
                    </Link>
                </HStack>
            </Flex>
        </Flex >
    )
}
const Projects = ({ projects }) => {

    return (

        <Box
            w={{ base: "80%", md: "60%" }}
            bg="brand.900"
            name="projects"
        >
            <Heading
                color="brand.200"
                mb={{ base: "5rem", md: "10rem" }}
            >Projects
            <Divider mt="1rem" />
            </Heading>
            <SimpleGrid columns={1} spacing="100px">
                {projects.map(project => <ProjectItem project={project} />)}
            </SimpleGrid>
        </Box>
    )
}

export default Projects