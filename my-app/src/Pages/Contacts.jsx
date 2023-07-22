import React from "react";
import { Heading, Box, Text, Link, Input, IconButton, HStack } from "@chakra-ui/react";
import { RiMailCheckFill, RiArrowRightLine, RiFacebookFill, RiInstagramLine, RiLinkedinFill, RiGithubLine } from "react-icons/ri";

export default function Contacts() {
  return (
    <Box py="10" textAlign="center">
      <Heading as="h1">Contact Us</Heading>
      <Text mt="4" fontSize="lg">
        Have any questions or inquiries? Get in touch with us!
      </Text>
      <Box mt="8" maxW="md" mx="auto">
        <Input placeholder="Your Name" size="lg" mb="4" />
        <Input placeholder="Your Email" size="lg" mb="4" />
        <Input placeholder="Subject" size="lg" mb="4" />
        <Input placeholder="Message" size="lg" mb="4" />
        <IconButton
          colorScheme="telegram"
          icon={<RiMailCheckFill />}
          aria-label="Send Message"
          size="lg"
        />
      </Box>
      <Text mt="10" fontSize="lg">
        You can also connect with us on social media:
      </Text>
      <HStack justifyContent="center" mt="4" spacing="4" >
        <Link href="#" title="Facebook" isExternal>
          <IconButton
            icon={<RiFacebookFill />}
            aria-label="Facebook"
            variant="ghost"
            size="lg"
          />
        </Link>
        <Link href="#" title="Instagram" isExternal>
          <IconButton
            icon={<RiInstagramLine />}
            aria-label="Instagram"
            variant="ghost"
            size="lg"
          />
        </Link>
        <Link href="#" title="LinkedIn" isExternal>
          <IconButton
            icon={<RiLinkedinFill />}
            aria-label="LinkedIn"
            variant="ghost"
            size="lg"
          />
        </Link>
        <Link href="#" title="GitHub" isExternal>
          <IconButton
            icon={<RiGithubLine />}
            aria-label="GitHub"
            variant="ghost"
            size="lg"
          />
        </Link>
      </HStack>
    </Box>
  );
}

