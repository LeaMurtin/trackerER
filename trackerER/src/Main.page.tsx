import { AppShell, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from "react"

export function MainPage() {
	const [settingsOpened, { toggle: toggleLeftSection }] = useDisclosure();
  const [gpsOpened, { toggle: toggleRightSection }] = useDisclosure();

  return (
    <AppShell
    // layout="alt"
      header={{ height: 80 }}
	    footer={{ height: 40 }}
      navbar={{
		    width: 150,
        breakpoint: "xs",
        collapsed: {
          mobile: !settingsOpened,
          desktop: !settingsOpened,
        },
	    }}
      aside={{
				width: 350,
				breakpoint: "xs",
				collapsed: {
					mobile: !gpsOpened,
					desktop: !gpsOpened,
				},
			}}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger
            opened={settingsOpened}
            onClick={toggleLeftSection}
            size="sm"
          />
          <div>Header</div>
          <Burger
            opened={gpsOpened}
            onClick={toggleRightSection}
            size="sm"
          />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">Settings</AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>

      <AppShell.Aside p="md">Google Maps</AppShell.Aside>

	    <AppShell.Footer p="xs">Footer</AppShell.Footer>
    </AppShell>
  );
}