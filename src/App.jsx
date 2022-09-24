import './sass/main.scss';
import { useState } from 'react';
import { useEffect } from 'react';

export default function App() {
    const [kucuk, setKucuk] = useState(1);
    const [buyuk, setBuyuk] = useState(10);
    const [adet, setAdet] = useState(10);
    const [benzersiz, setBenzersiz] = useState(false);
    const [liste, setListe] = useState([]);
    const [kaydetListe, setKaydetListe] = useState([]);

    const createRandomNumber = (kucuk, buyuk) => {
        let sayi = Math.floor(Math.random() * Math.abs(buyuk - kucuk) + kucuk);
        return sayi;
    };

    const clear = () => {
        setKucuk(1);
        setBuyuk(10);
        setAdet(10);
        setListe([]);
    };

    const createNumber = () => {
        let dizi = [];
        let i = 0;
        let count = Math.abs(adet <= buyuk - kucuk ? adet : buyuk - kucuk);

        while (count) {
            let sayi = createRandomNumber(kucuk, buyuk);
            if (benzersiz) {
                if (!dizi.includes(sayi)) {
                    dizi[i] = sayi;
                    count--;
                    i++;
                }
                continue;
            } else {
                dizi[i] = sayi;
                count--;
                i++;
            }
        }

        setListe([...dizi]);
    };

    const kaydet = () => {
        setKaydetListe([...kaydetListe, liste]);
    };

    console.log(kaydetListe);

    return (
        <>
            <div className="container">
                <div className="sol">
                    <label htmlFor="">
                        <span>En Küçük Sayı</span>
                        <input
                            type="number"
                            value={kucuk}
                            onChange={e => setKucuk(e.target.value)}
                        />
                    </label>
                    <label htmlFor="">
                        <span>En Büyük Sayı</span>
                        <input
                            type="number"
                            value={buyuk}
                            onChange={e => setBuyuk(e.target.value)}
                        />
                    </label>
                    <label htmlFor="">
                        <span>Kaç Adet Sayı</span>
                        <input
                            type="number"
                            value={adet}
                            onChange={e => setAdet(e.target.value)}
                        />
                    </label>
                    <button onClick={createNumber}>Sayı Üret</button>
                    <button onClick={kaydet}>Kaydet</button>
                    <button onClick={clear}>Temizle</button>
                </div>
                <div className="sag">
                    <div className="liste">
                        {liste.map((item, index) => (
                            <li key={index + 1}>
                                {index + 1}. Sayı : {item}
                            </li>
                        ))}
                    </div>

                    <label>
                        Benzersiz
                        <input
                            type="checkbox"
                            onChange={e => setBenzersiz(!benzersiz)}
                        />
                    </label>
                </div>
            </div>
            <div className="result">
                {kaydetListe.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </div>
        </>
    );
}
