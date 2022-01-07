class LightsoutModel {
  constructor(tomb) {
    this.tomb = tomb;
  }

  ellenorzes(szam) {
    if (szam >= 3) {
      this.tomb[szam - 3].setAllapot();
    }
    if (szam % 3 !== 0) {
      this.tomb[szam - 1].setAllapot();
    }
    if (szam < 6) {
      this.tomb[szam + 3].setAllapot();
    }
    if (szam % 3 !== 2) {
      this.tomb[szam + 1].setAllapot();
    }
  }
}