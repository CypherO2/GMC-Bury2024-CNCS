import { Button } from "@primer/react";
import { SidebarExpandIcon } from '@primer/octicons-react'
import {Box} from '@primer/react'

let buttonStyle ={
    padding: 5,
};

export default function WordOutput() {
    return (
        <Box sx={{borderRadius: 2, borderWidth: 1, borderStyle: 'solid', borderColor: 'border.default', p: 3, width: '70%'}}>
            <Box sx={{display: 'grid', gridTemplateColumns: '0.5fr 0.5fr 0.5fr 0.5fr 0.5fr', gridGap: 3}}>
            </Box>
            <Box sx={{display: 'grid', gridTemplateColumns: '0.5fr 0.5fr 0.5fr 0.5fr 0.5fr', gridGap: 3}}>
            </Box>
            <Box sx={{display: 'grid', gridTemplateColumns: '0.5fr 0.5fr 0.5fr 0.5fr 0.5fr', gridGap: 3}}>
            </Box>
            <Box sx={{display: 'grid', gridTemplateColumns: '0.5fr 0.5fr 0.5fr 0.5fr 0.5fr', gridGap: 3}}>
            </Box>
            <Box sx={{display: 'grid', gridTemplateColumns: '0.5fr 0.5fr 0.5fr 0.5fr 0.5fr', gridGap: 3}}>
            </Box>
            <Box sx={{display: 'grid', gridTemplateColumns: '0.5fr 0.5fr 0.5fr 0.5fr 0.5fr', gridGap: 3}}>
            </Box>
        </Box>
    );
  }