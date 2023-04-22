import { ReactNode } from "react";

export const metadata = {
  title: "About us",
};

export default function aboutLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1 className="text-2xl underline">About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius,
        sapiente velit recusandae corporis tempore mollitia deleniti debitis a
        voluptas quod ut aut beatae suscipit nisi. Reprehenderit illum dolores
        corrupti ratione nam dolorem, fugiat praesentium excepturi beatae fugit
        voluptates dicta, iusto numquam reiciendis vel doloribus? Eos vitae
        eligendi officiis tempore.
      </p>
      <div>{children}</div>
    </div>
  );
}
