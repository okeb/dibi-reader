import { useState, useEffect } from 'react';
import { CloseButton, Combobox, TextInput, useCombobox, Kbd } from '@mantine/core';
import { getHotkeyHandler } from '@mantine/hooks';
import classes from './DropdownOptionsAnimation.module.scss';
import { cn } from '../../src/utils/cn'
import GotoKeysBind from '../ui/gotoKeysBind';
import { color } from 'framer-motion';
const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

const abbr_list = ["Ge. ", "Ex. ", "Lé. ", "No. ", "De. ", "Jos. ", "Jg. ", "1 S. ", "2 S. ", "1 R. ", "2 R. ", "Es. ", "Jé. ", "Ez. ", "Os. ", "Joë. ", "Am. ", "Ab. ", "Jon. ", "Mi. ", "Na. ", "Ha. ", "So. ", "Ag. ", "Za. ", "Mal. ", "Ps. ", "Pr. ", "Job ", "Ca. ", "Ru. ", "La. ", "Ec. ", "Est. ", "Da. ", "Esd. ", "Né. ", "1 Ch. ", "2 Ch. ", "Mt. ", "Mc. ", "Lu. ", "Jn. ", "Ac. ", "Ja. ", "Ga. ", "1 Th. ", "2 Th. ", "1 Co. ", "2 Co. ", "Ro. ", "Ep. ", "Ph. ", "Col. ", "Phm. ", "1 Ti. ", "Tit. ", "1 Pi. ", "2 Pi. ", "2 Ti. ", "Jud. ", "Hé. ", "1 Jn. ", "2 Jn. ", "3 Jn. ", "Ap. "]

const complet_list = [
  {
    "Ge. ": "Bereshit (Génèse)",
    "Ex. ": "Shemot (Exode)",
    "Lé. ": "Viyaqra (Lévitique)",
    "No. ": "Badmidbar (Nombres)",
    "De. ": "Davarim (Deutéronomes)",
    "Jos. ": "Yéhoshoua (Josué)",
    "Jg. ": "Shoftim (Juges)",
    "1 S. ": "1 Shemouél (1 Samuel)",
    "2 S. ": "2 Shemouél (2 Samuel)",
    "1 R. ": "1 Melakhim (1 Rois)",
    "2 R. ": "2 Melakhim (2 Rois)",
    "Es. ": "Yesha`yah (Ésaïe)",
    "Jé. ": "Yirmeyah (Jérémie)",
    "Ez. ": "Yehezkel (Ézéchiel)",
    "Os. ": "Hoshea (Osée)",
    "Joë. ": "Yoel (Joël)",
    "Am. ": "Amowc (Amos)",
    "Ab. ": "Obadyah (Abdias)",
    "Jon. ": "Yonah (Jonas)",
    "Mi. ": "Miykayah (Michée)",
    "Na. ": "Nachuwm (Nahum)",
    "Ha. ": "Habaqqouq (Habakuk)",
    "So. ": "Tsephanyah (Sophonie)",
    "Ag. ": "Chaggay (Aggée)",
    "Za. ": "Zakaryah (Zacharie)",
    "Mal. ": "Mal`akiy (Malachie)",
    "Ps. ": "Tehilim (Psaumes)",
    "Pr. ": "Mishlei (Proverbes)",
    "Job ": "Iyov (Job)",
    "Ca. ": "ShirHashirim (Cantiques des Cantiques)",
    "Ru. ": "Routh (Ruth)",
    "La. ": "Eikha (Lamentations de Jérémie)",
    "Ec. ": "Qohelet (Écclésiaste)",
    "Est. ": "Meguila Esther (Esther)",
    "Da. ": "Daniye'l (Daniel)",
    "Esd. ": "Ezra (Esdras)",
    "Né. ": "Nehemyah (Nehémie)",
    "1 Ch. ": "1 Hayyamim Dibre (1 Chroniques)",
    "2 Ch. ": "2 Hayyamim Dibre (2 Chroniques)",
    "Mt. ": "Matthaios (Matthieu)",
    "Mc. ": "Markos (Marc)",
    "Lu. ": "Loukas (Luc)",
    "Jn. ": "Yohanan (Jean)",
    "Ac. ": "Actes",
    "Ja. ": "Yaacov (Jacques)",
    "Ga. ": "Galates",
    "1 Th. ": "1 Thessaloniciens",
    "2 Th. ": "2 Thessaloniciens",
    "1 Co. ": "1 Corinthiens",
    "2 Co. ": "2 Corinthiens",
    "Ro. ": "Romains",
    "Ep. ": "Éphésiens",
    "Ph. ": "Philippiens",
    "Col. ": "Colossiens",
    "Phm. ": "Philémon",
    "1 Ti. ": "1 Timotheos (1 Timothée)",
    "Tit. ": "Titos (Tites)",
    "1 Pi. ": "1 Petros (1 Pierre)",
    "2 Pi. ": "2 Petros (2 Pierre)",
    "2 Ti. ": "2 Timotheos (2 Timothée)",
    "Jud. ": "Yéhouda (Jude)",
    "Hé. ": "Hébreux",
    "1 Jn. ": "1 Yohanan (1 Jean)",
    "2 Jn. ": "2 Yohanan (2 Jean)",
    "3 Jn. ": "3 Yohanan (3 Jean)",
    "Ap. ": "Apokalupsis (Apocalypse)",
  },
];
const bible_details = [
  {
    "Ge. ": {
      nom_complet: "Bereshit (Génèse)",
      nbre_chapitres: 50,
      max_verset: 100,
    },
    "Ex. ": {
      nom_complet: "Shemot (Exode)",
      nbre_chapitres: 40,
      max_verset: 100,
    },
    "Lé. ": {
      nom_complet: "Viyaqra (Lévitique)",
      nbre_chapitres: 27,
      max_verset: 100,
    },
    "No. ": {
      nom_complet: "Badmidbar (Nombres)",
      nbre_chapitres: 36,
      max_verset: 100,
    },
    "De. ": {
      nom_complet: "Davarim (Deutéronomes)",
      nbre_chapitres: 34,
      max_verset: 100,
    },
    "Jos. ": {
      nom_complet: "Yéhoshoua (Josué)",
      nbre_chapitres: 24,
      max_verset: 100,
    },
    "Jg. ": {
      nom_complet: "Shoftim (Juges)",
      nbre_chapitres: 21,
      max_verset: 100,
    },
    "1 S. ": {
      nom_complet: "1 Shemouél (1 Samuel)",
      nbre_chapitres: 31,
      max_verset: 100,
    },
    "2 S. ": {
      nom_complet: "2 Shemouél (2 Samuel)",
      nbre_chapitres: 24,
      max_verset: 100,
    },
    "1 R. ": {
      nom_complet: "1 Melakhim (1 Rois)",
      nbre_chapitres: 22,
      max_verset: 100,
    },
    "2 R. ": {
      nom_complet: "2 Melakhim (2 Rois)",
      nbre_chapitres: 25,
      max_verset: 100,
    },
    "Es. ": {
      nom_complet: "Yesha`yah (Ésaïe)",
      nbre_chapitres: 66,
      max_verset: 100,
    },
    "Jé. ": {
      nom_complet: "Yirmeyah (Jérémie)",
      nbre_chapitres: 52,
      max_verset: 100,
    },
    "Ez. ": {
      nom_complet: "Yehezkel (Ézéchiel)",
      nbre_chapitres: 48,
      max_verset: 100,
    },
    "Os. ": {
      nom_complet: "Hoshea (Osée)",
      nbre_chapitres: 14,
      max_verset: 100,
    },
    "Joë. ": { nom_complet: "Yoel (Joël)", nbre_chapitres: 4, max_verset: 100 },
    "Am. ": { nom_complet: "Amowc (Amos)", nbre_chapitres: 9, max_verset: 100 },
    "Ab. ": {
      nom_complet: "Obadyah (Abdias)",
      nbre_chapitres: 1,
      max_verset: 100,
    },
    "Jon. ": {
      nom_complet: "Yonah (Jonas)",
      nbre_chapitres: 4,
      max_verset: 100,
    },
    "Mi. ": {
      nom_complet: "Miykayah (Michée)",
      nbre_chapitres: 7,
      max_verset: 100,
    },
    "Na. ": {
      nom_complet: "Nachuwm (Nahum)",
      nbre_chapitres: 3,
      max_verset: 100,
    },
    "Ha. ": {
      nom_complet: "Habaqqouq (Habakuk)",
      nbre_chapitres: 3,
      max_verset: 100,
    },
    "So. ": {
      nom_complet: "Tsephanyah (Sophonie)",
      nbre_chapitres: 3,
      max_verset: 100,
    },
    "Ag. ": {
      nom_complet: "Chaggay (Aggée)",
      nbre_chapitres: 2,
      max_verset: 100,
    },
    "Za. ": {
      nom_complet: "Zakaryah (Zacharie)",
      nbre_chapitres: 14,
      max_verset: 100,
    },
    "Mal. ": {
      nom_complet: "Mal`akiy (Malachie)",
      nbre_chapitres: 3,
      max_verset: 100,
    },
    "Ps. ": {
      nom_complet: "Tehilim (Psaumes)",
      nbre_chapitres: 150,
      max_verset: 100,
    },
    "Pr. ": {
      nom_complet: "Mishlei (Proverbes)",
      nbre_chapitres: 31,
      max_verset: 100,
    },
    "Job ": { nom_complet: "Iyov (Job)", nbre_chapitres: 42, max_verset: 100 },
    "Ca. ": {
      nom_complet: "ShirHashirim (Cantiques des Cantiques)",
      nbre_chapitres: 8,
      max_verset: 100,
    },
    "Ru. ": { nom_complet: "Routh (Ruth)", nbre_chapitres: 4, max_verset: 100 },
    "La. ": {
      nom_complet: "Eikha (Lamentations de Jérémie)",
      nbre_chapitres: 5,
      max_verset: 100,
    },
    "Ec. ": {
      nom_complet: "Qohelet (Écclésiaste)",
      nbre_chapitres: 12,
      max_verset: 100,
    },
    "Est. ": {
      nom_complet: "Meguila Esther (Esther)",
      nbre_chapitres: 10,
      max_verset: 100,
    },
    "Da. ": {
      nom_complet: "Daniye'l (Daniel)",
      nbre_chapitres: 12,
      max_verset: 100,
    },
    "Esd. ": {
      nom_complet: "Ezra (Esdras)",
      nbre_chapitres: 10,
      max_verset: 100,
    },
    "Né. ": {
      nom_complet: "Nehemyah (Nehémie)",
      nbre_chapitres: 13,
      max_verset: 100,
    },
    "1 Ch. ": {
      nom_complet: "1 Hayyamim Dibre (1 Chroniques)",
      nbre_chapitres: 29,
      max_verset: 100,
    },
    "2 Ch. ": {
      nom_complet: "2 Hayyamim Dibre (2 Chroniques)",
      nbre_chapitres: 36,
      max_verset: 100,
    },
    "Mt. ": {
      nom_complet: "Matthaios (Matthieu)",
      nbre_chapitres: 28,
      max_verset: 100,
    },
    "Mc. ": {
      nom_complet: "Markos (Marc)",
      nbre_chapitres: 16,
      max_verset: 100,
    },
    "Lu. ": { nom_complet: "Loukas (Luc)", nbre_chapitres: 24, max_verset: 100 },
    "Jn. ": {
      nom_complet: "Yohanan (Jean)",
      nbre_chapitres: 21,
      max_verset: 100,
    },
    "Ac. ": { nom_complet: "Actes", nbre_chapitres: 28, max_verset: 100 },
    "Ja. ": {
      nom_complet: "Yaacov (Jacques)",
      nbre_chapitres: 5,
      max_verset: 100,
    },
    "Ga. ": { nom_complet: "Galates", nbre_chapitres: 6, max_verset: 100 },
    "1 Th. ": {
      nom_complet: "1 Thessaloniciens",
      nbre_chapitres: 5,
      max_verset: 100,
    },
    "2 Th. ": {
      nom_complet: "2 Thessaloniciens",
      nbre_chapitres: 3,
      max_verset: 100,
    },
    "1 Co. ": {
      nom_complet: "1 Corinthiens",
      nbre_chapitres: 16,
      max_verset: 100,
    },
    "2 Co. ": {
      nom_complet: "2 Corinthiens",
      nbre_chapitres: 13,
      max_verset: 100,
    },
    "Ro. ": { nom_complet: "Romains", nbre_chapitres: 16, max_verset: 100 },
    "Ep. ": { nom_complet: "Éphésiens", nbre_chapitres: 6, max_verset: 100 },
    "Ph. ": { nom_complet: "Philippiens", nbre_chapitres: 4, max_verset: 100 },
    "Col. ": { nom_complet: "Colossiens", nbre_chapitres: 4, max_verset: 100 },
    "Phm. ": { nom_complet: "Philémon", nbre_chapitres: 1, max_verset: 100 },
    "1 Ti. ": {
      nom_complet: "1 Timotheos (1 Timothée)",
      nbre_chapitres: 6,
      max_verset: 100,
    },
    "Tit. ": {
      nom_complet: "Titos (Tites)",
      nbre_chapitres:3,
      max_verset: 100,
    },
    "1 Pi. ": {
      nom_complet: "1 Petros (1 Pierre)",
      nbre_chapitres: 5,
      max_verset: 100,
    },
    "2 Pi. ": {
      nom_complet: "2 Petros (2 Pierre)",
      nbre_chapitres: 3,
      max_verset: 100,
    },
    "2 Ti. ": {
      nom_complet: "2 Timotheos (2 Timothée)",
      nbre_chapitres: 4,
      max_verset: 100,
    },
    "Jud. ": {
      nom_complet: "Yéhouda (Jude)",
      nbre_chapitres: 1,
      max_verset: 100,
    },
    "Hé. ": { nom_complet: "Hébreux", nbre_chapitres: 13, max_verset: 100 },
    "1 Jn. ": {
      nom_complet: "1 Yohanan (1 Jean)",
      nbre_chapitres: 5,
      max_verset: 100,
    },
    "2 Jn. ": {
      nom_complet: "2 Yohanan (2 Jean)",
      nbre_chapitres: 1,
      max_verset: 100,
    },
    "3 Jn. ": {
      nom_complet: "3 Yohanan (3 Jean)",
      nbre_chapitres: 1,
      max_verset: 100,
    },
    "Ap. ": {
      nom_complet: "Apokalupsis (Apocalypse)",
      nbre_chapitres: 22,
      max_verset: 100,
    },
  },
];

export default function SearchInputPlus({goto, close}:{goto:Function, close:Function}) {

  const [animating, setAnimating] = useState(false);
  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption();
      setAnimating(false);
    },
    onDropdownOpen: () => setAnimating(true),
  });

  
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

  const [value, setValue] = useState('');
  function getFilteredOptions(data: string[], searchQuery: string, limit: number) {
    const result: string[] = [];

    for (let i = 0; i < data.length; i += 1) {
      if (result.length === limit) {
        break;
      }

      if (data[i].toLowerCase().includes(searchQuery.trim().toLowerCase())) {
        result.push(data[i]);
      }
    }

    return result;
  }
  const filteredOptions = getFilteredOptions(abbr_list, value, 7);
  const shouldFilterOptions = !abbr_list.some((item) => item === value);
  // const filteredOptions = shouldFilterOptions
  //   ? abbr_list.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim()))
  //   : abbr_list;

  const options = filteredOptions.map((item, index) => (

      <Combobox.Option value={item} key={item} className={classes.animateOption}
        style={{ animationDelay: `${index * 30}ms`}}>
        {item}
      </Combobox.Option>
  ));

  // const options = filteredOptions.map((item, index) => {
  //   if (index < 7) {
  //     <Combobox.Option value={item} key={item} className={classes.animateOption}
  //       style={{ animationDelay: `${index * 30}ms` }}>
  //       {item}
  //     </Combobox.Option>
  //   }
  // })

  useEffect(() => {
    // we need to wait for options to render before we can select first one
    combobox.selectFirstOption();
  }, [value]);
  const keys = ``;
  return (
    <Combobox
      onOptionSubmit={(optionValue) => {
        setValue(optionValue);
        combobox.closeDropdown();
      }}
      store={combobox}
    >
      <Combobox.Target>
        <TextInput
        style={{ fontSize: '16px' }}
          ff={'monospace'}
          labelProps={{ color: 'red'}}
          label="Recherchez..."
          description="Entrer votre rechercher livre, chapitre et verset. Separez ces éléments d'un espace"
          placeholder="eg: 1co 4 5"
          mt={10}
          value={value}
          data-autofocus
          leftSection={keys}
          // data={groceries}
          onKeyDown={getHotkeyHandler([
            ['mod+Enter', () => runSearch(value)],
            ['mod+Delete', () => setValue('') ],
            ['shift+R', () => close() ],
            ['mod+K', () => close() ],
          ])}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            combobox.openDropdown();
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
          rightSection={
            value !== '' && (
              <GotoKeysBind />
            )
          }
        />
      </Combobox.Target>
      
      {options.length === 0 ? (
        <></>
      ) : (
        <Combobox.Dropdown>
          <Combobox.Options>
            {options}
          </Combobox.Options>
        </Combobox.Dropdown>
      )}
    </Combobox>
  );
}