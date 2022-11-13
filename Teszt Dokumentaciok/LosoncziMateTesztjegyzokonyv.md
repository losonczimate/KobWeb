# Tesztjegyzőkönyv:- `Regisztrációs grafikus interfész elkészítése, Bejelentkezés grafikus interfész elkészítése,Jelszóváltoztatás oldal grafikus interfésze, Hírfolyamhoz tartozó grafikus interfész`

Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `9.3.9. Felhasználók kereséséhez tartozó GUI létrehozása` funkcióihoz készült. Felelőse: `Losonczi Máté`
Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `9.3.21. Kedvelések megjelenítése` funkcióihoz készült. Felelőse: `Losonczi Máté`
Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `9.3.26. Értesitések kezeléséhez tartozó üzleti logika` funkcióihoz készült. Felelőse: `Losonczi Máté` 

## 1. Teszteljárások (TP)

### 1.1. Kedvelés megjelenítéshez tartozó GUI
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02, TC-03
- Leírás: Kedvelés megjelenítéshez tartozó GUI tesztelése
  0. A vizuális elemek méretének, helyzetének, magasságának, szélességének tesztelése
  1. A kedvelés funkció helyes megjelenítése
  2. Reszponzív megjelenés ellenőrzése

### 1.2 Regisztrációhoz tartozó GUI
- Azonosító: TP-02
- Tesztesetek: TC-01, TC-02, TC-03
- Leírás: Regisztrációhoz tartozó GUI tesztelése
    0. A vizuális elemek méretének, helyzetének, magasságának, szélességének tesztelése
    1. Az egyes szakaszok címének és helyességének ellenőrzése, kötelező mezők ellenőrzése, ha nincs beírva.
    2. Reszponzív megjelenés ellenőrzése

### 1.3 Bejelentkezéshez tartozó GUI
- Azonosító: TP-03
- Tesztesetek: TC-01, TC-02, TC-03
- Leírás: Bejelentkezéshez tartozó GUI tesztelése
    0. A vizuális elemek méretének, helyzetének, magasságának, szélességének tesztelése
    1. Az egyes szakaszok címének és helyességének ellenőrzése
    2. Reszponzív megjelenés ellenőrzése

### 1.4 Jelszómódosításhoz tartozó GUI
- Azonosító: TP-04
- Tesztesetek: TC-01, TC-02, TC-03
- Leírás: Jelszómódosításhoz tartozó GUI tesztelése
    0.  A vizuális elemek méretének, helyzetének, magasságának, szélességének tesztelése
    1. Az egyes szakaszok címének és helyességének ellenőrzése
    2. Reszponzív megjelenés ellenőrzése



## 2. Tesztesetek (TC)

### 2.1 Kedvelés megjelenítéshez tartozó GUI tesztelése

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: A vizuális elemek méretének, helyzetének, magasságának, szélességének tesztelése
- Művelet: A beírt kód ellenőrzése lokálisan hosztolt szerveren
- Elvárt kimenet: A kedvelések száma a létrehozott poszt alatt jelenik meg. Ha rákattintunk a fekete szívre, akkor a szív megváltozik pirosra, majd a mellette található szám 1-el nő.

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: A kedvelés funkció helyes megjelenítése
- Művelet: A beírt kód ellenőrzése lokálisan hosztolt szerveren
- Elvárt kimenet: Ha rákattintunk a fekete szívre, akkor a szív megváltozik pirosra, majd a mellette található szám 1-el nő.

#### 2.1.2. TC-03
- TP: TP-01
- Leírás: Reszponzív megjelenés ellenőrzése
- Művelet: A beírt kód ellenőrzése lokálisan hosztolt szerveren, a böngésző által használható reszponzív funkció segítségével
- Elvárt kimenet: Ha változtatjuk a kijelző méretét, akkor is helyesen jelenik meg a lájk gomb és a mellette elhelyezkedő szám.

### 2.2 Regisztrációhoz tartozó GUI tesztelése

#### 2.2.1 TC-01
- TP: TP-02
- Leírás: A vizuális elemek méretének, helyzetének, magasságának, szélességének tesztelése
- Művelet: A beírt kód ellenőrzése lokálisan hosztolt szerveren
- Elvárt kimenet: A megjelenítendő elemek a beírtaknak megfelelően jelennek meg, a középre helyezett elemek középen vannak, az egymás alá helyezett elemek egymás alatt jelennek meg. A gombok mérete megfelelő, színük a beírtaknak megfelelő.

#### 2.2.2. TC-02
- TP: TP-02
- Leírás: Mezők ellenőrzése.
- Művelet: A beírt kód ellenőrzése lokálisan hosztolt szerveren
- Elvárt kimenet: Az jelszó mező kicsillagozza a beírt szöveget, az email mező hibát dob nem megfelelő formátum esetén. Ha nincs beírva szöveg, akkor pirosan jelenik meg a mező és nem engedi regisztrálni a felhasználót.

#### 2.2.3. TC-03
- TP: TP-02
- Leírás: Reszponzivitás ellenőrzése
- Művelet: A beírt kód ellenőrzése lokálisan hosztolt szerveren, Chrome böngészőben.
- Elvárt kimenet: A megjelenítendő elemek különböző méretű kijelzőkön is megfelelően működnek, nem csúsznak el, nem ugranak szét.


### 2.3 Bejelentkezéshez tartozó GUI tesztelése

#### 2.3.1 TC-01
- TP: TP-03
- Leírás: A vizuális elemek méretének, helyzetének, magasságának, szélességének tesztelése
- Művelet: A beírt kód ellenőrzése lokálisan hosztolt szerveren
- Elvárt kimenet: A megjelenítendő elemek a beírtaknak megfelelően jelennek meg, a középre helyezett elemek középen vannak, az egymás alá helyezett elemek egymás alatt jelennek meg. A gombok mérete megfelelő, színük a beírtaknak megfelelő.

#### 2.3.2. TC-02
- TP: TP-03
- Leírás: Mezők ellenőrzése.
- Művelet: A beírt kód ellenőrzése lokálisan hosztolt szerveren
- Elvárt kimenet: Az jelszó mező kicsillagozza a beírt szöveget, az email mező hibát dob nem megfelelő formátum esetén. Ha nincs beírva szöveg, akkor pirosan jelenik meg a mező és nem engedi belépni a felhasználót.

#### 2.3.3. TC-03
- TP: TP-03
- Leírás: Reszponzivitás ellenőrzése
- Művelet: A beírt kód ellenőrzése lokálisan hosztolt szerveren, Chrome böngészőben.
- Elvárt kimenet: A megjelenítendő elemek különböző méretű kijelzőkön is megfelelően működnek, nem csúsznak el, nem ugranak szét.

### 2.4 Jelszómódosításhoz tartozó GUI tesztelése

#### 2.4.1 TC-01
- TP: TP-04
- Leírás: A vizuális elemek méretének, helyzetének, magasságának, szélességének tesztelése
- Művelet: A beírt kód ellenőrzése lokálisan hosztolt szerveren
- Elvárt kimenet: A megjelenítendő elemek a beírtaknak megfelelően jelennek meg, a középre helyezett elemek középen vannak, az egymás alá helyezett elemek egymás alatt jelennek meg. A gombok mérete megfelelő, színük a beírtaknak megfelelő.

#### 2.4.2. TC-02
- TP: TP-04
- Leírás: Mezők ellenőrzése.
- Művelet: A beírt kód ellenőrzése lokálisan hosztolt szerveren
- Elvárt kimenet: Az jelszó mező kicsillagozza a beírt szöveget, az email mező hibát dob nem megfelelő formátum esetén. Ha nincs beírva szöveg, akkor pirosan jelenik meg a mező és nem engedi belépni a felhasználót.

#### 2.4.3. TC-03
- TP: TP-04
- Leírás: Reszponzivitás ellenőrzése
- Művelet: A beírt kód ellenőrzése lokálisan hosztolt szerveren, Chrome böngészőben.
- Elvárt kimenet: A megjelenítendő elemek különböző méretű kijelzőkön is megfelelően működnek, nem csúsznak el, nem ugranak szét.


## 3. Tesztriportok

#### 3.1.1. TC-01
- TP: TP-01
- Az oldalt megnyitottam
- Az elvárt elemek megfelelő mérettel és helyzetben jelennek meg.(HELYES)

#### 3.1.2. TC-02
- TP: TP-01
- Rákattintottam a fekete szívre
- A szív színe elváltozott pirosra, mérete nem változott, a mellette elhelyezkedő számláló egyel nő. Újbóli megnyomás esetén feketére vált vissza, és a szám 1-el csökken. (HELYES)

#### 3.1.2. TC-03
- TP: TP-01
- Az oldalt megnyitva 'f12' gomb megnyomása után a reszponzív gombot használva teszteltem különbőző méretű kijelzőkön.
- A megfelelő méretet megtartva rendesen jelenik meg az ikon. (HELYES)

### 3.2 Regisztrációhoz tartozó GUI tesztelése

#### 3.2.1 TC-01
- TP: TP-02
- Az oldalt megnyitottam.
- A megjelenítendő elemek megfelelően jelennek meg. (HELYES)

#### 3.2.2. TC-02
- TP: TP-02
- Beleírtam az adott mezőbe.
- A szöveg a mező sajátosságának megfelelően jelenik meg(jelszó), ha nem írok be semmit, akkor a kötelező mező miatt pirosra vált.(HELYES)

#### 3.2.3. TC-03
- TP: TP-02
- Az oldalt megnyitva 'f12' gomb megnyomása után a reszponzív gombot használva teszteltem különbőző méretű kijelzőkön.
- A megfelelő méretet megtartva rendesen jelennek meg a mezők és a gombok. (HELYES)


### 3.3 Bejelentkezéshez tartozó GUI tesztelése

#### 3.3.1 TC-01
- TP: TP-03
- Az oldalt megnyitottam.
- A megjelenítendő elemek megfelelően jelennek meg. (HELYES)
- 
#### 3.3.2. TC-02
- TP: TP-03
- Beleírtam az adott mezőbe.
- A szöveg a mező sajátosságának megfelelően jelenik meg(jelszó), ha nem írok be semmit, akkor a kötelező mező miatt pirosra vált. Az elküldés üres/hibás mező esetén nem működik.(HELYES)

#### 3.3.3. TC-03
- TP: TP-03
- Az oldalt megnyitva 'f12' gomb megnyomása után a reszponzív gombot használva teszteltem különbőző méretű kijelzőkön.
- A megfelelő méretet megtartva rendesen jelennek meg a gombok és mezők. (HELYES)

### 3.4 Jelszómódosításhoz tartozó GUI tesztelése

#### 3.4.1 TC-01
- TP: TP-04
- Az oldalt megnyitottam.
- A megjelenítendő elemek megfelelően jelennek meg. (HELYES)
- 
#### 3.4.2. TC-02
- TP: TP-04
- Beleírtam az adott mezőbe.
- A szöveg megfelelően jelenik meg, ha nem írok be semmit, akkor a kötelező mező miatt pirosra vált. Az elküldés gomb üres/hibás mező esetén nem működik.(HELYES)

#### 3.4.3. TC-03
- TP: TP-04
- Az oldalt megnyitva 'f12' gomb megnyomása után a reszponzív gombot használva teszteltem különbőző méretű kijelzőkön.
- A megfelelő méretet megtartva rendesen jelenik meg a mező és a gomb. (HELYES)



