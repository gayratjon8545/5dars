const getData = async (id) => {
  const request = await fetch("https://dummyjson.com/products/" + id);

  const data = await request.json();
  return data;
};

async function Product({ params }) {
  const product = await getData(params.id);
  return (
    <div>
      <div className="card  bg-base-100 w-auto shadow-xl">
        <figure>
          <img src={product.thumbnail} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p>{product.description}</p>
          <div className="card-actions">
            <h2 className="">
              {" "}
              <span className="text-base font-semibold"> Price: </span> $
              {product.price}
            </h2>
          </div>
          <h2 className="text-lg">
            {" "}
            <span className="text-base font-semibold"> Category: </span>
            {product.category}
          </h2>
          <h2>
            {" "}
            <span className="text-base font-semibold">
              {" "}
              Return Policy:{" "}
            </span>{" "}
            {product.returnPolicy}
          </h2>
          <h2 className="">
            <span className="text-base font-semibold"> Brand: </span>
            {product.brand}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Product;
