import React, { Component, useEffect, useState } from "react";
//import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import { auth, database } from "../firebase-config.js";
import { collection, addDoc, doc, setDoc, getDoc, getDocs, orderBy, query, where} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, useAuthState } from "firebase/auth";
import { Box, Heading, FormControl, FormLabel, Button, 
         Stack, Text, Divider, ButtonGroup,
         HStack, PostCard, 
         InputGroup,
         InputLeftElement,
         ChakraProvider,
         Input, Flex, 
         useRadio, Grid } from "@chakra-ui/react";
import { CalendarIcon, InfoIcon, SearchIcon, PhoneIcon } from "@chakra-ui/icons";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import "../format/oneLineDescription.css"
import postAvatar from "../icons/avatar13.svg"
import grabHeading from "../icons/打车场景.svg"

const ShowPosts = ({post}) => {
    const date = post.Date.toDate().toLocaleString();
    return (
    <Card maxW='sm' width="150px" height="200px" justifyContent={'center'}>
      <CardBody>
        <Stack spacing='3'>
          <HStack spacing={100}>
            <Heading size='xs'>{post.Title}</Heading>
          </HStack>
      </Stack>
      <HStack mt={'4'} spacing={'3'}>
        <CalendarIcon boxSize={4} color={"gray.600"}/>
        <Text fontSize="xs">{date}</Text>
      </HStack>
      <HStack mt={'3'} spacing={'3'}>
        <InfoIcon boxSize={4} color={"gray.600"}/>
        <Text fontSize="xs">{post.Location}</Text>
      </HStack>
      </CardBody>
      <CardFooter style={{ marginTop: '-30px' }}
        justifyContent={'left'}>
        <ButtonGroup spacing='4' justifyContent={'flex-start'}>
          <Button size="sm" variant='solid' colorScheme='blue' fontSize="xs">
            Join Us(1/6)
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
    );
    

}

export const ShowAll = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const postsPerPage = 4;
    const user = auth.currentUser;

    useEffect (() => {
        const fetchPosts = async () => {
            if (user) {
              let allPosts = [];
              const collections = ["postInfo", "foodPost", "sportPost", "groupPost"];

              for (const perCollect of collections) {
                const postsCollection = query(collection(database, perCollect), 
                where ("uid", "==", user.uid),
                orderBy("Date", "asc"));
                const querySnapshot = await getDocs(postsCollection);
                const postsData = querySnapshot.docs.map(doc => doc.data());
                allPosts = [...allPosts, ...postsData];
              }
              setPosts(allPosts);
            }
        };
        fetchPosts();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const filteredPosts = posts.filter(post => 
      post.Title.toLowerCase().includes(search.toLowerCase())
    );
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    const handleNextPage = () => {
      if (currentPage < Math.ceil(posts.length / postsPerPage)) {
        setCurrentPage(currentPage + 1);
      }
    };

    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };

    return (
        <ChakraProvider>
          <Box 
            style={{ display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexDirection: 'column'}}>
           <Grid templateColumns="repeat(2, 1fr)" gap={6} marginTop={5}>
          {currentPosts.map((post, index) => (
            <ShowPosts key={index} post={post} />
          ))}
        </Grid>
          <Box style={{ display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexDirection: 'column',
            marginTop: '30px'}}>
          <ButtonGroup spacing='4'>
          <Button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </Button>
          <Button onClick={handleNextPage} disabled={currentPage === Math.ceil(posts.length / postsPerPage)}>
            Next
          </Button>
        </ButtonGroup>
          </Box>
          </Box>
        </ChakraProvider>
    );
}
