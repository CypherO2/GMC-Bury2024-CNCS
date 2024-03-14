import { Button } from "@primer/react";
import { SidebarExpandIcon } from '@primer/octicons-react'
import {Box} from '@primer/react'

let buttonStyle ={
  padding: 5,
};

export default function Home() {
  return (
    <main>
      <Box sx={{borderRadius: 2, borderWidth: 1, borderStyle: 'solid', borderColor: 'border.default', p: 3, width: '70%'}}>
        <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr', gridGap: 3}}>
          <Button sx={buttonStyle}>Q</Button>
          <Button sx={buttonStyle}>W</Button>
          <Button sx={buttonStyle}>E</Button>
          <Button sx={buttonStyle}>R</Button>
          <Button sx={buttonStyle}>T</Button>
          <Button sx={buttonStyle}>Y</Button>
          <Button sx={buttonStyle}>U</Button>
          <Button sx={buttonStyle}>I</Button>
          <Button sx={buttonStyle}>O</Button>
          <Button sx={buttonStyle}>P</Button>
        </Box>
        <Box sx={{display: 'grid', gridTemplateColumns: '0.5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr', gridGap: 3, paddingTop: 3}}>
          <span></span>
          <Button sx={buttonStyle}>A</Button>
          <Button sx={buttonStyle}>S</Button>
          <Button sx={buttonStyle}>D</Button>
          <Button sx={buttonStyle}>F</Button>
          <Button sx={buttonStyle}>G</Button>
          <Button sx={buttonStyle}>H</Button>
          <Button sx={buttonStyle}>J</Button>
          <Button sx={buttonStyle}>K</Button>
          <Button sx={buttonStyle}>L</Button>
        </Box>
        <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr', gridGap: 3, paddingTop: 3}}>
          <Button sx={buttonStyle}>ENTER</Button>
          <Button sx={buttonStyle}>Z</Button>
          <Button sx={buttonStyle}>X</Button>
          <Button sx={buttonStyle}>C</Button>
          <Button sx={buttonStyle}>V</Button>
          <Button sx={buttonStyle}>B</Button>
          <Button sx={buttonStyle}>N</Button>
          <Button sx={buttonStyle}>M</Button>
          <Button sx={buttonStyle}><SidebarExpandIcon/></Button>
        </Box>
      </Box>
    </main>
  );
}
