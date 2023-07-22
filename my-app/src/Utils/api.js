export const fetchProducts = async (currentPage, limit, searchTerm, sortedBy) => {
    let apiUrl = `https://mock-music-studio-updated.onrender.com/products?_limit=${limit}&_page=${currentPage}`;
  
    if (searchTerm) {
      apiUrl += `&product_like=${searchTerm}`;
    }
  
   if (sortedBy === "price") {
      apiUrl += "&_sort=price";
    }
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const totalCountHeader = response.headers.get('X-Total-Count');
      const totalPages = Math.ceil(parseInt(totalCountHeader) / limit);
  
      return {
        data,
        totalPages,
      };
    } catch (error) {
      console.log(error);
      throw new Error('Failed to fetch products');
    }
  };
  