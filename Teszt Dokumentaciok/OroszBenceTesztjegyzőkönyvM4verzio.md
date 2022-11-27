# Tesztjegyzőkönyv-`Beviteli mezők tesztelése a projektben`

Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `9.4.8. Beviteli mezők tesztelése. (TP, TC, TR) funkcióihoz készült. `Felelőse: `Orosz Bence`


## 1. Teszteljárások (TP)

### 1.1. Bejelentkezés beviteli mezők helyessége
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02
- Leírás: Sikeresen elküldi a mezők tartalmát, ahol kötelező a kitöltés ott akkor enged tovább, amikor van helyes adat írva
    1. lépés: Bejelentkezés oldalra navigálás
    2. lépés: Email megadása
    3. lépés: Jelszó megadása
    4. lépés: Bejelentkezés gombra kattintás

### 1.2. Bejelentkezés telefonszámmal és kóddal
- Azonosító: TP-02
- Tesztesetek: TC-01, TC-02
- Leírás: Sikeresen elküldi a telefonszámra a bejelentkező kódot, telefonszám megadása kötelező beviteli mező
  1. lépés: Bejelentkezés oldalra navigálás
  2. lépés: Bejelentkezés telefonszámmal oldalra navigálás a gomb segítségével
  3. lépés: Telefonszám megadása
  4. lépés: Kód küldése gombra nyomás

### 1.3. Regisztráció beviteli mezők helyessége
- Azonosító: TP-03
- Tesztesetek: TC-01, TC-02
- Leírás: Sikeresen elküldi a mezők tartalmát, ahol kötelező a kitöltés ott akkor enged tovább, amikor van helyes adat írva
  1. lépés: Bejelentkezés oldalra navigálás
  2. lépés: Regisztráció gombra nyomás
  3. lépés: Felhasználónév, email, jelszó kétszeres, telefonszám megadása
  4. lépés: Regisztráció gombra nyomás

### 1.4. Felhasználók keresése keresősávval
- Azonosító: TP-04
- Tesztesetek: TC-01
- Leírás: Felhasználókra keresés lehetősége keresősáv segítségével
    1. lépés: Bejelentkezés
    2. lépés: Felső keresősávra kattintás
    3. lépés: Keresni kívánt felasználó teljes, vagy kezdetleges neve
    4. lépés: Enter lenyomása

### 1.5. Segítség oldal sikeres kitöltése
- Azonosító: TP-05
- Tesztesetek: TC-01
- Leírás: Segítség oldalon adatok beírása után sikeres email értesíő küldés
  1. lépés: Segítség oldalra navigálás
  2. lépés: Adatok helyes kitöltése, ahol szükséges
  3. lépés: Email, teljes név, probléma részletei, telefonszám
  4. lépés: Küldés gombra kattintás után email értesítés 

## 2. Teszesetek (TC)

### 2.1. Bejelentkezés beviteli mezők helyességének tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Beviteli mezők csak megfelelő inputot fogadnak el
- Bemenet: email: teszt1@gmail.com jelszo: teszt1
- Művelet: Az adatokat bejelentkezés gomb hatására leellenőrzi az adatbázisban tárolt felhasználókra és ellenőrzi a jelszó helyességét
- Elvárt kimenet: Sikeres bejelentkezés, feedre átirányítás

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: Beviteli mezők csak megfelelő inputot fogadnak el
- Bemenet: email: teszt2@gmail.com jelszo: teszt2
- Művelet: Az adatokat bejelentkezés gomb hatására leellenőrzi az adatbázisban tárolt felhasználókra és ellenőrzi a jelszó helyességét
- Elvárt kimenet: Sikeres bejelentkezés, feedre átirányítás

### 2.2. Bejelentkezés telefonszámmal és kóddal tesztesetei

#### 2.2.1. TC-01
- TP: TP-02
- Leírás: Telefonszám helyes megadása után a számra kód küldése 
- Bemenet: Telefonszám kötelező megadása a beviteli mezőn. 06701231234
- Művelet: Kód küldése gombra kattintás, ami után egy SMS üzenetben kapunk egy bejelentkező kódot
- Elvárt kimenet: Kód megadása után sikeres bejelentkezés, az felhasználó feedjére átirányítás

#### 2.2.2. TC-02
- TP: TP-02
- Leírás: Telefonszám helyes megadása után a számra kód küldése
- Bemenet: Telefonszám kötelező megadása a beviteli mezőn. 06709879876
- Művelet: Kód küldése gombra kattintás, ami után egy SMS üzenetben kapunk egy bejelentkező kódot
- Elvárt kimenet: Kód megadása után sikeres bejelentkezés, az felhasználó feedjére átirányítás

### 2.3. Regisztráció beviteli mezők helyességének tesztesetei

#### 2.3.1. TC-01
- TP: TP-03
- Leírás: Beviteli mezők csak megfelelő inputot fogadnak el
- Bemenet: felhasználónév:Teszt1 email:teszt1@gmail.com jelszó(2x):teszt1 telefonszám:06701231234
- Művelet: Az adatokat regisztráció gomb hatására létrehozza az adatbázisban és ellenőrzi a jelszó helyes ismétlését
- Elvárt kimenet: Sikeres regisztráció, feedre átirányítás

#### 2.3.2. TC-02
- TP: TP-03
- Leírás: Beviteli mezők csak megfelelő inputot fogadnak el
- Bemenet: felhasználónév:Teszt2 email:teszt2@gmail.com jelszó(2x):teszt2 telefonszám:06709879876 
- Művelet: Az adatokat regisztráció gomb hatására létrehozza az adatbázisban és ellenőrzi a jelszó helyes ismétlését
- Elvárt kimenet: Sikeres regisztráció, feedre átirányítás

### 2.4. Felhasználók keresése keresősávval tesztesete

#### 2.4.1. TC-01
- TP: TP-04
- Leírás: Felhasználó keresése a keresősáv használatáaval
- Bemenet: Keresősávba írás
- Művelet: Enter lenyomással a kívánt felhasználókat kilistázza
- Elvárt kimenet: Azokat a felhasználókat listázza ki, akik nevében szerepel a keresni kívánt szöveg


### 2.5. Segítség oldal sikeres kitöltésének tesztesete

#### 2.5.1. TC-01
- TP: TP-05
- Leírás: Segítség oldal adatainak helyes megadása után visszajelzés küldése
- Bemenet: Segítség oldal beviteli mezőinek kitöltése
- Művelet: Küldés gomb kattintás
- Elvárt kimenet: Értesítő email küldése a megkapott segítségkérésről

## 3. Tesztriportok (TR)

### 3.1. Bejelentkezés beviteli mezők helyességének tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: Email beírása: teszt1@gmail.com
    2. lépés: Jelszó megadása: teszt1
    3. lépés: Bejelentkezés gombra kattintás
    4. lépés: Sikeresen bejelentkeztünk, teszt1 felhasználó feedjére átirányított az oldal


#### 3.1.2. TR-02 (TC-02)
- TP: TP-01
  1. lépés: Email beírása: teszt2@gmail.com
  2. lépés: Jelszó megadása: teszt2
  3. lépés: Bejelentkezés gombra kattintás
  4. lépés: Sikeresen bejelentkeztünk, teszt2 felhasználó feedjére átirányított az oldal

### 3.2. Bejelentkezés telefonszámmal és kóddal tesztriportjai

#### 3.2.1. TR-01 (TC-01)
- TP: TP-02
    1. lépés: Bejelentkezés oldalra navigálás
    2. lépés: Bejelentkezés telefonszámmal gombra nyomás, ez elnavigál a megfelelő oldalra
    3. lépés: Telefonszám megadása 06701231234
    4. lépés: Kód küldése gombra nyomás
    5. lépés: Pár perc múlva megkapjuk a belépési kódot 
    6. lépés: Kód beírása után sikeres bejelentkezés, teszt1 feedre irányítás (helyes felhasználó)

#### 3.2.2. TR-02 (TC-02)
- TP: TP-02
    1. lépés: Bejelentkezés oldalra navigálás
    2. lépés: Bejelentkezés telefonszámmal gombra nyomás, ez elnavigál a megfelelő oldalra
    3. lépés: Telefonszám megadása 06709879876
    4. lépés: Kód küldése gombra nyomás
    5. lépés: Pár perc múlva megkapjuk a belépési kódot
    6. lépés: Kód beírása után sikeres bejelentkezés, teszt1 feedre irányítás (helyes felhasználó)

### 3.3. Regisztráció beviteli mezők helyességének tesztriportja

#### 3.3.1. TR-01 (TC-01)
- TP: TP-03
    1. lépés: Bejelentkezéshez navigálás
    2. lépés: Regisztráció gombra nyomás
    3. lépés: Felhasználónév, email, jelszó (2x), telefonszám beírása
    4. lépés: Teszt1, teszt1@gmail.com, teszt1, teszt1, 07601231234
    5. lépés: Regisztráció gombra nyomás
    6. lépés: Sikeres regisztráció, felhasználó feedjére átirányítás

#### 3.3.2. TR-02 (TC-02)
- TP: TP-03
    1. lépés: Bejelentkezéshez navigálás
    2. lépés: Regisztráció gombra nyomás
    3. lépés: Felhasználónév, email, jelszó (2x), telefonszám beírása
    4. lépés: Teszt2, teszt2@gmail.com, teszt2, teszt2, 06709879876
    5. lépés: Regisztráció gombra nyomás
    6. lépés: Sikeres regisztráció, felhasználó feedjére átirányítás


### 3.4. Felhasználók keresése keresősávval  tesztriportja

#### 3.4.1. TR-01 (TC-01)
- TP: TP-04
  1. lépés: Bejelentkezés
  2. lépés: Keresősávra kattintás
  3. lépés: Keresni kívánt felhasználó beírása (vagy szövegrészlet beírása): tesz
  4. lépés: Enter megnyomása
  5. lépés: Keresni kívánt szöveget (vagy szövegrészletet) tartalmazó felhasználónevek kilistázása
  6. lépés: Eredmény: teszt1, teszt2, sikeres keresés beviteli mezővel
  

### 3.5. Segítség oldal sikeres kitöltésének tesztriportja

#### 3.5.1. TR-01 (TC-01)
- TP: TP-05
  1. lépés: Segítségoldalra navigálás
  2. lépés: Adatok kitöltése: Teszt Elek, teszt1@gmail.com, 06701231234
  3. lépés: Probléma leírása: Ez egy sima teszt
  4. lépés: Küldés gombra kattintás
  5. lépés: Email értesítés a megkapott visszajelzésről
  6. lépés: Megkapott email, sikeres segítség kérés 