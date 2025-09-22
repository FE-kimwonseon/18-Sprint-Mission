import instance from "./axios";

export const getProducts = async ({
  orderBy = "recent",
  page = 1,
  pageSize = 10,
  keyword,
} = {}) => {
  try {
    const response = await instance.get("/products", {
      params: {
        page,
        pageSize,
        orderBy,
        ...(keyword && { keyword }),
      },
    });
    return response.data.list;
  } catch (error) {
    console.error("getProducts error:", error);

    throw new Error(error.response?.data?.message || "상품을 불러오는데 실패했습니다.");
  }
};
