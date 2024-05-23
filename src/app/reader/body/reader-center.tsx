'use client'

import { readLocalStorageValue, useCounter, useDebouncedCallback, useDebouncedState, useDocumentTitle, useDocumentVisibility, useFetch, useHotkeys, useListState, useNetwork, useStateHistory } from '@mantine/hooks';
import classes from './ReaderCenter.module.scss'

import TypoSize from '../../../../components/actions/typoSize';
import { useEffect, useState } from 'react';
import FormatTime from '../../../../components/base/utilities';
import VersetOutput from './versetOutput';
import ToggleSignet from '../../../../components/actions/ToggleSignet';
import { HoverCard, Text } from '@mantine/core';


interface Item {
  livre: string;
  livre_nom_complet: string;
  chapitre: string;
  num_verset: string;
  verset:string;
  ecrit: string;
  version: string;
  version_abbr: string;
}


function ReaderCenter({
  openEye,
  onHistoryChange
}: {
  openEye: boolean,
  onHistoryChange?: any
}) {

  const [count, handlers] = useCounter(25, { min: 17, max: 50 });
let DetailsVisibility = readLocalStorageValue({ key: 'diBiDetailsVisibility' });


  const networkStatus = useNetwork();
  const [seconds, setSeconds] = useState(0);
  const documentState = useDocumentVisibility();
  // const idle = useIdle(14000, { initialState: false });
  // const interval = useInterval(() => setSeconds((s) => s + 1), 1000);
  // useEffect(() => {
  //   if (documentState != 'hidden'  && !idle) {
  //     interval.start();
  //   }else {
  //     interval.stop();
  //   }
  // }, [documentState, idle]);

  const [value, histhandlers, history] = useStateHistory(0);
  const [verse, viewAction, historyView] = useStateHistory('');

  const [currentLivre, setCurrentLivre] = useState('ge');
  const [currentFullBookName, setCurrentFullBookName] = useState('Bereshit (Genèse)');
  const [currentChapitre, setCurrentChapitre] = useState(1);
  const [currentVerset, setCurrentVerset] = useState(1);
  const [verset, setVerset] = useState('');

    useDocumentTitle(verse ? `Bible Reader: ${verse[0]}` : "The Bible Reader");

  // useEffect(() => {
  //   if (!loading && data) {
      
  //   }
  //   setSeconds(0)

  //   // interval.start();
  // }, [data])
  // }, [loading])

const [debounced, setDebounced] = useDebouncedState('', 300);

    useEffect(() => {
      // if (!loading) {
      //   handleHistory(data) 
      //   onHistoryChange(history)
      // }
      // if (data) {
      //   if(!loading) {
      //     onHistoryChange(history)
      //     handleHistory(data) 
      //   }
      // }
      setDebounced(verset)
    }, [verset]);

    const handleSearch = useDebouncedCallback(() => {
      onHistoryChange(historyView)
    }, 300);

  useEffect(() => {
    handleSearch()

    // handleHistory(debounced)
  },[debounced]);

  useEffect(() => {
    handleCurrentData() 
  }, [currentVerset])


  interface Result {
    livre: string;
    fullBookName: string;
    chapitre: number;
    num_verset: number;
    ecrit: string;
  }

  const [signet, signetActions] = useListState([]);
  
  const setCurrentData = (result: Result) => {
    if (result) {

      setCurrentLivre(result.livre.replace(" ", "").replace(".", "").toLowerCase().replace("é", "e").replace("ö", "o"))
      setCurrentFullBookName(result.livre_nom_complet)
      setCurrentChapitre(result.chapitre)
      setCurrentVerset(result.num_verset)
      setVerset(result.ecrit)
    }
  }

  const goToNext = async() => {
    if (historyView.current + 1 === historyView.history.length) {
      try {
        const response = await fetch(`https://www.shemaproject.org/bym/${currentLivre}/${currentChapitre}/${currentVerset}/next`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        const resultat = result[Object.keys(result)]

        //on ajoute a l'historique
        const new_v = [
          resultat.verset,
          resultat.ecrit,
          resultat.livre_nom_complet,
          resultat.livre.replace(" ", "").replace(".", "").toLowerCase(),
          resultat.chapitre,
          resultat.num_verset
        ]
        signetActions.append({verset: resultat.verset, content: resultat.ecrit })
        console.log(signet);
        
        viewAction.set(new_v)

        //mettre a jour les informations
        setCurrentData(resultat)
      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
    }else{
      viewAction.forward()
      const currentBook = historyView.history[historyView.current+1]
      
      //mettre a jour les informations
      setCurrentLivre(currentBook[3].replace(" ", "").replace(".", "").toLowerCase())
      setCurrentChapitre(currentBook[4])
      setCurrentVerset(currentBook[5])
      setCurrentFullBookName(currentBook[2])
      setVerset(currentBook[1])
    }
  }

  const goToPrev = async() => {
    viewAction.back()
    const actual = historyView.current
    const prev = actual - 1
    if (prev > 0) {
      const currentBook = historyView.history[prev]
      setCurrentLivre(currentBook[3].replace(" ", "").replace(".", "").toLowerCase().replace("é", "e").replace("ö", "o"))
      setCurrentChapitre(currentBook[4])
      setCurrentVerset(currentBook[5])
      setCurrentFullBookName(currentBook[2])
      setVerset(currentBook[1])
    } else if (prev === 0) {
      if (historyView.history[prev] === ''){
        const current_element  = historyView.history[historyView.current]
        try {
          const response = await fetch(`https://www.shemaproject.org/bym/${current_element[3]}/${current_element[4]}/${current_element[5]}/prev`);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const result = await response.json();
          const resultat = result[Object.keys(result)]

          //on ajoute a l'historique
          const new_v = [
            resultat.verset,
            resultat.ecrit,
            resultat.livre_nom_complet,
            resultat.livre.replace(" ", "").replace(".", "").toLowerCase().replace("é", "e").replace("ö", "o"),
            resultat.chapitre,
            resultat.num_verset
          ]
          
          historyView.history[prev] = new_v

          //mettre a jour les informations
          setCurrentLivre(resultat.livre.replace(" ", "").replace(".", "").toLowerCase())
          setCurrentChapitre(resultat.chapitre)
          setCurrentVerset(resultat.num_verset)
          setCurrentFullBookName(resultat.livre_nom_complet)
          setVerset(resultat.ecrit)
        } catch (error) {
          console.error('Error fetching data:', error);
          return null;
        }
      }else{
        const currentBook = historyView.history[prev]
        setCurrentLivre(currentBook[3].replace(" ", "").replace(".", "").toLowerCase())
        setCurrentChapitre(currentBook[4])
        setCurrentVerset(currentBook[5])
        setCurrentFullBookName(currentBook[2])
        setVerset(currentBook[1])
      }
    } else {
        const current_element  = historyView.history[historyView.current]
        try {
          const response = await fetch(`https://www.shemaproject.org/bym/${current_element[3]}/${current_element[4]}/${current_element[5]}/prev`);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const result = await response.json();
          const resultat = result[Object.keys(result)]

          //on ajoute a l'historique
          const new_v = [
            resultat.verset,
            resultat.ecrit,
            resultat.livre_nom_complet,
            resultat.livre.replace(" ", "").replace(".", "").toLowerCase().replace("é", "e").replace("ö", "o"),
            resultat.chapitre,
            resultat.num_verset
          ]
          historyView.history.unshift(new_v)

          //mettre a jour les informations
          setCurrentLivre(resultat.livre.replace(" ", "").replace(".", "").toLowerCase().replace("é", "e").replace("ö", "o"))
          setCurrentChapitre(resultat.chapitre)
          setCurrentVerset(resultat.num_verset)
          setCurrentFullBookName(resultat.livre_nom_complet)
          setVerset(resultat.ecrit)

          historyView.history  = 0
        } catch (error) {
          console.error('Error fetching data:', error);
          return null;
        }
    }
  }

  const goto = async (livre: string = "", chapitre: number = 0, selection:string = "") => {
    try {
      const response = await fetch(`https://www.shemaproject.org/bym/${livre}/${chapitre}/${selection}/`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        const resultat = Object.keys(result)
        historyView.history = ['']

        resultat.forEach(element => {
          const item = [
            result[element]['verset'],
            result[element]['ecrit'],
            result[element]['livre_nom_complet'],
            result[element]['livre'].replace(" ", "").replace(".", "").toLowerCase().replace("é", "e").replace("ö", "o"),
            result[element]["chapitre"],
            result[element]['num_verset']
          ]
          // console.log(item);
          historyView.history = [...historyView.history, item];
        });
        historyView.current = resultat.length
        const currentElement = historyView.history[resultat.length]
        
        resultat['verset'] = currentElement[0]
        resultat['ecrit'] = currentElement[1]
        resultat['livre_nom_complet'] = currentElement[2]
        resultat['livre'] = currentElement[3]
        resultat['chapitre'] = currentElement[4]
        resultat['num_verset'] = currentElement[5]

        setCurrentData(resultat)

      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
  }


  function handleHistory(data)  {
    if (data) {
      histhandlers.set([
            `${data.livre_nom_complet} ${data.chapitre}:${data.num_verset}`, 
            FormatTime(seconds),
            data.livre_nom_complet,
            data.chapitre,
            data.num_verset,
          //   ecrit: `${data.ecrit}`,
      ])
    }
  }

  function handleCurrentData()  {
    if (verset) {
      histhandlers.set([
            `${currentFullBookName} ${currentChapitre}:${currentVerset}`, 
            FormatTime(seconds),
            currentFullBookName,
            currentChapitre,
            currentVerset,
          //   ecrit: `${data.ecrit}`,
      ])
    }
  }
  useHotkeys([
    ['shift+R', () => goto()],
    ['ArrowRight', () => goToNext()],
    ['ArrowLeft', () => goToPrev()],
  ]);
  return (
      <section className={classes.sectionBody}>

            <VersetOutput 
              fontSize={count} 
              verset={verset} 
              currentVerset={currentVerset} 
              currentLivre={currentLivre} 
              currentChapitre={currentChapitre}
              currentFullBookName={currentFullBookName} />
            <div
              style={{
                // display: `${openEye ? 'flex' : 'none'}`,
                opacity: `${openEye ? 1 : 0 }`,
                display: 'flex',
                alignItems: 'center',
                transition: 'opacity .5s',
                justifyContent: 'space-between',
                marginTop: '1rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  columnGap: '.5rem',
                  position: 'relative',
                }}
              >

                <TypoSize count={count} handlers={handlers}/>
                {/* <Annexe/> */}
                {/* <div className={classes.link}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"></path></svg>
                </div> */}
                <ToggleSignet />
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  columnGap: '.2rem'
                }}
              >
                <HoverCard shadow="md" openDelay={3000} closeOnEscape={true} position='left'>
                  <HoverCard.Target>
                    <button className={classes.linkAction} onClick={() => goToPrev()}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4 4m-4-4l4-4"></path></svg>
                    </button>
                  </HoverCard.Target>
                  <HoverCard.Dropdown style={{padding: '2px 8px', borderRadius: '8px', marginTop: '0px', backgroundColor: 'rgb(0,0,0)', transition: 'opacity .5s'}}>
                    <Text size="xs" style={{fontFamily: 'monospace'}}>verset précédent</Text>
                  </HoverCard.Dropdown>
                </HoverCard>
                <button className={classes.linkAction} onClick={() => goto('1jn', 1,'1-2')}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m-7-7h14"></path></svg>
                </button>
                <HoverCard shadow="md" openDelay={3000} closeOnEscape={true} position='right'>
                  <HoverCard.Target>
                    <button className={classes.linkAction} onClick={() => goToNext()}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-4 4l4-4m-4-4l4 4"></path></svg>
                    </button>
                  </HoverCard.Target>
                  <HoverCard.Dropdown style={{padding: '2px 8px', borderRadius: '8px', marginTop: '0px', backgroundColor: 'rgb(0,0,0)', transition: 'opacity .5s'}}>
                    <Text size="xs" style={{fontFamily: 'monospace'}}>verset suivant</Text>
                  </HoverCard.Dropdown>
                </HoverCard>
              </div>
            </div>

      </section>
    
  )
}

export default ReaderCenter