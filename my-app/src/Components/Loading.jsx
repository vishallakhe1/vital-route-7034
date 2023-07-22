import React from "react";
import { Grid, Box, Skeleton } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Grid templateColumns="repeat(1, 1fr)" gap={4}>
      {Array.from({ length: 4 }).map((_, index) => (
        <Box key={index} className="products-card">
          <Skeleton height="150px" width="100%" />
          <Box>
            <Skeleton height="20px" width="50%" mt={2} mb={1} />
            <Skeleton height="16px" width="80%" />
            <Skeleton height="16px" width="60%" />
            <Skeleton height="16px" width="40%" />
          </Box>
        </Box>
      ))}
    </Grid>
  );
};

export default Loading;
