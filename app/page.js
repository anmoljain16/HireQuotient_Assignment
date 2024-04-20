import AccordionExpandDefault from "@/Components/Accordion";

async function getHoldings() {
  try{
      const response = await fetch("https://canopy-frontend-task.vercel.app/api/holdings");
      return response.json();
  }catch (e) {
      return {error: e.message}
  }
}

export default async function Home() {
    const holdings = await getHoldings();
    // console.log(holdings.payload.length);

    if(holdings.error){
        return <div>Please Refresh {holdings.error}</div>
    }
    const data = holdings.payload;
    const groupedData = {};

    // Group the rows based on asset_class
    data.forEach(item => {
        // removing spaces from asset_class and replacing with underscore
        const assetClass = (item.asset_class).replace(/\s/g, '_');

        // check if the asset_class is already present in the groupedData object
        if (!groupedData[assetClass]) {
            groupedData[assetClass] = [];
        }

        // remove asset_class from the item
        delete item.asset_class;

        // push the item to the groupedData object
        groupedData[assetClass].push(item);
    });

    // console.log(groupedData);

  return (
    <>
        <div className={"bg-slate-200 min:h-screen h-fit "}>
            <div className={"container w-[93%] justify-self-center m-auto py-12"}>
                <AccordionExpandDefault groupedData={groupedData}/>
            </div>
        </div>
    </>
  );
}
