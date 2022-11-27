# Tesztjegyzőkönyv:- `Email funkciók`

Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `Email funkciók` funkcióihoz készült. Felelőse: `Simon Dániel`

## 1. Teszteljárások (TP)

### 1.1. Email funkciók
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02
- Leírás: Email funkciók tesztelése
    0. Email kérése
    1. Email fiók ellenörzése



## 2. Tesztesetek (TC)

### 2.1 Email funkciók

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Még nem visszaigazolt profilról kérek visszaigazoló emailt.
- Művelet: Visszaigazoló email kiküldése.
- Elvárt kimenet: Megjelenik az email fiókban az üzenet és a benne levő linkkel vissza tudja igazolni az email címét.

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: Elfelejtett jelszó email kiküldése.
- Művelet: Jelszóváltoztató email kiküldése.
- Elvárt kimenet:  Megjelenik az email fiókban az üzenet és a benne levő linkkel tud új jelszót megadni a fiókjához.


## 3. Tesztriportok

#### 3.1.1. TC-01
- TP: TP-01
- Email-t kikértem.
- Megkaptam az emailt.
- A linkre kattintva visszaigazolódott a profil és használhatók az eddig lezárt funkciók.(HELYES)

#### 3.1.2. TC-02
- TP: TP-01
- Rányomtam az elfelejtett jelszóra.
- Megadtam az email címem.
- Megkaptam az emailt.
- A linket követve megváltoztattam a jelszót.
- Csak az új jelszóval tudok belépni az oldalra. (HELYES)






