import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { api } from "~/utils/api";
import { useContext } from "react";
import { LoadingPage } from "~/components/loading";
import { useRouter } from "next/router";
import { ItemsContext } from "../context/itemContext";

const ITEMS_PER_PAGE = 15; // Number of items per page

const CpuPage: React.FC = () => {
  const router = useRouter();
  const { data, isLoading: dataisLoading } = api.cpus.getAll.useQuery();
  const { addItem } = useContext(ItemsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleClick = (item: object) => {
    addItem("cpu", item);
    router.push("/").catch((err) => console.log(err));
  };

  if (dataisLoading)
    return (
      <div className="flex grow">
        <LoadingPage />
      </div>
    );

  if (!data) return <div>Something went wrong</div>;

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

// Sorting logic
const sortedData = [...data].sort((a, b) => {
  if (sortColumn !== null && sortColumn !== undefined) {
    if (sortColumn === "coreCount" || sortColumn === "coreClock" || sortColumn === "price") {
      const aValue = a[sortColumn as keyof typeof a] !== null ? parseFloat(String(a[sortColumn as keyof typeof a])) : 0;
      const bValue = b[sortColumn as keyof typeof b] !== null ? parseFloat(String(b[sortColumn as keyof typeof b])) : 0;

      if (aValue < bValue) {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    }

    // Default sorting for other columns (string sorting)
    if (a[sortColumn as keyof typeof a]! < b[sortColumn as keyof typeof b]!) {
      return sortOrder === "asc" ? -1 : 1;
    }
    if (a[sortColumn as keyof typeof a]! > b[sortColumn as keyof typeof b]!) {
      return sortOrder === "asc" ? 1 : -1;
    }
  }
  return 0;
});











  // Pagination logic
  const totalItems = sortedData.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = sortedData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Head>
        <title>Pc Part picker v2</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 pb-16 pt-8">
          <Link href="/">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              PC <span className="text-[hsl(280,100%,70%)]">Part</span> Picker
            </h1>
          </Link>
        </div>

        <div className="text-slate-50">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 cursor-pointer"
                    onClick={() => handleSort("itemName")}
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 cursor-pointer"
                    onClick={() => handleSort("coreCount")}
                  >
                    Core Count
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 cursor-pointer"
                    onClick={() => handleSort("coreClock")}
                  >
                    Core Clock
                    <br />
                    Performance
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 cursor-pointer"
                    onClick={() => handleSort("price")}
                  >
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Buy</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((item) => (
                  <tr
                    key={item.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                    >
                      <Image
                        alt="cpu image"
                        src={
                          item.image
                            ? item.image
                            : "https://developers.google.com/static/maps/documentation/streetview/images/error-image-generic.png"
                        }
                        width={50}
                        height={50}
                        className="w-auto h-auto"
                      />{" "}
                      <span className="flex pl-6">{item.itemName}</span>
                    </th>

                    <td className="px-6 py-4">{item.coreCount}</td>
                    <td className="px-6 py-4">{item.coreClock ? `${item.coreClock.toString()} GHz` : "-"}</td>
                    <td className="px-6 py-4">{item.price.toString()} €</td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleClick(item)}
                        className="font-medium dark:text-green-500 hover:underline"
                      >
                        Add
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-center mt-4 pb-12">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-3 py-2 mx-1 rounded-md ${
                currentPage === index + 1
                  ? "bg-[#6C63FF] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>

      </main>
    </>
  );
};

export default CpuPage;
