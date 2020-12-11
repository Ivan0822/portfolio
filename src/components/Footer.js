import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {

    return (
        <Flex w="100%" h="7vh" bg="brand.900" alignItems="center" justifyContent="center" >
            <Text color="brand.200">&copy; Copyright {new Date().getFullYear()} Ivan Banovacki</Text>
        </Flex>
    )
}

export default Footer