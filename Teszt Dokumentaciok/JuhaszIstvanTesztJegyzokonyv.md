# Tesztjegyzőkönyv-Poszt kedvelés backend, Értesitések CRUD,

Az alábbi tesztdokumentum a 2022_IB153I-9_C projekthez tartozó 9.3.12. Kommentelési lehetőség backend létrehozása funkcióihoz készült. Felelőse: Juhász István 
Az alábbi tesztdokumentum a 2022_IB153I-9_C projekthez tartozó 9.3.21. Kedvelési lehetőség backend létrehozása funkcióihoz készült. Felelőse: Juhász István 
Az alábbi tesztdokumentum a 2022_IB153I-9_C projekthez tartozó 9.3.26. Értesitések kezeléséhez tartozó üzleti logika funkcióihoz készült. Felelőse: Juhász István 

## 1. Teszteljárások (TP)

### 1.1. Kommentelés funkció tesztelése.
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02, TC-03, TC-04
- Leírás: Kommentelés funkció tesztelése.
    0. lépés: Hivjuk meg a comment service-ből a megfelelő függvényt.
    1. lépés: Ellenőrizzük az eredményt az adatbázisban.

### 1.2. Kedvelési funckió tesztelése.
- Azonosító: TP-02
- Tesztesetek: TC-01, TC-02
- Leírás: Kedvelési funckió tesztelése.
    0. lépés: Hivjuk meg a like service-ből a megfelelő függvényt.
    1. lépés: Ellenőrizzük az eredményt az adatbázisban.

### 1.3. Értesitések funckió tesztelése.
- Azonosító: TP-03
- Tesztesetek: TC-01, TC-02, TC-03,
- Leírás: Kedvelési funckió tesztelése.
    0. lépés: Hivjuk meg a like notifications-ből a megfelelő függvényt.
    1. lépés: Ellenőrizzük az eredményt az adatbázisban.

## 2. Teszesetek (TC)

### 2.1. Kommentelés funkció tesztelése.

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: create funkció tesztelése 
- Bemenet: Comment interface.
- Művelet: Létrehozás.
- Elvárt kimenet: Létrehoz egy új documentumot adatbázisban.

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: getComments funkció tesztelése 
- Bemenet: postId: String
- Művelet: Összes komment az adott poszthoz lekérés.
- Elvárt kimenet: Megkapjuk az összes kommentet a adatbázis-ból.

#### 2.1.3. TC-03
- TP: TP-01
- Leírás: editComment funkció tesztelése 
- Bemenet: Comment interface.
- Művelet: Komment megváltoztatása. 
- Elvárt kimenet: Megváltozik a megfelelő komment az új kommentre az adatbázisban.

#### 2.1.4. TC-04
- TP: TP-01
- Leírás: delete funkció tesztelése 
- Bemenet: Comment interface.
- Művelet: Komment törlése. 
- Elvárt kimenet: Kitörli a megfelelő kommentet az adatbázisból.

### 2.2. Kedvelési funckió tesztelése.

#### 2.2.1. TC-01
- TP: TP-02
- Leírás: like funkció tesztelése
- Bemenet: postId: string
- Művelet: Poszt kedvelése. 
- Elvárt kimenet: Felkerül a kedvelés az adott posztra az adatbázisban.
-                

#### 2.2.2. TC-02
- TP: TP-02
- Leírás: dislike funkció tesztelése
- Bemenet: postId: string 
- Művelet: Poszt NEM kedvelése.
- Elvárt kimenet: Lekerül a kedvelés az adott posztról az adatbázisban.

### 2.3. Értesitések funckió tesztelése.

#### 2.3.1. TC-01
- TP: TP-03
- Leírás: create funkció tesztelése
- Bemenet: Notification interface.
- Művelet: Értesités létrehozása.
- Elvárt kimenet: Létrejön egy értesités dokumentum az adatbázisban.
-                 A kedvelt felhasználónak létrejön egy új értesités a főoldalon.

#### 2.3.2. TC-02
- TP: TP-03
- Leírás: getAll funkció tesztelése
- Bemenet: userId: string
- Művelet: Összes értesités lekérése a bejelentkezett felhasználónak.
- Elvárt kimenet: Megkapjuk az összes értesitést a bejelentkezett felhasználónak backend oldalon.
-                 A bejelentkezett felhasználónak megjelennek az értesitések a frontend oldalon.
#### 2.3.3. TC-03
- TP: TP-03
- Leírás: delete funkció tesztelése
- Bemenet: Notification interface
- Művelet: Értesités törlése.
- Elvárt kimenet: A kitörölt értesités kitörlődik az adatbázisból.
-                 A bejelentkezett felhasználónak kitörlődik a törölt éretsités a frontend oldalon.
## 3. Tesztriportok (TR)

### 3.1. Kommentelés funkció tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: create functiont meghivtam.
    2. lépés: comment létrejött az adatbázisban.
    

#### 3.1.2. TR-02 (TC-02)
- TP: TP-01
    1. lépés: getComments functiont meghivtam.
    2. lépés: megkaptam az összes commentet az adatbázisból. 

#### 3.1.3. TR-03 (TC-03)
- TP: TP-01
    1. lépés: editComment functiont meghivtam.
    2. lépés: a megfelelő comment megváltozott az adatbázisban.

#### 3.1.4. TR-04 (TC-04)
- TP: TP-01
    1. lépés: delete functiont meghivtam.
    2. lépés: comment törlődött az adatbázisból.    

### 3.2. Kedvelés funkció tesztriportjai

#### 3.2.1. TR-01 (TC-01)
- TP: TP-02
    1. lépés: like functiont meghivtam.
    2. lépés: a megfelelő poszt kedvelve lett a bejelentkezett felhasználó által.

#### 3.2.2. TR-02 (TC-02)
- TP: TP-02
    1. lépés: dislike functiont meghivtam.
    2. lépés: a megfelelő posztról lejött a kedvelés.

### 3.3. Értesitések funkció tesztriportjai

#### 3.3.1. TR-01 (TC-01)
- TP: TP-03
    1. lépés: create functiont meghivtam.
    2. lépés: létrejött a megfelelő értesités az adatbázisban.
    3. lépés: létrejött a megfelelő értesités a frontend oldalon.

#### 3.3.2. TR-02 (TC-02)
- TP: TP-03
    1. lépés: getAll functiont meghivtam.
    2. lépés: megkaptam az összes értesités a bejelentkezett felhasználónak.
    3. lépés: létrejött az összes értesités a bejelentkezett felhasználónak frontend oldalon.


#### 3.3.3. TR-03 (TC-03)
- TP: TP-03
    1. lépés: delete functiont meghivtam.
    2. lépés: a megfelelő értesités kitörlődött az adatbázisból.
    3. lépés: a megfelelő értesités kitörlődött a frontend oldalról.