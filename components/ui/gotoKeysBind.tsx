import { Kbd } from "@mantine/core";

export default function GotoKeysBind() {
  return (
    <>
      <Kbd style={{ marginInlineStart: '-58px'}} size="xs"><svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.5 5A1.5 1.5 0 0 1 8 6.5V8H6.5a1.5 1.5 0 1 1 0-3M10 8V6.5A3.5 3.5 0 1 0 6.5 10H8v4H6.5a3.5 3.5 0 1 0 3.5 3.5V16h4v1.5a3.5 3.5 0 1 0 3.5-3.5H16v-4h1.5A3.5 3.5 0 1 0 14 6.5V8zm0 2h4v4h-4zm6-2V6.5A1.5 1.5 0 1 1 17.5 8zm0 8h1.5a1.5 1.5 0 1 1-1.5 1.5zm-8 0v1.5A1.5 1.5 0 1 1 6.5 16z"></path></svg></Kbd>
      <span style={{marginInline: '2px'}}>+</span>
      <Kbd size="xs">Enter</Kbd>
    </>
  )
}