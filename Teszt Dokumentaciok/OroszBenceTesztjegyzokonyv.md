# Tesztjegyzőkönyv-`Munkamenethez szükséges adatok létrehozása az adatbázisban`

Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `9.3.1. Felhasználói munkamenethez szükséges adatok létrehozása az adatbázisban`,`9.3.24. Követések kezeléséhez szükséges adatok létrehozása az adatbázisban`,`9.3.28.  Értesitések kezeléséhez szükséges adatok létrehozása az adatbázisban` funkcióihoz készült. Felelőse: `Orosz Bence` 


## 1. Teszteljárások (TP)

### 1.1. Felhasználói adatok létrehozása adatbázisban
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02
- Leírás: Regisztrálás során adatok eltárolása adatbázisban
    1. lépés: Az alkalmazást elindítva regisztráció fülve menjünk.
    2. lépés: A felhasználónév, email, jelszó és jelszó mégegyszer mezőkbe írunk helyesen adatot.
    3. lépés: Regisztráció gomb kattintás
    4. lépés: Megkapott eredmények alapján átküldés firebase-re, annak megfelelő táblájában új felhasználó létrehozása.
    5. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: Létrejött új felhasználó a táblában.

### 1.2. Követések kezeléséhez szükséges adatok létrehozása adatbázisban
- Azonosító: TP-02
- Tesztesetek: TC-01, TC-02
- Leírás: 
    1. lépés: Az alkalmazást elindítva bejelentkezés fülve menjünk.
    2. lépés: Megfelelő adatok megadása, belépés gomb katintás.
    3. lépés: Felül elhelyezkedő keresősávba egy felhasználó nevére, vagy neve kezdetére rákeresni.
    4. lépés: A kilistázott felhasználó bekövetése.
    5. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: Bekövetett felhasználó ID-jának eltárolása adatbázisban.

### 1.3. Értesítések kezeléséhez szükséges adatok létrehozása adatbázisban
- Azonosító: TP-03
- Tesztesetek: TC-01
- Leírás: Bekövetést követő értesítés adatbázisban eltárolva
  1. lépés: Az alkalmazást elindítva bejelentkezés fülve menjünk.
  2. lépés: Megfelelő adatok megadása, belépés gomb katintás.
  3. lépés: Új bekövetés esetén a felhasználónak küldött értesítés adatainak eltárolása adatbázisban.
  
## 2. Teszesetek (TC)

### 2.1. Felhasználói adatok tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Létrejött felhasználói adat tesztelése
- Bemenet: `Felhasználónév` = mako ; `email` = mako@omak.hu 
- Művelet: nyomjuk meg az `Regisztráció` gombot 
- Elvárt kimenet: Táblában "mako" felhasználónév, "mako@okam.hu" email, egyedi ID attribútumokkal.

#### 2.1.2. TC-02
- - TP: TP-01
- Leírás: Létrejött felhasználói adat tesztelése
- Bemenet: `Felhasználónév` = teszt1 ; `email` = teszt1@gmal.com
- Művelet: nyomjuk meg az `Regisztráció` gombot
- Elvárt kimenet: Táblában "teszt1" felhasználónév, "teszt1@gmail.com" email, egyedi ID attribútumokkal.

### 2.2. Követési adatok tesztesetei

#### 2.2.1. TC-01
- TP: TP-02
- Leírás: Bekövetés során felh.ID adatbázisba eltárolás
- Bemenet: "mako" felhasználó beköveti "teszt1" felhasználót 
- Művelet: Bejelentkezés után "teszt1" felhasználóra keresés, bekövetés
- Elvárt kimenet: Adatbázisban "mako" felhasználói adatoknál követések attribútumba "teszt1" ID beillesztése

#### 2.2.2. TC-02
- TP: TP-02
- Leírás: Bekövetés során felh.ID adatbázisba eltárolás
- Bemenet: "ibuprofen" felhasználó beköveti "teszt1" felhasználót
- Művelet: Bejelentkezés után "teszt1" felhasználóra keresés, bekövetés
- Elvárt kimenet: Adatbázisban "ibuprofen" felhasználói adatoknál követések attribútumba "teszt1" ID beillesztése

### 2.3. Értesítési adatok tesztesete

#### 2.3.1. TC-01
- TP: TP-03
- Leírás: Értesítés eltárolása adatbázisban
- Bemenet: "mako" felhasználó beköveti "teszt1" felhasználót, "teszt1" felhasználó értesítést kap
- Művelet: Az értesítés eltárolása külön Értesítések táblában
- Elvárt kimenet: Értesítések táblában új egyed létrehozása, aminek attribútumai: dátum, feladó, fogadó, értesítés üzenete


## 3. Tesztriportok (TR)

### 3.1. Felhasználói adatok tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: Regisztráció fülve nagiválás
    2. lépés: "mako" felhasználónév, "mako@okam.hu" email, egyedi jelszó beírása
    3. lépés: Regisztrációra gombra kattintás
    4. lépés: Adatok megvizsgálása firebase adatbázisban
    5. lépés: Helyesen létrehozott egy új felhasználót, eltárolta adatait


#### 3.1.2. TR-02 (TC-02)
- TP: TP-01
  1. lépés: Regisztráció fülve nagiválás
  2. lépés: "teszt1" felhasználónév, "tezst1@gmail.com" email, egyedi jelszó beírása
  3. lépés: Regisztrációra gombra kattintás
  4. lépés: Adatok megvizsgálása firebase adatbázisban
  5. lépés: Helyesen létrehozott egy új felhasználót, eltárolta adatait

### 3.2. Követési adatok tesztriportjai

#### 3.2.1. TR-01 (TC-01)
- TP: TP-02
    1. lépés: Belépés "mako@okam.hu" emaillel és jelszóval
    2. lépés: "teszt1" felhasználóra keresés
    3. lépés: Felhasználó bekövetése
    4. lépés: Firebase adatbázisbeli adatok ellenőrzése
    5. lépés: A felhasználóhoz sikeresen létrejött a követések attribútumon belül az új "teszt1" ID

#### 3.2.2. TR-02 (TC-02)
- TP: TP-02
  1. lépés: Belépés "head@ache.us" emaillel és jelszóval
  2. lépés: "teszt1" felhasználóra keresés
  3. lépés: Felhasználó bekövetése
  4. lépés: Firebase adatbázisbeli adatok ellenőrzése
  5. lépés: A felhasználóhoz sikeresen létrejött a követések attribútumon belül az új "teszt1" ID

### 3.2. Értesítési adatok tesztriportja

#### 3.2.1. TR-01 (TC-01)
- TP: TP-03
  1. lépés: Belépés "mako@okam.hu" emaillel és jelszóval
  2. lépés: "teszt1" felhasználóra keresés
  3. lépés: Felhasználó bekövetése
  4. lépés: Firebase adatbázisban Értesítések táblában ellenőrzés
  5. lépés: A táblában sikeresen létrejött új egyed, attribútumai: dátum, feladó: "mako" fogadó:"teszt1", üzenet:"Mako bekövetett"

    