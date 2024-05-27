import { useState } from 'react';
import { CloseButton, Input } from '@mantine/core';
import { getHotkeyHandler } from '@mantine/hooks';

// const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

export default function SearchInput({goto, close}:{goto:Function, close:Function}) {
  const [value, setValue] = useState('');
  
  const runSearch = (query:string = value) => {
    console.log('running search...');
    const verif = query.split(' ')[0];
    if (verif.length > 1) {
      const book = verif
      const chapitre = query.split(' ')[1]
      const num_verset = query.split(' ')[2]
      goto(book, chapitre, num_verset)
    }else {
      const book = verif+query.split(' ')[1]
      const chapitre = query.split(' ')[2]
      const num_verset = query.split(' ')[3]
      goto(book, chapitre, num_verset)
    }
    setValue('')
    close();
  }

  return (
    <Input.Wrapper style={{fontFamily: 'monospace', fontSize: '17px'}} id="search-input" label="Recherchez..." description="Taper votre recherche en separant le livre, le chapitre et votre selection par un espace" >
      <Input
        id="search-input"
        data-autofocus
        variant="filled"
        ff={'monospace'}
        placeholder={"1co 2 1-7"}
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        rightSectionPointerEvents="all"
        mt="md"
        onKeyDown={getHotkeyHandler([
          ['mod+Enter', () => runSearch(value)],
          ['mod+Delete', () => setValue('') ],
          ['shift+R', () => close() ],
          ['mod+K', () => close() ],
        ])}
        rightSection={
          <CloseButton
            aria-label="Clear input"
            onClick={() => setValue('')}
            style={{ display: value ? undefined : 'none' }}
          />
        }
      />
    </Input.Wrapper>
  );
}