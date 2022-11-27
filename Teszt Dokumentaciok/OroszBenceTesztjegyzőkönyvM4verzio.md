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

### 1.3. 
- Azonosító: TP-03
- Tesztesetek: TC-01
- Leírás: 
    1. lépés: 
    2. lépés: 
    3. lépés: 

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

### 2.3. tesztesete

#### 2.3.1. TC-01
- TP: TP-03
- Leírás: 
- Bemenet: 
- Művelet: 
- Elvárt kimenet: 


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
    1. lépés: 
    2. lépés: 
    3. lépés: 
    4. lépés: 
    5. lépés: 

#### 3.2.2. TR-02 (TC-02)
- TP: TP-02
    1. lépés: 
    2. lépés: 
    3. lépés: 
    4. lépés: 
    5. lépés: 

### 3.2. tesztriportja

#### 3.2.1. TR-01 (TC-01)
- TP: TP-03
    1. lépés: 
    2. lépés: 
    3. lépés: 
    4. lépés: 
    5. lépés: 

    