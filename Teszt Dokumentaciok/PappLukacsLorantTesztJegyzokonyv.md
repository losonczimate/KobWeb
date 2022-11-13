# Tesztjegyzőkönyv - `Munkamenetek és értesítések működésének ellenőrzése`

Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `9.3.4.  Felhasználói munkamenethez kapcsolódó GUI megvalósítása` funkcióihoz készült. Felelőse: `Papp Lukács Lóránt` 
Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `9.3.5.  Admin munkamenethez kapcsolódó GUI megvalósítása` funkcióihoz készült. Felelőse: `Papp Lukács Lóránt` 
Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `9.3.6.  Vendég munkamenethez kapcsolódó GUI megvalósítása` funkcióihoz készült. Felelőse: `Papp Lukács Lóránt` 
Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `9.3.27.  Értesitések kezeléshez kapcsolódó GUI megvalósítása` funkcióihoz készült. Felelőse: `Papp Lukács Lóránt` 


## 1. Teszteljárások (TP)

### 1.1. Posztolási funkció tesztelése.
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02
- Leírás: A felhasználói munkamenet részletes tesztelése, posztolás.
    0. lépés: Nyissuk meg az alkalmazást.
    1. lépés: Jelentkezzünk be.
    2. lépés: Nyissuk meg a feed oldalt.
    3. lépés: Írjunk ki egy posztot.
    4. lépés: Frissítés után meg kell jelennie az imént feltöltött posztnak a feedben illetve a saját oldalunkon.


### 1.2. Kedvelési funckió tesztelése.
- Azonosító: TP-02
- Tesztesetek: TC-01, TC-02
- Leírás: Kedvelési funckió tesztelése.
    0. lépés: Nyissuk meg az alkalmazást.
    1. lépés: Jelentkezzünk be.
    2. lépés: Nyissuk meg a feed oldalt.
    3. lépés: Kedveljünk egy már meglévő posztot.
    4. lépés: A kedvelések számának egyel növekednie kell.

### 1.3. Értesitések funckió tesztelése.
- Azonosító: TP-03
- Tesztesetek: TC-01
- Leírás: Kedvelési funckió tesztelése.
    0. lépés: Nyissuk meg az alkalmazást.
    1. lépés: Jelentkezzünk be.
    2. lépés: Nyissuk meg a feed oldalt.
    3. lépés: Kattintsunk az értesítési ikonra a felső menüben.
    4. lépés: Meg kell jelennie az értesítéseknek.

### 1.4. Követés funkció tesztelése.
- Azonosító: TP-04
- Tesztesetek: TC-01
- Leírás: Kedvelési funckió tesztelése.
    0. lépés: Nyissuk meg az alkalmazást.
    1. lépés: Jelentkezzünk be.
    2. lépés: A kereső oldalt használva keressünk meg egy felhasználót.
    3. lépés: Kattintsunk a követés gombra a felhasználó oldalán.
    4. lépés: A feedben meg kell jelennie a követett felhasználó tartalmának.

## 2. Teszesetek (TC)

### 2.1. Posztolási funkció tesztelése.

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Közzétesz tesztelése 
- Bemenet: Poszt kártya szöveges és képes input.
- Művelet: Közzétesz gomb megnyomása.
- Elvárt kimenet: Megjelenik a posztunk a feedben.

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: Mégse tesztelése 
- Bemenet: Poszt kártya szöveges és képes input
- Művelet: Mégse gomb megnyomása.
- Elvárt kimenet: Alaphelyzetbe visszaáll a poszt kártya.

### 2.2. Kedvelési funckió tesztelése.

#### 2.2.1. TC-01
- TP: TP-02
- Leírás: Like funkció tesztelése
- Bemenet: Like gomb egyszeri megnyomása
- Művelet: Poszt kedvelése.
- Elvárt kimenet: Megnövekszik egyel a likeok száma.

#### 2.2.2. TC-02
- TP: TP-02
- Leírás: Dislike funkció tesztelése
- Bemenet: Like gomb kétszeri megnyomása
- Művelet: Poszt kétszeri kedvelése.
- Elvárt kimenet: A likeok száma nem változik.

### 2.3. Értesitések funckió tesztelése.

#### 2.3.1. TC-01
- TP: TP-03
- Leírás: Az értesítések ikon kattintásának tesztelése
- Bemenet: Értesítés ikon kattintása.
- Művelet: Értesítés ikon kattintása.
- Elvárt kimenet: Megnyílik a legördülő értesítések menü.

### 2.4. Követési funckió tesztelése.

#### 2.4.1. TC-01
- TP: TP-04
- Leírás: A követés tesztelése
- Bemenet: Más felhasználó követése.
- Művelet: Követés gomb egyszeri megnyomása.
- Elvárt kimenet: Saját profilon a követések száma egyel növekszik, a követett profilon a követők száma egyel növekszik.

## 3. Tesztriportok (TR)

### 3.1. Posztolási funkció tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    0. lépés: Nyissuk meg az alkalmazást.
    1. lépés: Jelentkezzünk be.
    2. lépés: Nyissuk meg a feed oldalt.
    3. lépés: Írjunk ki egy posztot.
    4. lépés: Frissítés után meg kell jelennie az imént feltöltött posztnak a feedben illetve a saját oldalunkon.
    

#### 3.1.2. TR-02 (TC-02)
- TP: TP-01
    0. lépés: Nyissuk meg az alkalmazást.
    1. lépés: Jelentkezzünk be.
    2. lépés: Nyissuk meg a feed oldalt.
    3. lépés: Írjunk egy posztot, majd rákattintunk a mégse gombra.
    4. lépés: Visszaállt alaphelyzetbe a poszt kártya.

### 3.2. Kedvelés funkció tesztriportjai

#### 3.2.1. TR-01 (TC-01)
- TP: TP-02
    0. lépés: Nyissuk meg az alkalmazást.
    1. lépés: Jelentkezzünk be.
    2. lépés: Nyissuk meg a feed oldalt.
    3. lépés: Nyomjuk meg a kedvelés gombot egyszer.
    4. lépés: Növekszik a kedvelések száma egyel.

#### 3.2.2. TR-02 (TC-02)
- TP: TP-02
    0. lépés: Nyissuk meg az alkalmazást.
    1. lépés: Jelentkezzünk be.
    2. lépés: Nyissuk meg a feed oldalt.
    3. lépés: Nyomjuk meg a kedvelés gombot kétszer.
    4. lépés: Nem növekszik a kedvelések száma.

### 3.3. Értesitések funkció tesztriportjai

#### 3.3.1. TR-01 (TC-01)
- TP: TP-03
    0. lépés: Nyissuk meg az alkalmazást.
    1. lépés: Jelentkezzünk be.
    2. lépés: Nyissuk meg a feed oldalt.
    3. lépés: Kattintsunk az értesítési ikonra a felső menüben.
    4. lépés: Megjelenik az értesítések menü.

### 3.4. Követési funkció tesztriportjai

#### 3.4.1. TR-01 (TC-01)
- TP: TP-04
    0. lépés: Nyissuk meg az alkalmazást.
    1. lépés: Jelentkezzünk be.
    2. lépés: A kereső oldalt használva keressünk meg egy felhasználót.
    3. lépés: Kattintsunk a követés gombra a felhasználó oldalán.
    4. lépés: Saját profilon a követések száma egyel növekszik, a követett profilon a követők száma egyel növekszik.