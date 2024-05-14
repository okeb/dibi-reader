import { CopyButton, Tooltip, ActionIcon } from '@mantine/core';

export default function CopySettingButton({
  className,
  value
}:{
  className?: string,
  value: string,
}) {
  return (
      <CopyButton value={value} timeout={2000}>
        {({ copied, copy }) => (
          <Tooltip label={copied ? 'Copié !' : 'Copie ?'} color={'gray'} withArrow position="top">
            <ActionIcon color={'gray'} variant="subtle" onClick={copy}>
              
              <div className={className}>
                {copied ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width='1.4rem' viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12l5 5L20 7"></path></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width='1.4rem' viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M7 9.667A2.667 2.667 0 0 1 9.667 7h8.666A2.667 2.667 0 0 1 21 9.667v8.666A2.667 2.667 0 0 1 18.333 21H9.667A2.667 2.667 0 0 1 7 18.333z"></path><path d="M4.012 16.737A2.005 2.005 0 0 1 3 15V5c0-1.1.9-2 2-2h10c.75 0 1.158.385 1.5 1"></path></g></svg>
                )}
                
              </div>
            </ActionIcon>
          </Tooltip>
        )}
      </CopyButton>
  );
}