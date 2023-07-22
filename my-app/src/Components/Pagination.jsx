import React from "react";
import { ButtonGroup, Button } from "@chakra-ui/react";

const Pagination = ({ totalPages, currentPage, pageChange }) => {

  const handlePageChange = (page) => {
    pageChange(page);
  };

  return (
    <ButtonGroup m={8} mb={70} isAttached variant="outline">
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index}
          isActive={currentPage === index + 1}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default Pagination;
