import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const DynamicBook =async (props:any) => {
  const url = await fetch(`https://simple-books-api.glitch.me/books/${props.params.id}`);
  const respons = await url.json();

  return (
    <div>
              <h1 className='text-6xl text-center text-purple-600'>Welcome in my dynamic Page</h1>
        <div key={respons.id} className="text-center">
            <Link href={`${respons.id}`} className="no-underline text-inherit">
              <Image
                src={"/book.jpeg"}
                alt={respons.name}
                height={200}
                width={150}
                className="object-cover mx-auto"
              />
              <h1 className="mt-2 text-base">{respons.name}</h1>
            </Link>
          </div>
          <h1 className='text-4xl text-blue-500'>{props.params.id} <br/>
        {respons.name}<br/>
        {respons.author} <br/>
    
        </h1>

    </div>
  )
}

export default DynamicBook