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
  return { text, answers, correct_answer }
}

const repo: Repo = {
  categories: [
    newCategory(1, 'Folkeafstemningen', 'eu', [
      newStep(1, [
        'Et flertal af Folketingets partier ønsker at erstatte Danmarks retsforbehold med en tilvalgsordning.',
        'Da de danske EU forbehold blev indført lovede politikerne at de kun kunne ændres ved en folkeafstemning.',
        'Justititsministeriet vurderer at Danmark afgiver suverænitet, hvis vi ændrer retsforbeholdet til en tilvalgsordning. Enten skal 5/6-dele af Folketingets medlemmer støtte det eller også skal der være folkeafstemning.'
      ], newQuestion('Hvad vil et flertal i Folketinget?', [
        'Indføre et retsforbehold.',
        'Afskaffe Danmarks retsforbehold fuldstændig.',
        'Erstatte retsforbeholdet med en tilvalgsordning.'
      ], 2), ['Suverænitetsafgivelse']),
      newStep(2, [
        'Danmark har haft et retsforbehold siden 1993. Det betyder, at vi står uden for størstedelen af det retlige samarbejde og EUs udlændingepolitik.',
        'På trods af retsforbeholdet deltager vi i dag i det europæiske politisamarbejde, Europol, samt enkelte andre regelsæt.',
        'Siden Amsterdamtraktaten i 1997 har man rykket mere og mere af det retlige samarbejde længere ind i EU. Nu diskuterer man også ændringer af Europol-samarbejdet og det kan skabe problemer for fortsat dansk deltagelse i Europol.',
        'Hvis vi stemmer ja d. 3. december, kan Folketinget bestemme at vi fortsætter i Europol. Hvis vi stemmer nej, skal dansk medlemsskab forhandles med Europa-Kommissionen, de øvrige EU-lande og Europaparlamentet.'
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
    ]),
    newCategory(3, 'Flygtninge', 'migrants', [
    ]),
    newCategory(4, 'Erhverv', 'business', [
    ]),
    newCategory(5, 'Familie', 'family', [
    ]),
    newCategory(6, 'Politi', 'police', [
    ])
  ]
}

export function where (q: any) {
  return find(repo.categories, q)
}

export default repo

// vim: foldmethod=indent foldlevel=3
