interface ProdcutRewiewParams {
  params: { productid: string; reviewId: string };
}
export default async function ProdcutRewiew({ params }: ProdcutRewiewParams) {
  const { productid, reviewId } = await params;
  return (
    <h1>
      Review {reviewId} for product {productid}
    </h1>
  );
}
