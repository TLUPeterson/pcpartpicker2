import { api } from "~/utils/api";

export default function Page() {

  const {data} = api.videoCards.getAll.useQuery()
  console.log(data)
  
  return(
    <>
      <div>
        {data?.map((item) => (
          <div key={item.id}>{item.itemName}</div>))}
      </div>
    </>
  )
}