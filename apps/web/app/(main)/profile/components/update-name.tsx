import { Card, SimpleGrid, Stack, Text, TextInput } from "@mantine/core";

export function UpdateName() {
  return (
    <Card withBorder>
      <SimpleGrid
        cols={{
          sm: 2,
        }}
      >
        <Stack>
          <Text>Adı Soyadı</Text>
        </Stack>
        <TextInput label="Adı Soyadı" variant="filled" placeholder="John Doe" />
      </SimpleGrid>
    </Card>
  );
}
