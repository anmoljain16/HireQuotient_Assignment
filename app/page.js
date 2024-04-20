import AccordionExpandDefault from "@/Components/Accordion";

async function getHoldings() {
  const response = await fetch("https://canopy-frontend-task.vercel.app/api/holdings");
  return response.json();
}

export default async function Home() {
    const holdings = await getHoldings();
    // console.log(holdings.payload.length);
    const data = holdings.payload;
    const groupedData = {};

// Group the rows based on asset_class
    data.forEach(item => {
        const assetClass = (item.asset_class).replace(/\s/g, '_');

        if (!groupedData[assetClass]) {
            groupedData[assetClass] = [];
        }
        groupedData[assetClass].push(item);
    });

    // console.log(groupedData);

  return (
    <>
        <div className={"bg-slate-200 h-screen"}>
            <div className={"container w-[93%] justify-self-center m-auto py-12"}>
                <AccordionExpandDefault groupedData={groupedData}/>
            </div>
        </div>
    </>
  );
}
