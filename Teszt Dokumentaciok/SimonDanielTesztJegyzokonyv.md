# Tesztjegyzőkönyv-`Felhasználó CRUD, Keresőmotor, Időpont pipeline, Követések GUI, Jelszóváltoztatás, Profil és Feed frontend backend összekötés`

- Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `9.3.8.  Felhasználók kezeléséhez tartozó logika ( CRUD )` funkcióihoz készült. Felelőse: `Simon Dániel`
- Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `9.3.10 Keresőmotor létrehozása` funkcióihoz készült. Felelőse: `Simon Dániel`
- Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `9.3.22.  Posztok es kommentek időpontjának kiszámitása.` funkcióihoz készült. Felelőse: `Simon Dániel`
- Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `9.3.23.  Követések kezeléshez kapcsolódó GUI megvalósítása` funkcióihoz készült. Felelőse: `Simon Dániel`
- Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `9.3.31.  Jelszóváltoztatás lehetőség biztositása` funkcióihoz készült. Felelőse: `Simon Dániel`
- Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `9.3.35. Profil frontend és backend összekötése` funkcióihoz készült. Felelőse: `Simon Dániel`
- Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `9.3.36. Feed frontend és backend összekötése` funkcióihoz készült. Felelőse: `Simon Dániel`

## 1. Teszteljárások (TP)

### 1.1. Felhasználó CRUD tesztelése.
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02, TC-03
- Leírás: Felhasználó CRUD tesztelése.
    0. lépés: Hivjuk meg a user service-ből a megfelelő függvényt.
    1. lépés: Ellenőrizzük az eredményt az adatbázisban.

### 1.2. Keresőmotor tesztelése.
- Azonosító: TP-02
- Tesztesetek: TC-01
- Leírás: Keresési funckió tesztelése.
    0. lépés: Hivjuk meg a menu component-ből a megfelelő függvényt.
    1. lépés: Ellenőrizzük az eredményt az URL-ben.

### 1.3. Időpont pipe tesztelése.
- Azonosító: TP-03
- Tesztesetek: TC-01
- Leírás: Időpont pipe funckió tesztelése.
    0. lépés: Egy számra hívjuk meg a pipe-ot.
    1. lépés: Nezzük meg mivé alakítja át.

### 1.4. Követések oldal tesztelése.
- Azonosító: TP-04
- Tesztesetek: TC-01
- Leírás: Követések oldal tesztelése.
  0. lépés: Nyissuk meg a követések oldalt.
  1. lépés: Reszponzivitás ellenörzése.

### 1.5. Jelszó módósítás tesztelése.
- Azonosító: TP-05
- Tesztesetek: TC-01
- Leírás: Kedvelési funckió tesztelése.
  0. lépés: Kérjünk jelszó változtatási emailt.
  1. lépés: A kapott emailben lévő linket nyissuk meg.
  2. lépés: Adjuk meg az új jelszót.
  3. lépés: Az új jelszó használatával lépjunk be.

### 1.6. Profil tesztelése.
- Azonosító: TP-06
- Tesztesetek: TC-01
- Leírás: Profil tesztelése.
  0. lépés: Megnyitom a profilom.
  1. lépés: Ellenörzöm, hogy az én adataim és posztjaim jelennek-e meg.
  2. lépés: Ellenörzöm, hogy valós adatok jelennek-e meg.

### 1.7. Feed tesztelése.
- Azonosító: TP-07
- Tesztesetek: TC-01
- Leírás: Kedvelési funckió tesztelése.
  0. lépés: Megnyitom a Feed-et.
  1. lépés: Ellenörzöm, hogy az általam követett emberek posztjai jelennek-e meg.
  2. lépés: Ellenörzöm, hogy nincs-e kimaradt poszt amit látni kéne.

## 2. Teszesetek (TC)

### 2.1. Felhasználó CRUD tesztelése.

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: create funkció tesztelése
- Bemenet: User interface.
- Művelet: Létrehozás.
- Elvárt kimenet: Létrehoz egy új documentumot adatbázisban.

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: getAll funkció tesztelése
- Bemenet: -
- Művelet: Összes user lekérése.
- Elvárt kimenet: Megkapjuk az összes usert a adatbázis-ból.

#### 2.1.3. TC-03
- TP: TP-01
- Leírás: getIfContains funkció tesztelése
- Bemenet: string.
- Művelet: Felhasználók lekérése akiknek a neve tartalmazza az bemenetként kapott stringet.
- Elvárt kimenet: Csak azokat a felhasználókat kapjuk vissza akiknek a neve tartalmazza a bemeneti stringet.


### 2.2. Keresőmotor tesztelése.

#### 2.2.1. TC-01
- TP: TP-02
- Leírás: Keresőmotor tesztelése
- Bemenet: string
- Művelet: Átirányítás a kovetok/string oldalra.
- Elvárt kimenet: Az URL-ben megjelenik a beírt string.

### 2.3. Időpont pipe tesztelése.

#### 2.3.1. TC-01
- TP: TP-03
- Leírás: Pipe tesztelése
- Bemenet: Időpont számként.
- Művelet: Szöveggé alakítás.
- Elvárt kimenet: Attől függően, hogy a bemenet mikori időpont, kiírja, hogy milyen régi az időpont.

### 2.4. Követések oldal tesztelése.

#### 2.4.1. TC-01
- TP: TP-04
- Leírás: Követések oldal tesztelése
- Bemenet: -
- Művelet: Oldal megjelenítése.
- Elvárt kimenet: Mindig a megfelelő meretűek az elemek és megfelelő helyen vannak, függetlenül az ablakmérettől.

### 2.5. Jelszó módósítás tesztelése.

#### 2.5.1. TC-01
- TP: TP-05
- Leírás: Jelszó módósítás tesztelése.
- Bemenet: Régitől eltérő jelszó
- Művelet: Jelszó módosítás.
- Elvárt kimenet: Csak az új jelszóval tudunk belépni.

### 2.6. Profil tesztelése.

#### 2.6.1. TC-01
- TP: TP-06
- Leírás: Profil tesztelése.
- Bemenet: -
- Művelet: Adatbázisból lekérdezés és adatok megjelenítése.
- Elvárt kimenet: A saját posztjaim és adataim megjelennek a profilon.

### 2.7. Feed tesztelése.

#### 2.7.1. TC-01
- TP: TP-07
- Leírás: Feed tesztelése.
- Bemenet: -
- Művelet: Adatbázisból lekérdezés és posztok megjelenítése.
- Elvárt kimenet: Az általam követett emberek posztjai és adataim megjelennek.

## 3. Tesztriportok (TR)

### 3.1. Felhasznaló CRUD tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: create functiont meghivtam.
    2. lépés: User létrejött az adatbázisban.


#### 3.1.2. TR-02 (TC-02)
- TP: TP-01
    1. lépés: getAll functiont meghivtam.
    2. lépés: Megkaptam az összes usert az adatbázisból.

#### 3.1.3. TR-03 (TC-03)
- TP: TP-01
    1. lépés: getIfContains functiont meghivtam.
    2. lépés: Azokat a felhasználókat kaptam vissza akiknek a neve a bemeneti stringel kezdődik.

### 3.2. Keresőmotor tesztriportjai

#### 3.2.1. TR-01 (TC-01)
- TP: TP-02
    1. lépés: Beírtam egy stringet a keresősávba.
    2. lépés: Rákattintottam a keresés gombra.
    3. lépés: Átirányított és megjelent a beírt string az URL-ben.

### 3.3. Időpont pipe tesztriportjai.

#### 3.3.1. TR-01 (TC-01)
- TP: TP-03
    1. lépés: Átadtam neki egy számot ami az időpontot szimbolizálja.
    2. lépés: Frissítem az oldalt és ellenörzöm hogy valódi időt ír-e ki.
    3. lépés: Mindig a megfelelő időt írja ki.

### 3.4. Követések oldal tesztriportjai.

#### 3.4.1. TR-01 (TC-01)
- TP: TP-04
  1. lépés: Megnyitottam az oldalt.
  2. lépés: Átméreteztem az ablakot különbőző méretekre.
  3. lépés: Mindig az elvárt megjelenést kaptam.

### 3.5. Jelszóváltoztatás tesztriportjai.

#### 3.5.1. TR-01 (TC-01)
- TP: TP-05
  1. lépés: Kértem egy jelszóváltoztatás emailt.
  2. lépés: Beírom az új jelszót.
  3. lépés: Megpróbálok belépni a régi jelszóval=>HIBA.
  4. lépés: Megpróbálok belépni az új jelszóval=> SIKER.

### 3.6. Profil tesztriportjai.

#### 3.6.1. TR-01 (TC-01)
- TP: TP-06
  1. lépés: Megnyitom a profilom.
  2. lépés: Megnézem, hogy az én adataim szerepelnek-e => IGEN.
  3. lépés: Összevetem az adatbázisban lévő adatokkal => MINDEN HELYES.

### 3.7. Feed tesztriportjai.

#### 3.7.1. TR-01 (TC-01)
- TP: TP-07
  1. lépés: Megnyitom a feedet.
  2. lépés: Megnézem, hogy az ismerőseim posztjai szerepelnek-e => IGEN.
  3. lépés: Összevetem az adatbázisban lévő posztokkal, hogy nem-e maradt ki poszt => NEM.
    