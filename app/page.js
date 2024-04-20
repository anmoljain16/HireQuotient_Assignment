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
    <AccordionExpandDefault groupedData={groupedData} />
    </>
  );
}
