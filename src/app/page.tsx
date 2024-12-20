import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const url = await fetch("https://simple-books-api.glitch.me/books");
  const respons = await url.json();

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-6xl text-center text-cyan-800 my-11">My Books Collection</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(150px, 1fr))", // Responsive grid
          gap: "20px", // Spacing between items
        }}
      >
        {respons.map((book: any) => (
          <div
            key={book.id}
            style={{
              textAlign: "center",
            }}
          >
            <Link
              href={`${book.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Image
                src={"/book.jpeg"}
                alt={book.name}
                height={200}
                width={150}
                style={{ objectFit: "cover" }}
              />
              <h1 style={{ marginTop: "10px", fontSize: "16px" }}>
                {book.name}
              </h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
