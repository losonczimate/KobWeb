# Tesztjegyzőkönyv-`Bondár Kristóf - Adatbázis adatok, fejlesztése, e-mail kiértékelés, logó.`

Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `9.3.2.  Admin munkamenethez szükséges adatok létrehozása az adatbázisban` funkcióihoz készült. Felelőse: `Bondár Kristóf`
Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `9.3.7.  Adatbázis fejlesztése` funkcióihoz készült. Felelőse: `Bondár Kristóf`
Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `9.3.15. Hirfolyam kezeléséhez szükséges adatok létrehozása az adatbázisban` funkcióihoz készült. Felelőse: `Bondár Kristóf`
Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `9.3.29. Email-es kiértesítés új regisztráció esetén` funkcióihoz készült. Felelőse: `Bondár Kristóf`
Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `9.3.37  E-mail sablon készítése, és felhasználók korlátozása backendben` funkcióihoz készült. Felelőse: `Bondár Kristóf`

## 1. Teszteljárások (TP)

### 1.1. Admin munkamenet ellenőrzése
- Azonosító: TP-01
- Tesztesetek: TC-01
- Leírás: Admin jogosultság ellenőrzése.
    1. lépés: Nyissuk meg az feedet.
    2. lépés: Ha egy poszt/komment mellett megjelenik egy X, akkor abban az esetben admin az illető.

### 1.2. Hírfolyam adatainak ellenőrzése
- Azonosító: TP-02
- Tesztesetek: TC-02, TC-03
- Leírás: Hírfolyam bekötése után ellenőrzés, hogy az adatok megjelennek-e az adatbázisban.
    1. lépés: Nyissuk meg az oldalt.
    2. lépés: Hozzunk létre egy új posztot képpel/kommenttel.
    3. lépés: Nyomjuk meg a 'Közzétesz' gombot.
	4. lépés: Nézzük meg Firebase-en belül, hogy megjelenik-e a collectionben a poszt.

### 1.3. Email-es kiértesítés új regisztráció esetén
- Azonosító: TP-03
- Tesztesetek: TC-04
- Leírás: Új regisztrálás után a lekorlátozott személy a profilra kerül, és ott kell megnyomjon egy gombot a hitelesítéshez.
    1. lépés: Regisztráljunk egy új fiókkal az oldalon.
    2. lépés: Le lesz korlátozva, nyomjuk meg a szürke gombot.
	3. lépés: Menjünk az e-mail fiókunkba (ha létezik, ha nem, akkor az baj.), és nyissuk meg, azon belül is a linket.
	4. lépés: Zárjuk be a felugró ablakot, és nézzük meg, hogy enged-e minket bármit csinálni.

### 1.4. E-mail sablon készítése, felhasználók korlátozásának ellenőrzése
- Azonosító: TP-04
- Tesztesetek: TC-05, TC-06
- Leírás: Megerősítés előtt/utáni munkamenet ellenőrzése, sablon ellenőrzése.
    1. lépés: Nyissuk meg az oldalt.
    2. lépés: Lépjünk be a felhasználónkkal amivel regisztráltunk. Elsőnek megerősítettlen e-mail címet ellenőrzünk.
	3. lépés: Próbáljunk elnavigálni URL alapján a /feed vagy /post oldalakra.
	4. lépés: Ha ez megvan, érvényesítsük az e-mail címünket, és nézzük meg, hogy utána sikerül-e.
	
## 2. Teszesetek (TC)

### 2.1. Admin munkamenet ellenőrzése

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Admin jogosultság ellenőrzése.
- Bemenet: Fiókunk adatai.
- Művelet: Feed oldalra navigálás belépés után.
- Elvárt kimenet: X gomb megjelenése a posztok/kommentek mellett.

### 2.2. Hírfolyam adatainak ellenőrzése

#### 2.2.1. TC-02
- TP: TP-02
- Leírás: Hírfolyam adatainak tesztelése.
- Bemenet: Fiókunk adatai, kép/videó és komment.
- Művelet: Feed oldalra navigálás belépés után, kép betallózása és komment megírása.
- Elvárt kimenet: Gomb megnyomása után frissítés (F5), és az új posztunk megjelenik a feed oldalon.

#### 2.2.2. TC-03
- TP: TP-02
- Leírás: Hírfolyam adatainak tesztelése.
- Bemenet: Fiókunk adatai.
- Művelet: Feed oldalra navigálás belépés után, majd közzétesz gomb megnyomása.
- Elvárt kimenet: Hibát kell dobjon a form.

### 2.3. Email-es kiértesítés ellenőrzése

#### 2.3.1. TC-04
- TP: TP-03
- Leírás: E-mailes kiértesítés ellenőrzése.
- Bemenet: Regisztrációs adataink.
- Művelet: Regisztálás után szürke gombra kattintás. Ezek után e-mail fiókban a levélben lévő link megnyomása.
- Elvárt kimenet: Sikeres regisztráció, ill. sikeres üzenetküldés. Link megnyomása után sikeres hitelesítés.

### 2.4. E-mail sablon, felh. korlátozásának tesztelése

#### 2.4.1. TC-05
- TP: TP-04
- Leírás: Korlátozás ellenőrzése.
- Művelet: Belépés hitelesítés nélkül.
- Elvárt kimenet: Két ikon hiányoznia kell bal oldalról, ill. URL-en belül visszadob minket a profilra.

#### 2.4.2. TC-06
- TP: TP-04
- Leírás: Sablon ellenőrzése, korlátozás ellenőrzése.
- Művelet: Belépés hitelesítés után.
- Elvárt kimenet: Két ikon hozzáadódik a bal sávhoz, ill. frissített sablont kapnuk levélben. Engedélyezett a posztolás.

## 3. Tesztriportok (TR)

### 3.1. Admin munkamenet tesztriport

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: Elnavigáltam az oldalra.
    2. lépés: Nem jelent meg a X, hibás a teszt. M4-ben javítandó.

### 3.1. Hírfolyam ellenőrzés tesztriport

#### 3.2.1. TR-02 (TC-02)
- TP: TP-02
    1. lépés: Elnavigáltam az oldalra.
    2. lépés: Valid adatokat írtam a mezőkbe.
    3. lépés: Közzététel gomb továbbenged, frissítés után megjelenik a poszt a képpel kommentel. Helyes működés.

#### 3.2.2. TR-03 (TC-03)
- TP: TP-02
	1. lépés: Elnavigáltam az oldalra.
    2. lépés: Nem írtam bele semmit a mezőkbe.
    3. lépés: Közzététel gomb hatására kivörösödtek az üres inputok helyesen, nem enged tovább. Helyes működés.
	
### 3.3. Email-es kiértesítés tesztriport

#### 3.3.1. TR-04 (TC-04)
- TP: TP-03
    1. lépés: Elnavigáltam az oldalra. Regisztráltam.
    2. lépés: Szürke gomb megnyomása, értesítés megkapása, és e-mail fiókban üzenet megjövetele.
	3. lépés: Linkre kattintás, és visszanavigálás az oldalra.
	4. lépés: Enged minket posztolni és a feed oldalra is, helyes működés.

### 3.4. E-mail sablon és korlátozás tesztriport

#### 3.4.1. TR-05 (TC-05)
- TP: TP-04
    1. lépés: Elnavigáltam az oldalra.
	2. lépés: Megerősítés nélkül elnavigálunk a két említett oldalra.
	3. lépés: Visszadobott a két oldalról a profilra. Helyes működés.
	
#### 3.4.2. TR-06 (TC-06)
- TP: TP-04
    1. lépés: Elnavigáltam az oldalra.
    2. lépés: Hitelesítést végrehajtjuk, és megnézzük a működést.
	3. lépés: Gombok bal oldalt megjelentek, navigálás engedélyezett. Helyes működés.