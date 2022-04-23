import React from "react";
import { Accordion } from "@mui/material";
import { AccordionSummary } from "@mui/material";
import { AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PortfolioExplore from "./PortfolioExplore";
import PortfolioDetail from "./PortfolioDetail";

const PortfolioAccordion = (props) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <PortfolioExplore token={props.token} />
      </AccordionSummary>
      <AccordionDetails>
        <PortfolioDetail token={props.token} />
      </AccordionDetails>
    </Accordion>
  );
};

export default PortfolioAccordion;
