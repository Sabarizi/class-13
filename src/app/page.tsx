import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const url = await fetch("https://simple-books-api.glitch.me/books");
  const respons = await url.json();

  return (
    <div className="p-5">
      <h1 className="text-6xl text-center text-cyan-800 my-11">
        My Books Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {respons.map((book: any) => (
          <div key={book.id} className="text-center">
            <Link href={`${book.id}`} className="no-underline text-inherit">
              <Image
                src={"/book.jpeg"}
                alt={book.name}
                height={200}
                width={150}
                className="object-cover mx-auto"
              />
              <h1 className="mt-2 text-base">{book.name}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
