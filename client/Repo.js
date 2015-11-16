/* @flow */

import { Repo } from './types'
import { find, flatten } from 'lodash'

function newCategory (id, title, type, steps) {
  return {
    id, title, type, steps,
    terms: flatten(steps.map(s => s.terms))
  }
}

function newStep (id, slides, question, terms) {
  return {
    id, question, terms,
    slides: slides.map(text => ({ text }))
  }
}

function newQuestion (text, answers, correct_answer) {
  return {
    text, correct_answer,
    answers: answers.map(text => ({ text }))
  }
}

const repo: Repo = {
  categories: [
    newCategory(1, 'Folkeafstemningen', 'eu', [
      newStep(1, [
        'Et flertal af Folketingets partier ønsker at erstatte Danmarks retsforbehold med en tilvalgsordning.',
        'Da de danske EU-forbehold blev indført, lovede politikerne, at de kun kunne ændres ved en folkeafstemning.',
        'Justitsministeriet vurderer, at Danmark afgiver suverænitet, hvis vi ændrer retsforbeholdet til en tilvalgsordning. Enten skal 5/6-dele af Folketingets medlemmer støtte det, eller også skal der være en folkeafstemning.'
      ], newQuestion('Hvad vil et flertal i Folketinget?', [
        'Indføre et retsforbehold.',
        'Afskaffe Danmarks retsforbehold fuldstændig.',
        'Erstatte retsforbeholdet med en tilvalgsordning.'
      ], 2), ['Suverænitetsafgivelse']),
      newStep(2, [
        'Danmark har haft et retsforbehold siden 1993. Det betyder, at vi står uden for størstedelen af det retlige samarbejde og EUs udlændingepolitik.',
        'På trods af retsforbeholdet deltager vi i dag i det europæiske politisamarbejde, Europol, samt enkelte andre regelsæt.',
        'Siden Amsterdamtraktaten i 1997 har man rykket mere og mere af det retlige samarbejde længere ind i EU. Nu diskuterer man også ændringer af Europol-samarbejdet, og det kan skabe problemer for fortsat dansk deltagelse i Europol.',
        'Hvis vi stemmer ja d. 3. december, kan Folketinget bestemme, at vi fortsætter i Europol. Hvis vi stemmer nej, skal dansk medlemskab forhandles med Europa-Kommissionen, de øvrige EU-lande og Europaparlamentet.'
      ], newQuestion('Hvornår fik Danmark et retsforbehold?', [
        '1972',
        '1993',
        '2009'
      ], 1), ['Retsforbeholdet']),
      newStep(3, [
        'En tilvalgsordning vil betyde, at et flertal i Folketinget fremover kan beslutte, om vi skal tilslutte os mere af det europæiske retssamarbejde.',
        'Hvis vi stemmer ja d. 3. december, tilslutter vi os samtidig samarbejdet på 22 områder, hvor vi i dag står udenfor. Det gælder blandt andet regler om forældremyndighed, menneskehandel og seksuelt misbrug af børn.',
        'Hvis vi stemmer nej d. 3. december, bevarer vi retsforbeholdet, som det er i dag.'
      ], newQuestion('Hvis vi får en tilvalgsordning, hvem bestemmer så, om vi skal deltage i mere af retssamarbejdet?', [
        'Folketinget.',
        'Regeringen.',
        'Vælgerne.'
      ], 0), ['Tilvalgsordning']),
      newStep(4, [
        'Seks af Folketingets partier anbefaler et ja d. 3. december. Ja-partierne er Venstre, Socialdemokraterne, Radikale, Konservative, SF og Alternativet.',
        'Tre af Folketingets partier anbefaler et nej d. 3. december. Nej-partierne er Dansk Folkeparti, Liberal Alliance og Enhedslisten. Derudover anbefaler Folkebevægelsen mod EU, som har et mandat i Europa-Parlamentet, også et nej.'
      ], newQuestion('Hvilke partier anbefaler et nej?', [
        'Dansk Folkeparti, Liberal Alliance, Enhedslisten og Folkebevægelsen mod EU.',
        'Venstre, Socialdemokraterne, Radikale, Konservative, SF og Alternativet.',
        'Ingen af partierne.'
      ], 0), ['Ja- og nej-partierne'])
    ]),
    newCategory(2, 'Strafferet', 'justice', [
      newStep(5, [
        'EU-reglerne på det strafferetlige område handler om grænseoverskridende kriminalitet som menneskehandel, narkohandel, cyberkriminalitet og børneporno.',
        'EU-reglerne sætter rammer for blandt andet udveksling af bevismateriale og giver mulighed for, at polititilhold udstedt i et land også kan have virkning i andre EU-lande.',
        'EU-reglerne fastsætter også standarder for, hvordan man skal straffe f.eks. insiderhandel, identitetstyveri og menneskehandel.'
      ], newQuestion('Hvordan deltager Danmark i dag i det strafferetlige samarbejde?', [
        'Vi deltager i fem regelsæt.',
        'Vi deltager i otte regelsæt.',
        'Vi står udenfor.'
      ], 2), ['Strafferet']),
      newStep(6, [
        'Hvis vi stemmer ja d. 3. december, tilslutter Danmark sig flere retsakter. De handler bl.a. om menneskehandel, seksuelt misbrug af børn, cyberkriminalitet, markedsmisbrug og falskmøntneri.',
        'Flere af retsakterne fastsætter minimumsregler for, hvad der skal være strafbart, og hvor stor straffen skal være.',
        'Den danske straffelov lever allerede i dag op til minimumsreglerne, når det gælder menneskehandel, seksuelt misbrug af børn, markedsmisbrug og falskmøntneri.',
        'Hvis vi tilslutter os cybercrime-direktivet, skal strafferammen i Danmark øges fra to til fem år for visse former for cyberkriminalitet.'
      ], newQuestion('På hvilket område skal den danske straffelov skærpes, hvis vi stemmer ja d. 3. december?', [
        'Menneskehandel.',
        'Seksuelt misbrug af børn.',
        'Cyberkriminalitet.'
      ], 2), ['Minimumsregler']),
      newStep(7, [
        'Uanset om vi stemmer ja eller nej d. 3. december, vil vi fortsat stå uden for det strafferetlige samarbejde på flere områder.',
        'De fravalgte regler handler blandt andet om konfiskationer, behandling af ofre for kriminalitet, og tiltaltes rettigheder.',
        'Reglerne er fravalgt, fordi Danmark enten allerede lever op til dem, fordi de ville bryde med dansk retssikkerhed eller fordi de ville medføre ekstraudgifter.',
        'Hvis vi får en tilvalgsordning, vil et flertal i Folketinget på et senere tidspunkt kunne tilvælge flere dele af det strafferetlige område uden at sende spørgsmålet til folkeafstemning.'
      ], newQuestion('På hvilket område står vi fortsat udenfor, selvom vi stemmer ja?', [
        'Konfiskationer',
        'Menneskehandel',
        'Cybercrime'
      ], 0), ['Fravalgte regler'])
    ]),
    newCategory(3, 'Flygtninge', 'migrants', [
      newStep(8, [
        'Danmark står i dag uden for det meste af EU’s asyl- og udlændingepolitik. Sådan vil det fortsat være, uanset om vi stemmer ja eller nej d. 3. december.',
        'Et ja vil betyde, at et flertal i Folketinget fremover kan bestemme, om Danmark skal være med i flere dele af asyl- og udlændingepolitikken. Ja-partierne har lovet hinanden kun at tilvælge nye EU-love, alle ja-partierne er enige om.',
        'Statsminister Lars Løkke Rasmussen (V) har lovet, at han vil udskrive en ny folkeafstemning, hvis et flertal i Folketinget vil deltage i mere af den fælles asyl- og udlændingepolitik.'
      ], newQuestion('Hvad har statsministeren lovet om asyl- og udlændingepolitikken?', [
        'At Danmark skal være med i det hele.',
        'At udskrive en ny folkeafstemning, hvis Danmark skal være med i mere.',
        'At melde Danmark helt ud af samarbejdet.'
      ], 1), ['Asyl og udlændinge']),
      newStep(9, [
        'Selvom vi står uden for det meste af asyl- og udlændingepolitikken, er vi alligevel med i to dele af den: Et fælles fingeraftryksregister og den såkaldte Dublin-forordning.',
        'Dublin-forordningen betyder, at vi kan sende asylansøgere tilbage til det første land, de blev registreret i – og at andre lande kan sende asylansøgere tilbage til os, hvis Danmark var det første EU-land, de ankom til.',
        'Asylansøgere får registreret deres fingeraftryk i det fælles register - Eurodac. Dermed kan andre lande se, om en person tidligere er registreret i et andet land.'
      ], newQuestion('Hvilke dele af EU’s asyl- og udlændingepolitik deltager Danmark i?', [
        'Vi står helt uden for asyl- og udlændingepolitikken.',
        'Dublin-forordningen og det fælles fingeraftryksregister.',
        'Alt andet end Dublin-forordningen og fingeraftryksregisteret.'
      ], 1), ['Dublin-forordningen']),
      newStep(10, [
        'Et flertal af EU-landene er blevet enige om at fordele 160.000 asylansøgere i mellem sig. Formålet er at aflaste især Grækenland og Italien, som modtager langt de fleste flygtninge.',
        'Danmark, Irland og Storbritannien står alle uden for den fælles asylpolitik og er derfor ikke med i fordelingsaftalen. Danmark og Irland har dog tilbudt at modtage henholdsvis 1.000 og 4.000 flygtninge.',
        'Hvis Danmark var med i fordelingsaftalen, skulle vi ifølge EU’s fordelingsnøgle modtage 1,73 procent af de 160.000 flygtninge. Det svarer til ca. 2.800 flygtninge.'
      ], newQuestion('Hvor mange af de 160.000 flygtninge, der skal fordeles, skulle Danmark tage imod, hvis vi var med i den fælles asylpolitik?', [
        'Ca. 2.800',
        'Ca. 1.000',
        'Ca. 28.000'
      ], 0), ['EU-fordelingsnøgle']),
      newStep(11, [
        'Et af de konkrete områder, Danmark står uden for på udlændingeområdet, er de fælles EU-regler for familiesammenføring. Reglerne i Danmark er strammere end i de andre EU-lande.',
        'I Danmark kan en udenlandsk ægtefælle kun blive familiesammenført, hvis begge personer er fyldt 24 år. Desuden er der strammere krav til ægteparrets tilknytning til Danmark.',
        'Ifølge EU-reglerne kan man som udgangspunkt få familiesammenføring, når begge ægtefæller er fyldt 18 år. Der kan dog stilles et særligt krav om, at de skal være fyldt mindst 21 år.',
        'Hvis Danmark tilslutter sig reglerne for familiesammenføring, vil vi være nødt til at droppe 24-årsreglen og tilknytningskravet.'
      ], newQuestion('Hvad vil Danmark være nødt til at droppe, hvis vi tilslutter os EU’s familiesammenføringsregler?', [
        '21-årsreglen',
        '18-årsreglen',
        '24-årsreglen'
      ], 2), ['24-årsreglen'])
    ]),
    newCategory(4, 'Erhverv', 'business', [
      newStep(12, [
        'Når virksomheder eller borgere handler over grænserne i EU, kan der nogle gange opstå en tvist mellem dem.',
        'EU-reglerne bestemmer, i hvilket land en grænseoverskridende sag skal behandles. Danmark står i dag uden for disse regler.',
        'Uanset om vi stemmer ja eller nej d. 3. december, har reglerne ingen betydning for rent danske sager.'
      ], newQuestion('Hvilken betydning vil reglerne have for rent danske sager ved et ja?', [
        'Reglerne bliver skærpede',
        'Reglerne bliver lempede',
        'Ingen betydning'
      ], 2), ['Handelsret']),
      newStep(13, [
        'Når en virksomhed går konkurs i ét land, kan borgere og virksomheder i et andet land få deres penge i klemme.',
        'Konkursforordningen gør det lettere at anmelde sine krav i det land, hvor virksomheden er gået konkurs.',
        'Danmark har tidligere anmodet om at tilslutte sig konkursforordningen via en parallelaftale. Det har Europa-Kommissionen afvist.',
        'Hvis vi stemmer ja d. 3. december, bliver vi en del af konkursforordningen. Hvis vi stemmer nej, står vi fortsat udenfor.'
      ], newQuestion('Er Danmark i dag med i EU’s konkursforordning?', [
        'Nej, vi har selv valgt at stå udenfor.',
        'Nej, vi har ikke fået lov til at være med.',
        'Ja.'
      ], 1), ['Konkursforordningen']),
      newStep(14, [
        'Retshjælpsdirektivet fastsætter, hvilken rådgivining og juridisk bistand personer som minimum har krav på i civilretlige sager, der går på tværs af EU’s landegrænser.',
        'Vi står uden for retshjælpsdirektivet, uanset om vi stemmer ja eller nej d. 3. december. Med et ja vil et flertal i Folketinget dog kunne tilslutte sig direktivet senere.'
      ], newQuestion('Hvad sker der, hvis vi stemmer ja d. 3. december?', [
        'Vi tilslutter os retshjælpsdirektivet.',
        'Vi står uden for direktivet, men Folketinget kan fremover tilvælge det.',
        'Vi fravælger én gang for alle direktivet.'
      ], 1), ['Retshjælpsdirektivet'])
    ]),
    newCategory(5, 'Familie', 'family', [
      newStep(15, [
        'Hvis en dansk mand og en tysk kvinde får et barn, og senere bliver skilt, skaber det en kompliceret situation om afgørelse af forældremyndighed.',
        'Hvis vi stemmer ja d. 3. december, skal sager om forældremyndighed fremover afgøres i det land, hvor barnet normalt opholder sig.',
        'Skilsmisseafgørelser vil fremover være gældende i alle EU-lande, da man vil anerkende den afgørelse, som det første land kom frem til.',
        'Vi har tidligere forsøgt at indgå en parallelaftale på området, men det har Europa-Kommissionen afvist.'
      ], newQuestion('Hvor skal en sag om forældremyndighed afgøres hvis vi stemmer ja?', [
        'Det land hvor barnet normalt opholder sig',
        'Det land hvor faderen bor',
        'Det land hvor moderen bor'
      ], 0), ['Forældremyndighed']),
      newStep(16, [
        'Ved et ja d. 3. december kan arvinger få udstedt et europæisk arvebevis ved skifteretten. Beviset viser arvingens status og rettigheder.',
        'Arvebeviset kan anvendes over for bl.a. banker i andre EU-lande, som skal udbetale arv til arvingen, uden at de lokale myndigheder skal behandle spørgsmålet om fordeling af arv.'
      ], newQuestion('Hvad kan man få ved skifteretten ved et dansk ja?', [
        'Udbetalt sin arv fra hele EU kontant.',
        'Slippe billigere i skat.',
        'Et europæisk arvebevis.'
      ], 2), ['Arveret']),
      newStep(17, [
        'På ét område vil vi fortsat stå uden for samarbejdet, hvis vi stemmer ja d. 3. december. Det drejer sig om reglerne for, hvilket lands lovgivning der skal gælde i skilsmissesager.',
        'I nogle EU-lande er det vanskeligere at blive skilt end i Danmark. Et tilvalg af de fælles regler ville derfor i nogle tilfælde kunne bremse en skilsmisse.',
        'Hvis vi stemmer ja, vil et flertal i Folketinget dog på et senere tidspunkt kunne bestemme, at Danmark skal tilslutte sig reglerne.'
      ], newQuestion('Hvilke europæiske regler står vi udenfor, uanset om vi stemmer ja eller nej?', [
        'Reglerne om forældremyndighed.',
        'Reglerne om skilsmisser.',
        'Reglerne om børnebidrag.'
      ], 1), ['Skilsmisser'])
    ]),
    newCategory(6, 'Politi', 'police', [
      newStep(18, [
        'Danmark har været med i det europæiske politisamarbejde, Europol, siden det blev etableret i 1998. Formålet med samarbejdet er at bekæmpe grænseoverskridende kriminalitet.',
        'I 2014 søgte det danske politi mere end 70.000 gange i Europols database. Det svarer til 19 procent af alle søgninger i databasen.',
        'Norge, som har en såkaldt operationel aftale med Europol, modtog kun oplysninger 2.000 gange fra databasen. En af forklaringerne er, at Norge ikke har direkte adgang til at søge i databasen, men skal anmode om oplysninger hver gang.'
      ], newQuestion('Hvor mange gange søgte det danske politi i Europol-databasen i 2014?', [
        'Ca. 2.000 gange',
        'Ca. 30.000 gange',
        'Ca. 70.000 gange'
      ], 2), ['Europol']),
      newStep(19, [
        'EU forventes at vedtage en ny forordning om Europol i begyndelsen af næste år. Den vil flytte Europol fra et såkaldt mellemstatsligt samarbejde mellem de enkelte lande til et overstatsligt samarbejde i EU-regi.',
        'Danmarks retsforbehold betyder, at vi ikke kan deltage i det overstatslige samarbejde på retsområdet. Derfor står Danmark umiddelbart til at ryge ud af Europol-samarbejdet.',
        'Et ja til folkeafstemningen vil betyde, at Danmark tilslutter sig den nye forordning og fortsætter i Europol.',
        'Et nej vil betyde, at vi skal forhandle med EU om at få en parallelaftale, hvis vi fortsat vil være med i Europol.'
      ], newQuestion('Hvorfor står vi til at ryge ud af Europol?', [
        'Fordi samarbejdet bliver overstatsligt',
        'Fordi samarbejdet bliver mellemstatsligt',
        'Fordi vi ikke ønsker at være med længere'
      ], 0), ['Overstatsligt samarbejde']),
      newStep(20, [
        'Med et ja d. 3. december vil Danmark også tilslutte sig de europæiske regler om efterforskningskendelser og beskyttelsesordrer på tværs af landegrænser.',
        'Det vil eksempelvis betyde, at hvis du har fået et polititilhold mod en voldelig bekendt, vil du kunne tage tilholdet med til udlandet. De udenlandske myndigheder vil være forpligtet til at yde beskyttelse.',
        'Det vil også betyde, at det tyske politi kan bede det danske politi om at afhøre en dansk statsborger, der er involveret i en tysk straffesag. Politiet vil være forpligtet til at foretage afhøringen inden en bestemt tidsfrist.',
        'Et nej d. 3. december vil betyde, at vi fortsat står uden for de fælles regler om efterforskning og beskyttelse af borgerne på tværs af landegrænser.'
      ], newQuestion('Hvad er IKKE en del af de europæiske regler, Danmark vil tilslutte sig med et ja?', [
        'Regler om fælles efterforskning.',
        'Regler om ens politiuniformer.',
        'Regler om beskyttelse på tværs af landegrænser.'
      ], 1), ['Grænseoverskridende kriminalitet'])
    ])
  ]
}

export function where (q: any) {
  return find(repo.categories, q)
}

export default repo

// vim: foldmethod=indent foldlevel=3
