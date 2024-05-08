import Header from "./Header";
import Items from "./Items";
export default function Home()
{
  return (
    <div className=" bg-blue-200 text-center">
      <h1 className="text-4xl sm:text-5xl underline py-2 w-full bg-yellow-300 font-bold">Welcome To our Website</h1>
      <div className="container ">
        <Header/>
      </div>
      <h1 className="text-3xl sm:text-4xl py-2 w-full bg-yellow-300 font-bold">Items</h1>
      <div className="container">
        <Items />
      </div>
    </div>
  );
}
