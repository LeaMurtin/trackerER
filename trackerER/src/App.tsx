import './App.css'
import '@mantine/core/styles.css';
import { MainPage } from "./Main.page"
import { MantineProvider } from '@mantine/core';

function App() {

  return (
    <MantineProvider>
      <MainPage />
    </MantineProvider>
  )
}

export default App
