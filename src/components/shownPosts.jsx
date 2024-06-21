import React, { Component, useState } from "react";
//import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase-config.js";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { Box, Heading, FormControl, FormLabel, Button, 
         Stack, Text, Divider, ButtonGroup,
         HStack } from "@chakra-ui/react";
import { CalendarIcon, InfoIcon } from "@chakra-ui/icons";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import "../format/oneLineDescription.css"
import postAvatar from "../icons/avatar13.svg"

export const ShowPosts = () => {
    return (
    <Card maxW='sm' width="300px" height="280px" justifyContent={'center'}>
    <CardBody>
    <Stack mt='2' spacing='3'>
      <HStack spacing={100}>
        <Heading size='md'>头像是本人</Heading>
        <img src={postAvatar} alt="Avatar" width="50" height="50"/>
      </HStack>
      <Text className="one-line-description" fontSize="sm">
        写的没有头发了这里有很多描述这里有很多描述这里有很多描述这里有很多描述这里有很多描述这里有很多描述这里有很多描述
      </Text>
    </Stack>
    <HStack mt={'4'} spacing={'3'}>
        <CalendarIcon boxSize={4} color={"gray.600"}/>
        <Text fontSize="sm">30/06/2024 9:30pm</Text>
    </HStack>
    <HStack mt={'3'} spacing={'3'}>
        <InfoIcon boxSize={4} color={"gray.600"}/>
        <Text fontSize="sm">PGP Foyer</Text>
    </HStack>
    </CardBody>
    <CardFooter style={{ marginTop: '-20px' }}
    justifyContent={'left'} mt={'0'}>
      <ButtonGroup spacing='4' justifyContent={'flex-start'}>
        <Button variant='solid' colorScheme='blue' fontSize="xs">
          Join Us(1/6)
        </Button>
        <Button variant='ghost' colorScheme='blue' fontSize="xs">
          View Event Details
        </Button>
      </ButtonGroup>
  </CardFooter>
  </Card>
    );
}
