import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { api } from "~/utils/api";
import { useContext, useState } from "react";
import { LoadingSpinner, LoadingPage } from "~/components/loading";
import { useRouter } from "next/router";
import { ItemsContext } from "../context/itemContext";

const GpuPage: React.FC = () => {
  const router = useRouter();
  const { data, isLoading: dataisLoading } = api.videoCards.getAll.useQuery();
  const { items, addItem } = useContext(ItemsContext);

  const handleClick = (item: object) => {
    addItem('gpu', item);
    router.push('/').catch(err => console.log(err));
  };
  

  if(dataisLoading) return (
    <div className="flex grow">
      <LoadingPage />
    </div>  
  )

  if (!data) return <div>Something went wrong</div>;

  return (
    <>
      <Head>
        <title>Pc Part picker v2</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 pb-16 pt-8">
        <Link href='/'>
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          PC <span className="text-[hsl(280,100%,70%)]">Part</span> Picker
        </h1>
        </Link>
          
        </div>

        <div className="text-slate-50"> 
            
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                        Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Chipset
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Memory
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Buy</span>
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {data?.map((item) => (

                    <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                          <Image 
                          alt="gpu image" 
                          src={item.image?item.image:'https://developers.google.com/static/maps/documentation/streetview/images/error-image-generic.png'}
                          width={50}
                          height={50}
                          className="w-auto h-auto"
                          /> <span className="flex pl-6">{item.itemName}</span>
                      </th>
                      
                      <td className="px-6 py-4">
                          null
                      </td>
                      <td className="px-6 py-4">
                          {item.memory} GB
                      </td>
                      <td className="px-6 py-4">
                          {item.price.toString()} €
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button onClick={()=>handleClick(item)} className="font-medium dark:text-green-500 hover:underline">
                          Add
                        </button>
                      </td>
                    </tr>

                    ))}
                </tbody>
            </table>
        </div>

            
        </div>
      </main>
    </>
  );
}
export default GpuPage;