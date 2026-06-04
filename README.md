# Gakgo Transport

GakGo markasi icin Next.js + React ile hazirlanmis tek sayfalik parallax lojistik landing sayfasi.

## Komutlar

```bash
npm install
npm run dev
```

Dev server acildiginda sayfa `http://localhost:3000` adresinde calisir.

## Yapi

- `app/` Next.js app router girisi ve global stiller
- `components/` sayfa bolumleri, header, dil secici ve hero gorsel animasyonu
- `lib/i18n.ts` coklu dil sozlugu ve dil meta verisi
- `hooks/useReveal.ts` scroll reveal davranisi

## Hero Gorseli

Hero kamyon gorseli `public/hero-iveco-truck.png` dosyasindadir. Kendi tır fotografini koymak icin ayni dosyayi degistirmen yeterli.
