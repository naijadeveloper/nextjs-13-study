export const metadata = {
  title: "our team",
};

export default function team() {
  return (
    <div className="mt-4">
      <h1 className="text-2xl underline">Our Team</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius,
        sapiente velit recusandae corporis tempore mollitia deleniti debitis a
      </p>
      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] auto-rows-[200px] gap-4 mt-4">
        {[1, 2, 3].map((num) => (
          <li className="p-3 bg-gray-200 flex flex-col justify-center items-center gap-2 text-xl rounded-md text-gray-800">
            <span className="w-[50px] h-[50px] bg-gray-500 rounded-full"></span>
            <span>Henry Arnold</span>
            <span>Design Specialist</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
