import React from 'react'
import { Container, HStack, Flex,Text,Button, useColorMode} from '@chakra-ui/react'
import {PlusSquareIcon} from '@chakra-ui/icons'
import { LuSun } from "react-icons/lu";
import { IoMoon } from "react-icons/io5";
import { Link } from 'react-router-dom';

const NavBar = () => {
  const {colorMode, toggleColorMode} = useColorMode();



  return (
    <Container
    maxW={"1140px"}
    px={4}
    
    >
      <Flex
      h={16}
      alignItems={'center'}
      justifyContent={"space-between"}
      flexDirection={{
          base:"column",
          sm:"row"
      }}>
        <Link to={"/"}>
        <Text
        fontSize={{base: "22", sm:"28"}}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        textAlign={"center"}
        bgGradient={"linear(to-r, cyan.400, blue.500)"}
        bgClip={"text"}>
          Product Store 🛒
        </Text>
        </Link>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
          <Button><PlusSquareIcon fontSize={20} /></Button>
          </Link>

          <Button
          onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size="20"/>}
          </Button>

        </HStack>

      </Flex>


    </Container>
  )
}

export default NavBar