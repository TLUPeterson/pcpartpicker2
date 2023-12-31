import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { ItemsContext } from "../context/itemContext";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    const { removeItem, items } = useContext(ItemsContext);      

    const isItemInLocalStorage = (itemType: string) => {
        const item = items[itemType as keyof typeof items];//?

        return item !== undefined;
    };

    const gotoPage = (page: string) => {
        router.push('/component/'+page)
        .catch(err => console.log(err))
    }

    const totalPrice = () => {
        let total = 0;
        Object.keys(itemNameTable).forEach((item) => {
        const currItem = items[item as keyof typeof items];
        if (currItem) {
            total += Number(currItem.price);
        }
        });
        return total.toFixed(2);
    };

    const itemNameTable = {
        cpu: 'CPU',
        gpu: 'Video Card',
        cpuCooler: 'CPU Cooler',
        motherboard: 'Motherboard',
        memory: 'Memory',
        storage: 'Storage',
        case: 'Case',
        psu: 'Power Supply',
        monitor: 'Monitor',
    }


return (
    <>
        <Head>
            <title>Pc Part picker v2</title>
            <meta name="description" content="Generated by create-t3-app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 pb-16 pt-8">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                PC <span className="text-[hsl(280,100%,70%)]">Part</span> Picker
            </h1>
        </div>

        <div className="text-slate-50"> 
<div className="relative overflow-x-auto shadow-md sm:rounded-lg pb-12">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Component
                </th>
                <th scope="col" className="px-6 py-3">
                    Selection
                </th>
                <th scope="col" className="px-6 py-3">
                    Where
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Buy</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">x</span>
                </th>
            </tr>
        </thead>
        <tbody>
            {Object.keys(itemNameTable).map((item)=>
            <>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <Link href={`/component/${item}`}>
                            {itemNameTable[item]}
                        </Link>
                    </th>
                    {isItemInLocalStorage(item)?
                    (<>
                    <td className="px-6 py-4  flex items-center">
                        {/* <Image alt={`${item} image`}
                        src={items[item].image?items[item].image:"https://developers.google.com/static/maps/documentation/streetview/images/error-image-generic.png"} 
                        width={100}
                        height={100}
                        className="mr-2 w-auto h-auto"
                        /> */}
                        <span className="flex-grow">{items[item].itemName}</span>
                    </td>
                    <td className="px-6 py-4">
                        {items[item].store ? items[item].store : "N/A"}
                    </td>
                    <td className="px-6 py-4">
                        {items[item].price} €
                    </td>
                    <td className="px-6 py-4 text-right">
                        <a  target="_blank" rel="noopener noreferrer" href={items[item].link} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Buy</a>
                    </td>
                    <td className="px-6 py-4 text-right">
                        <button onClick={()=>removeItem(item)} className="font-medium dark:text-red-500 hover:underline">X</button>
                    </td>
                    </>)
                    :
                    (<>
                        <td className="px-6 py-4">
                        <button onClick={()=>gotoPage(item)} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Choose {itemNameTable[item]}</button>
                        </td>
                        <td className="px-6 py-4">
                        </td>
                        <td className="px-6 py-4">
                            
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                        </td>
                        <td className="px-6 py-4 text-right">
                            <button onClick={()=>removeItem("gpu")} className="font-medium dark:text-red-500 hover:underline"></button>
                        </td>
                        </>)}
                        
                        
                    
                </tr>
            </>
            
            
            )}
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
            </th>
            <td className="px-6 py-4">
            </td>
            <td className="px-6 py-4">
            </td>
            <td className="px-6 py-4">
                Total: {totalPrice()} €
            </td>
            <td className="px-6 py-4">
            </td>
            <td className="px-6 py-4">
            </td>
            </tr>
        </tbody>
    </table>
</div>

          
        </div>
      </main>
    </>
  );
}
