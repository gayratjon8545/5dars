import Link from "next/link";

const getData = async () => {
  const request = await fetch("https://dummyjson.com/products");

  const data = await request.json();
  return data;
};

async function Products() {
  const { products } = await getData();
  console.log(products);
  return (
    <div className="grid grid-cols-2 gap-5 ">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link href={`/singleProduct/${product.id}`}>
              <div className="card  bg-base-100 w-auto shadow-xl">
                <figure>
                  <img src={product.thumbnail} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.title}</h2>
                  <p>{product.description}</p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
