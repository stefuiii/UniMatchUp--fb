import React, { useState } from "react"
import { ChakraProvide, IconButton } from '@chakra-ui/react'

export const Home = (props) =>  {
    const [message, setMessage] = useState("Welcome to UniMatchUp!");

    return (
        <div>
          <h1>Home Page</h1>
          <p>{message}</p>
          {props.data && (
            <div>
              <h2>Data from props:</h2>
              <ul>
                {props.data.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
}