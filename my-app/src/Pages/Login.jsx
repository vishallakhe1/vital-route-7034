import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
  Text,
} from "@chakra-ui/react";


export default function Login() {
  const { setIsAuth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make the API call to authenticate the user
      // Replace the API endpoint with your own authentication endpoint
      const response = await fetch(`https://reqres.in/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (data.token) {
        setIsAuth(true);
        showAlert("Login successful...");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const showAlert = (message) => {
    alert(message);
  };

  return (
    <Box maxW="md" mx="auto" mt="8">
      <Heading textAlign="center" mb="4">
        Login
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isRequired mt="4">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button
          colorScheme="teal"
          type="submit"
          mt="4"
          isFullWidth
          disabled={!email || !password}
        >
          Login
        </Button>
        <Text mt="30px">
          Not registered?{" "}
          <Link
            to="/signup"
            onClick={() => navigate("/signup", { state: { from: "/login" } })}
            color='blue'
          >
            Click here to signup.
          </Link>
        </Text>
      </form>
    </Box>
  );
}
