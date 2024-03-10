import { Card } from "../../components/ui/Card.tsx";

export default async function Home() {
  const response = await fetch("https://cdb2-186-115-234-97.ngrok-free.app/products");
  const data = await response.json() ?? [];
  

  return (
    <main>
      <section>
        {
          data.map((product) => (
            <Card key={product.id} title={product.name} description={product.description} href={`/products/${product.id}`}></Card>
          ))
        }
      </section>
    </main>
  );
}
