import React from 'react';
import './Quotes.css';

function Quotes(){
  const quotes = [
    {
      key: 1,
      imgUrl: 'https://github.com/balda-kamil/awwwokado.net/blob/master/src/media/lipskam.png',
      quote: 'Polecam współpracę z firmą aWWWokado. Stworzyli dla mojej Kancelarii stronę internetową. Profesjonalna obsługa, kreatywność, terminowość - tak określiłabym współpracę z aWWWokado.',
      name: 'Magdalena Lipska Radca Prawny'
    },
    {
      key: 2,
      imgUrl: 'https://github.com/balda-kamil/awwwokado.net/blob/master/src/media/maciekh.png',
      quote: 'Współpraca z firmą aWWWokado przebiegła bardzo profesjonalnie. Dzięki głebokiemu zrozumieniu naszych oczekiwań oraz proaktywnemu sugerowaniu lepszych rozwiązań udało się stworzyć stronę, która działa szybko i sprawnie.',
      name: 'Maciej Hoffman ca30.pl'
    },
    {
      key: 3,
      imgUrl: 'https://github.com/balda-kamil/awwwokado.net/blob/master/src/media/adamb.png',
      quote: 'Współpracujemy z Awwwokado w zakresie tworzenia stron internetowych. Oprócz doskonałej wiedzy i wyczucia trendów, cechują się czymś bardzo istotnym w biznesie - dobrą komunikacją i chęcią zrozumienia potrzeb klienta. Dzięki temu współpraca przebiega bardzo sprawnie, nawet przy złożonych i czasochłonnych projektach.',
      name: 'Adam Bonus AdGents.pl'
    },
  ]
  return(
    <>
      {quotes.map(x => {
        return (
          <div key={x.key}>
            <img src={x.imgUrl} alt="author photo"/>
            <p>{x.quote}</p>
            <p>{x.name}</p>
          </div>
        )
      })}
    </>
  )
}

export default Quotes;