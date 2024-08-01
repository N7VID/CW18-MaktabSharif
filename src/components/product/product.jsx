export default function Product() {
  return (
    <div className="flex flex-col border-2 p-2 gap-2">
      <div>
        <img
          src="https://dress-shop-omega.liara.run/images/dress5.jpg"
          alt=""
          className="w-[300px] h-[383px]"
        />
      </div>
      <div className="text-xl">
        <h1>Title</h1>
      </div>
      <div className="flex justify-around p-4 items-center">
        <div>Price</div>
        <div>
          <button className="bg-yellow-300 rounded-md py-1 px-3">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
