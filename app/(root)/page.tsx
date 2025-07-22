import ProductList from "@/components/shared/product/ProductList";
import { Button } from "@/components/ui/button";
import sampleData from "@/db/sample-data";

export default function Home() {
  return (
    <ProductList data={sampleData.products} title="Newest Arrival" limit={4} />
  );
}
