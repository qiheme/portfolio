import { CobaltProvider, Button, Badge } from "@q-labs/cobalt";

// Small demo island that confirms @q-labs/cobalt renders inside Astro.
// CobaltProvider must wrap the components so their design tokens/context apply.
export default function CobaltDemo() {
  return (
    <CobaltProvider>
      <Button variant="primary">Launch</Button>
      <Badge variant="active">Active</Badge>
    </CobaltProvider>
  );
}
