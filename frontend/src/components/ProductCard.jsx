import { Box, Heading, Image, Text , HStack, IconButton, useColorModeValue, useToast, Modal, useDisclosure, ModalOverlay, ModalHeader, ModalContent, ModalCloseButton, ModalBody,VStack,Input,Button, ModalFooter } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import React, { useState } from 'react'
import { useProductStore } from '../store/product';

const ProductCard = ({product}) => {

  const [updatedProduct, setUpdatedProduct] = useState(product);

  const textColor = useColorModeValue("gray.600","gray.200");
  const bg = useColorModeValue("white" , "gray.800");

  const {deleteProduct, updateProduct} = useProductStore();

  const toast = useToast();

  const {isOpen, onOpen, onClose} = useDisclosure()

  const handleDeleteProduct= async (id)=>{
    const {success, message} = await deleteProduct(id)
    if(!success){
      toast({
        title:"Error",
        description:message,
        status:'error',
        duration:3000,
        isClosable:true
      })
    }else{
      toast({
        title:"Success",
        description:message,
        status:'success',
        duration:5000,
        isClosable:true
      })
    }
  }

  const handleUpdateProduct = async (id, updatedProduct) =>{
    const {success, message} = await updateProduct(id, updatedProduct);
    onClose();
    if(!success){
      toast({
        title:"Error",
        description:message,
        status:"error",
        duration:3000,
        isClosable:true
      })
    }else{
      toast({
        title:"Success",
        description:"Product Updated Successfully",
        status:"success",
        duration:3000,
        isClosable:true
      })
    }
  }
  return (
    <Box
    shadow={'lg'}
    rounded={'lg'}
    overflow={'hidden'}
    transition={'all 0.3s'}
    _hover={{transform:"translateY(-5px)", shadow:"xl"}}
    bg={bg}
    >
      <Image src={product.image} alt={product.name} h={48} w={'full'} objectFit={'cover'} />

      <Box p={4}>
      <Heading as={'h3'} size={'md'} mb={2}>{product.name}</Heading>
      <Text fontSize={'xl'} fontWeight={'bold'} color={textColor} mb={4}>
      ${product.price}
      </Text>

      <HStack spacing={2}>
      <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme='blue'/>
      <IconButton icon={<DeleteIcon />} onClick={() => handleDeleteProduct(product._id)}  colorScheme='red'/>

      </HStack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Product</ModalHeader>
        <ModalCloseButton/>

        <ModalBody>
          <VStack spacing={4}>
            <Input
            placeholder='Product Name'
            name='name'
            value={updatedProduct.name}
            onChange={(e)=>{setUpdatedProduct({...updatedProduct, name: e.target.value})}}
            />

            <Input
            placeholder='Product Price'
            name='price'
            value={updatedProduct.price}
            onChange={(e)=>{setUpdatedProduct({...updatedProduct, price: e.target.value})}}
            />

            <Input
            placeholder='Product Image'
            name='image'
            value={updatedProduct.image}
            onChange={(e)=>{setUpdatedProduct({...updatedProduct, image: e.target.value})}}
            />

          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={()=> handleUpdateProduct(product._id, updatedProduct)}>Update </Button>
          <Button variant={'ghost'} onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>

      </Modal>
    </Box>
  )
}

export default ProductCard