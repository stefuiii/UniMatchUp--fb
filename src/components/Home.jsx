import React, { useState } from "react"
import { ChakraProvide, IconButton } from '@chakra-ui/react'
import {
  Drawer,
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react'

export const Home = () =>  {
  const [size, setSize] = React.useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }

  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']

  return (
    <>
        <Button
          onClick={() => handleClick('sm')}
          key={'sm'}
          m={4}
        >{`Your Page`}</Button>

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader mt={10}>{`Hello Stephanie`}</DrawerHeader>
          <DrawerBody>
            <p>
              Here is your personal page.
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}