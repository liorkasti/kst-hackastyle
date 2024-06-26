import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

type HeaderProps = {
  title: string;
  showBackButton?: boolean;
};

const Header: FC<HeaderProps> = ({ title, showBackButton = false }) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toggleMenu = () => (isOpen ? onClose() : onOpen());

  return (
    <Box as="header" bg="blue.500" color="white" px={4} py={3} boxShadow="md">
      <Flex alignItems="center" justifyContent="space-between">
        {showBackButton && (
          <Button
            variant="outline"
            colorScheme="whiteAlpha"
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        )}
        <Heading as="h1" size="lg">
          HackaStyle
        </Heading>
        <Flex alignItems="center">
          <Text fontSize="xl" ml={4}>
            {title}
          </Text>
          <IconButton
            ml={4}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Toggle Menu"
            variant="outline"
            colorScheme="whiteAlpha"
            onClick={toggleMenu}
          />
        </Flex>
      </Flex>
      {isOpen && (
        <Box mt={4} bg="blue.600" rounded="md" boxShadow="md">
          <Flex direction="column" p={4}>
            <Button
              mb={2}
              variant="link"
              colorScheme="whiteAlpha"
              onClick={() => navigate('/')}
            >
              Home
            </Button>
            <Button
              mb={2}
              variant="link"
              colorScheme="whiteAlpha"
              onClick={() => navigate('/clothing-list')}
            >
              Clothing List
            </Button>
            <Button
              variant="link"
              colorScheme="whiteAlpha"
              onClick={() => navigate('/saved-sets')}
            >
              Saved Sets
            </Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Header;
