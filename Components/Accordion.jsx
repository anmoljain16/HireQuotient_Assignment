"use client";

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomizedTables from "@/Components/Table";

export default function AccordionExpandDefault({groupedData} ) {
    // const{bond, equity, cash, fund, loan, realestate} = groupedData;
    // console.log(Object.keys(groupedData).length)
    return (
        <div>
            {
                Object.entries(groupedData).map(([assetClass, data], index) => (
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography>{assetClass.replace(/_/g, ' ')}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <CustomizedTables data={data}/>
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </div>
    );
}
