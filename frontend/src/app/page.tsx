import Game from "@/components/Game";
import WordOutput from "@/components/WordOutput";
import {useTheme} from '@primer/react'
import {ActionMenu, ActionList} from '@primer/react'
// function SetTheme() {
//   const {setColorMode} = useTheme()
//   // return <button onClick={() => setColorMode('auto')}>Activate auto mode</button>
//   return (
//     <ActionMenu>
//       <ActionMenu.Button>Theme</ActionMenu.Button>

//       <ActionMenu.Overlay>
//         <ActionList>
//           <ActionList.Item onSelect={event => setColorMode('auto')}>Auto</ActionList.Item>
//           <ActionList.Item onSelect={event => setColorMode('night')}>Dark</ActionList.Item>
//           <ActionList.Item onSelect={event => setColorMode('light')}>Light</ActionList.Item>
//         </ActionList>
//       </ActionMenu.Overlay>
//     </ActionMenu>
//   )
// }


export default async function Home() {
  return (
    <main>
      {/* <SetTheme/> */}
      <Game/>
    </main>
  );
}
