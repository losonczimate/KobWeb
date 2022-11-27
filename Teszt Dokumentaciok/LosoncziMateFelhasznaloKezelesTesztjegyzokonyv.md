# Tesztjegyzőkönyv:- `Felhasználók kezelése`

Az alábbi tesztdokumentum a `2022_IB153I-9_C` projekthez tartozó `Felhasználók kezelése` funkcióihoz készült. Felelőse: `Losonczi Máté`

## 1. Teszteljárások (TP)

### 1.1. Felhasználók kezelése
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02
- Leírás: Felhasználók eltárolásának tesztelése
  0. Regisztráció 
  1. Bejelentkezés



## 2. Tesztesetek (TC)

### 2.1 Felhasználók kezelése

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Új felhasználót a regisztrációs űrlap segítségével, az adatok helyes megadása után beregisztrálom az oldalra.
- Művelet: Az adatok megjelennek az adatbázisban, létrehozva az új felhasználót.
- Elvárt kimenet: A sikeres regisztráció után az oldal átnavigál a bejelentkezési oldalra.

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: Sikeres regisztráció után a bejelentkező oldalra kerül a felhasználó.
- Művelet: Email és jelszó hitelesítése
- Elvárt kimenet: Sikeres hitelesítés esetén, a profilra jutunk.


## 3. Tesztriportok

#### 3.1.1. TC-01
- TP: TP-01
- A felhasználót beregisztráltam
- A felhasználó létrejött az adatbázisban.(HELYES)

#### 3.1.2. TC-02
- TP: TP-01
- Bejelentkeztettem a felhasználót
- A profil oldalra jutottam.(HELYES)






