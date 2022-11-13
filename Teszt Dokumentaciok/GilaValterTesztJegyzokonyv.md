# Tesztjegyzőkönyv-`Posztokhoz tartozó üzleti logika, Reklámokhoz tartozó üzleti logika`

Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `Posztokhoz tartozó ütleti logika.` funkcióihoz készült. Felelőse: `Gila Valter`
Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `Reklámokhoz tartozó üzleti logika.` funkcióihoz készült. Felelőse: `Gila Valter`

## 1. Teszteljárások (TP)

### 1.1. Posztokhoz tartozó üzleti logika tesztelése.
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02, TC-03, TC-04
- Leírás: Posztokhoz tartozó üzleti logika tesztelése.
    0. lépés: Hivjuk meg a poszt service-ből a megfelelő függvényt.
    1. lépés: Ellenőrizzük az eredményt az adatbázisban.

### 1.2. Reklámokhoz tartozó üzleti logika tesztelése.
- Azonosító: TP-02
- Tesztesetek: TC-01, TC-02, TC-03, TC-04
- Leírás: Reklámhoz tartozó üzleti logika tesztelése.
    0. lépés: Hivjuk meg az Advertisement service-ből a megfelelő függvényt.
    1. lépés: Ellenőrizzük az eredményt az adatbázisban.


## 2. Teszesetek (TC)

### 2.1. Posztokhoz tartozó üzleti logika tesztelése

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: create funkció tesztelése
- Bemenet: Poszt interface.
- Művelet: Létrehozás.
- Elvárt kimenet: Létrehoz egy új documentumot adatbázisban.

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: getAll funkció tesztelése
- Bemenet: nincs
- Művelet: Összes poszt lekérése.
- Elvárt kimenet: Megkapjuk az összes posztot az adatbázisból.

#### 2.1.3. TC-03
- TP: TP-01
- Leírás: editPoszt funkció tesztelése
- Bemenet: string.
- Művelet: Poszt megváltoztatása.
- Elvárt kimenet: Megváltozik a poszt az új posztra az adatbázisban.

#### 2.1.4. TC-04
- TP: TP-01
- Leírás: delete funkció tesztelése
- Bemenet: string.
- Művelet: Poszt törlése.
- Elvárt kimenet: Kitörli a megfelelő posztot az adatbázisból.

### 2.2. Reklámokhoz tartozó üzleti logika tesztelése.

#### 2.2.1. TC-01
- TP: TP-01
- Leírás: create funkció tesztelése
- Bemenet: Advertisement interface.
- Művelet: Létrehozás.
- Elvárt kimenet: Létrehoz egy új documentumot adatbázisban.

#### 2.2.2. TC-02
- TP: TP-01
- Leírás: getAdvertisement funkció tesztelése
- Bemenet: Advertisement interface.
- Művelet: Reklám lekérése.
- Elvárt kimenet: Megkapjuk a kért reklámot az adatbázisból.

#### 2.2.3. TC-03
- TP: TP-01
- Leírás: editAdvertisement funkció tesztelése
- Bemenet: string.
- Művelet: Reklám megváltoztatása.
- Elvárt kimenet: Megváltozik a Reklám az új reklámra az adatbázisban.

#### 2.2.4. TC-04
- TP: TP-01
- Leírás: delete funkció tesztelése
- Bemenet: string.
- Művelet: Reklám törlése.
- Elvárt kimenet: Kitörli a megfelelő reklámot az adatbázisból.


## 3. Tesztriportok (TR)

### 3.1. Posztokhoz tartozó üzleti logika tesztelése

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: create functiont meghivtam.
    2. lépés: poszt létrejött az adatbázisban.


#### 3.1.2. TR-02 (TC-02)
- TP: TP-01
    1. lépés: getPoszt functiont meghivtam.
    2. lépés: megkaptam a posztot az adatbázisból.

#### 3.1.3. TR-03 (TC-03)
- TP: TP-01
    1. lépés: editPoszt functiont meghivtam.
    2. lépés: a megfelelő poszt megváltozott az adatbázisban.

#### 3.1.4. TR-04 (TC-04)
- TP: TP-01
    1. lépés: delete functiont meghivtam.
    2. lépés: poszt törlődött az adatbázisból.

### 3.2. Reklámokhoz tartozó üzleti logika tesztelése

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
  1. lépés: create functiont meghivtam.
  2. lépés: reklám létrejött az adatbázisban.


#### 3.1.2. TR-02 (TC-02)
- TP: TP-01
  1. lépés: getAdvertisement functiont meghivtam.
  2. lépés: megkaptam a reklámot az adatbázisból.

#### 3.1.3. TR-03 (TC-03)
- TP: TP-01
  1. lépés: editAdvertisement functiont meghivtam.
  2. lépés: a megfelelő reklám megváltozott az adatbázisban.

#### 3.1.4. TR-04 (TC-04)
- TP: TP-01
  1. lépés: delete functiont meghivtam.
  2. lépés: reklám törlődött az adatbázisból.
