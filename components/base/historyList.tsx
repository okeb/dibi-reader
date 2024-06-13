import { Box, ScrollArea, Stack } from '@mantine/core';
import { TextGenerateEffect } from './verset';
import classes from './footer.module.scss';
import AnchorHistory from './anchorHistory';

interface history {
  history: (string)[],
  current: number
}
export default function  HistoryList({
  sharedHistory
}:{
  sharedHistory?: history
}) {
  
  return  (
      <Box> 
        <ScrollArea h={300} offsetScrollbars scrollbarSize={4} type="scroll" mx="auto" 
        className={ classes.history }>
        {(sharedHistory && sharedHistory.history && sharedHistory.history.length > 1) ? (
          <Stack className={ classes.stack }  
          align="flex-start"
          justify="flex-end"
          gap="xs" 
          >
            {sharedHistory.history.map((item, index) => (
              <>
                <AnchorHistory index={ index } item={ item } sharedHistoryCurrent={sharedHistory.current} />
              </>
            ))}
          </Stack>
        ): (
          <p style={{
            fontSize: '13px',
            padding: '25px',
            position: 'absolute',
            width: '400px',
            left: 0,
            bottom: 0,
            opacity: 0.5
          }}>
            <TextGenerateEffect words={""} delay={0.4} duration={3}/>
          </p>
        )}
        </ScrollArea>
      </Box>
    )
}