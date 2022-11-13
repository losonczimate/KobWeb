# Tesztjegyzőkönyv-`Support űrlap, GUI-s megvalósítások by Oláh Balázs`

Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `9.3.33.  Support űrlap biztosítása` funkcióihoz készült. Felelőse: `Oláh Balázs`
Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `9.3.11.  Profilok kezeléshez kapcsolódó GUI megvalósítása` funkcióihoz készült. Felelőse: `Oláh Balázs`
Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `9.3.17.  Reklámok kezeléshez kapcsolódó GUI megvalósítás` funkcióihoz készült. Felelőse: `Oláh Balázs`
Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `9.3.20.  Médiatartalom kezeléshez kapcsolódó GUI megvalósítás` funkcióihoz készült. Felelőse: `Oláh Balázs`

## 1. Teszteljárások (TP)

### 1.1. Support űrlap reszponzivitás tesztelése 
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02
- Leírás: Reszponzivitás tesztelése a support oldalon.
    1. lépés: Nyissuk meg az oldalt.
    2. lépés: Állítsuk folyamatosan a nagyítást + és - irányba.

### 1.2. Support űrlap működése
- Azonosító: TP-02
- Tesztesetek: TC-03, TC-04
- Leírás: Support űrlap validitásának megnézése, és adatok továbbításának ellenőrzése.
    1. lépés: Nyissuk meg az oldalt.
    2. lépés: Írjunk be adatokat a mezőkbe.
    3. lépés: Nyomjuk meg a 'Tovább' gombot.
	4. lépés: Írjunk be valamilyen problémát.
	5. lépés: Próbáljuk meg beküldeni.

### 1.3. Profil oldal reszponzivitás tesztelése
- Azonosító: TP-03
- Tesztesetek: TC-01, TC-02
- Leírás: Reszponzivitás tesztelése a profil oldalon.
    1. lépés: Nyissuk meg az oldalt.
    2. lépés: Állítsuk folyamatosan a nagyítást + és - irányba.

### 1.4. Profil oldal adatok ellenőrzése
- Azonosító: TP-04
- Tesztesetek: TC-05, TC-06, TC-07
- Leírás: Követés és saját posztok ellenőrzése.
    1. lépés: Nyissuk meg az oldalt.
    2. lépés: Görgessünk lejjebb, nézzük meg a posztjainkat, hogy stimmelnek-e.
    3. lépés: Követés(ek) gombra kattintva ellenőrizzük a számot, hogy helyes-e.
	4. lépés: Ugyanez a követőknél.
	
### 1.5. Reklámok reszponzivitásának tesztelése
- Azonosító: TP-05
- Tesztesetek: TC-01, TC-02
- Leírás: Reszponzivitás tesztelése a reklámokon, a feed oldalon.
    1. lépés: Nyissuk meg az oldalt.
    2. lépés: Állítsuk folyamatosan a nagyítást + és - irányba.

### 1.6. Médiatartalmak(feed) reszponzivitásának tesztelése
- Azonosító: TP-06
- Tesztesetek: TC-01, TC-02
- Leírás: Reszponzivitás tesztelése a a feed oldalon.
    1. lépés: Nyissuk meg az oldalt.
    2. lépés: Állítsuk folyamatosan a nagyítást + és - irányba.
	
### 1.7. Médiatartalmak(feed) megjelenésének tesztelése
- Azonosító: TP-07
- Tesztesetek: TC-08
- Leírás: Reszponzivitás tesztelése a a feed oldalon.
    1. lépés: Nyissuk meg az oldalt.
    2. lépés: Poszt megjelenik, ha követjük az illetőt, egyenletes a megjelenés.
	
## 2. Teszesetek (TC)

### 2.1. Minden oldalon való tesztelés

#### 2.1.1. TC-01
- TP: TP-01, TP-03, TP-05, TP-06
- Leírás: Reszponzivitások tesztelése.
- Művelet: Állítsuk a nagyítást nagyító segítségével 150%-ra.
- Elvárt kimenet: A form reszponzívan, egyenletesen nagyobbodik.

#### 2.1.2. TC-02
- TP: TP-01, TP-03, TP-05, TP-06
- Leírás: Reszponzivitások tesztelése.
- Művelet: Állítsuk a nagyítást nagyító segítségével 50%-ra.
- Elvárt kimenet: A form reszponzívan, egyenletesen kisebbedik.

### 2.2. Support form tesztelése

#### 2.2.1. TC-03
- TP: TP-02
- Leírás: Support form mezőinek és működésének tesztelése.
- Bemenet: Minden mezőt hagyjunk üresen.
- Művelet: Tovább gombra kattintás.
- Elvárt kimenet: Hibát kell dobjon a form.

#### 2.2.2. TC-04
- TP: TP-02
- Leírás: Support form mezőinek és működésének tesztelése.
- Bemenet: Írjunk be adatokat a mezőkbe. (Létező adatokat!)
- Művelet: Tovább gombra kattintás.
- Elvárt kimenet: Tovább kell engedjen minket a form.

### 2.3. Profil GUI tesztelése

#### 2.3.1. TC-05
- TP: TP-04
- Leírás: Posztok ellenőrzése.
- Művelet: Képeink ellenőrzése az oldal alján.
- Elvárt kimenet: Minden képünk (vagy üres oldal), amit feltöltöttünk.

#### 2.3.2. TC-06
- TP: TP-04
- Leírás: Követések ellenőrzése.
- Bemenet: A követés számja.
- Művelet: Nézzük meg a számot, majd kattintsunk a Követés(ek) gombra.
- Elvárt kimenet: A személyek száma, ami a számmal meg kell egyezzen.

#### 2.3.3. TC-07
- TP: TP-04
- Leírás: Követők ellenőrzése.
- Művelet: Nézzük meg a számot, majd kattintsunk a Követők gombra.
- Elvárt kimenet: A személyek száma, ami a számmal meg kell egyezzen.

### 2.4. Médiatartalom GUI tesztelése

#### 2.4.1. TC-08
- TP: TP-07
- Leírás: Médiatartalmak megjelenésének tesztelése, képek/videók látszódnak-e.
- Művelet: Követés ellenőrzése, majd feedre navigálás és képek ellenőrzése.
- Elvárt kimenet: Ha minden rendben megy, látnunk kell a képeket/videókat.

## 3. Tesztriportok (TR)

### 3.2. Reszponzivitás tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01, TP-03, TP-05, TP-06
    1. lépés: Elnavigáltam az oldalakra.
    2. lépés: Egyenletesen, arányosan nő az oldal mérete, elemek a helyükön maradnak helyesen.

#### 3.1.2. TR-02 (TC-02)
- TP: TP-01, TP-03, TP-05, TP-06
    1. lépés: Elnavigáltam az oldalakra.
    2. lépés: Egyenletesen, arányosan csökken az oldal mérete, elemek a helyükön maradnak helyesen.

### 3.1. Reszponzivitás tesztriportjai

#### 3.2.1. TR-03 (TC-03)
- TP: TP-02
    1. lépés: Elnavigáltam az oldalra.
    2. lépés: Nem írtam bele semmit a mezőkbe.
    3. lépés: Tovább gomb hatására kivörösödtek az üres inputok helyesen, nem enged tovább.

#### 3.2.2. TR-04 (TC-04)
- TP: TP-02
    1. lépés: Elnavigáltam az oldalra.
    2. lépés: Valid adatokat írtam a mezőkbe.
    3. lépés: Tovább gomb hatására elnavigált a következő oldalra helyesen.
	
### 3.3. Profil GUI tesztriportjai

#### 3.3.1. TR-05 (TC-05)
- TP: TP-04
    1. lépés: Elnavigáltam az oldalra.
    2. lépés: A feltöltött képek megjelentek az oldalamon helyesen.

#### 3.3.2. TR-06 (TC-06)
- TP: TP-04
    1. lépés: Elnavigáltam az oldalra.
    2. lépés: Követések száma: 2, kattintás a Követések gombra.
    3. lépés: 2 személyt adott ki az oldal, helyes a működés.
    
#### 3.3.3. TR-07 (TC-07)
- TP: TP-04
    1. lépés: Elnavigáltam az oldalra.
    2. lépés: Követők száma: 7, kattintás a Követések gombra.
    3. lépés: 7 személyt adott ki az oldal, helyes a működés.

### 3.4. Médiatartalom GUI tesztriportjai

#### 3.4.1. TR-08 (TC-08)
- TP: TP-04
    1. lépés: Elnavigáltam az oldalra.
    2. lépés: Követés ellenőrzése, követem az illetőt.
	3. lépés: Feed oldalra navigáltam, látom a posztját és a képét, helyes működés.