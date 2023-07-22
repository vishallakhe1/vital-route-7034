import React, { useEffect, useState } from "react";
import { Grid, Box, Image, Heading, Text, Flex, Input, Select,Button } from "@chakra-ui/react";
import Loading from "../Components/Loading";
import Pagination from "../Components/Pagination";
import { fetchProducts } from "../Utils/api";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedBy, setSortedBy] = useState("");

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const { data, totalPages } = await fetchProducts(
          currentPage,
          limit,
          searchTerm,
          sortedBy
        );
        
        console.log(data);

        setProducts(data);
        setTotalPages(totalPages);
        setLoading(false);

      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchProductsData();
  }, [currentPage, limit, searchTerm, sortedBy]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleSort = (event) => {
    const { value } = event.target;
    setSortedBy(value);
    setCurrentPage(1);
  };

  return (
    <Box className="main-container" w="80%" m="auto">
      <Heading as="h2" mb={4} mt="40px">
        All Products
      </Heading>
      <Flex justify="space-between" mb={4}>
      <Input
        type="text"
        placeholder="Search by product name"
        value={searchTerm}
        onChange={handleSearch}
        fontWeight="bold"
        w="250px"
      />
      <Select value={sortedBy} onChange={handleSort}  w="250px">
        <option value="">Sort By</option>
        <option value="price">Price</option>
      </Select>
    </Flex>
      <Grid templateColumns="repeat(1, 1fr)" gap={4}>
        {/* Check if data is still loading */}
        {loading ? (
          // Display skeleton loading effect
          <Loading />
        ) : (
          // Render the data
          products.map((product) => (
            <Box key={product.id} className="products-card">
            <Image src={product.image} alt="Product" className="image" />
            <Box className="products-detail">
              <Heading as="h1" fontSize="lg" mt={2} mb={1}>
                <strong>Product:</strong> {product.name}
              </Heading>
              <Text fontSize="md" mt={3}>
                <strong>Price:</strong> {product.price}
              </Text>
              <Button marginRight={8}>Add To Cart</Button>
              <Button>Cancel</Button>
            </Box>
          </Box>
        ))
      )}
    </Grid>
    <Flex justify="center" mt={4}>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        pageChange={handlePageChange}
      />
    </Flex>
  </Box>
);
}

