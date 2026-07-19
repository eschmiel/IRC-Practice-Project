import { Box, Tab, Tabs, Typography } from "@mui/material"
import { useState } from "react"

/**
 * Displays information about the current Senate Bill in question and the members of government voting on it.
 * Requires the following tabs:
 * 1) Display Board - Shows information about the current legislation in question
 * 2) Members - Shows information about the current members of government voting on the legislation in question
 */
export const DataPanel = () => {
    const [currentTab, setCurrentTab] = useState(0)

    const handleTabChange = (e, newValue: number) =>{
        setCurrentTab(newValue)
    }

    return (
        <Box sx={{border: '1px solid', borderRadius: '5px'}}>
            <Tabs value={currentTab} onChange={handleTabChange}>
                <Tab label="Display Board" />
                <Tab label="Members" />
            </Tabs>
            <Box sx={{backgroundColor: '#363a3f', height: '340px'}}>
                {currentTab === 0 && <DisplayBoard legislation={testLegislation} />}
                {currentTab === 1 && <Typography sx={{color:"green"}}>bbbb</Typography>}
            </Box>

        </Box>
    )
}

const DisplayBoard = ({legislation}: {legislation: Legislation}) => (
    <Box sx={{padding: '35px 15px', fontSize: '16px', color: '#9ee68e'}}>
        <Typography>{legislation.title} {legislation.originator.join(', ')}</Typography>
        <Typography>{legislation.summary}</Typography>
        <Typography>{legislation.description}</Typography>
    </Box>
)


type Legislation = {
    title: string;
    originator: string[];
    summary: string;
    description: string;
}

const testLegislation: Legislation= {
    title: 'SB 1447',
    originator: ['Osburn', 'Thompson (Kristen)'],
    summary: ' DO PASS AS AMENDED, STRIKE THE ENACTING CLAUSE',
    description: "Economic development; creating Oklahoma's Modern Plan for Economic Transformation and Effectiveness (COMPETE) Act"
}

/**
 * We need: 
 * - A tabber
 * - A content panel
 */