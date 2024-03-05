import { Stack, Card, HStack, Input } from "@chakra-ui/react";

function Login() {
  return (
    <div>
      <Stack>
        <Card>
          <Stack>
            <HStack>
              <h1>CoachZapp</h1>
              <h2>An Innovative App for Collegiate Coaches</h2>
            </HStack>

            <Stack>
              <Input focusBorderColor="lime" placeholder="Username" />
              <Input focusBorderColor="lime" placeholder="Password" />
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </div>
  );
}

export default Login;
