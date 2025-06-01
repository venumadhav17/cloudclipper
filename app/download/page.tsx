"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

interface MediaItem {
  url: string;
}

const Download = () => {
  const searchParams = useSearchParams();
  const data = searchParams.get("data");

  if (!data) return <div>No data available</div>;

  try {
    const parsedData = JSON.parse(decodeURIComponent(data));
    return (
      <div className='p-8'>
        <h1 className='text-2xl font-bold mb-4'>Video Information</h1>
        <pre className='bg-gray-800 p-4 rounded-lg overflow-auto text-white'>
          {JSON.stringify(parsedData, null, 2)}
        </pre>

        <div className='flex flex-wrap gap-10 justify-center items-center'>
          {parsedData.medias.map((item: MediaItem, i: number) => (
            <Image
              key={i}
              src={item.url}
              alt='thumbnail'
              width={300}
              height={300}
            />
          ))}
        </div>
      </div>
    );
  } catch {
    return <div>Error Parsing Data</div>;
  }
};

export default Download;
