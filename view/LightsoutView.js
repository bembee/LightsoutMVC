class Lampa {
  constructor(szuloElem, id) {
    this.allapot = false;
    this.id = id;
    this.node = szuloElem;
    this.node.append("<div></div>");
    this.elem = this.node.children("div:last");
    this.setAllapot()
    this.elem.on("click", () => {
      this.kattintasTrigger();
    });
  }

  setSzin() {
    if (this.allapot) {
      this.elem.css("background-color", "yellow");
    } else {
      this.elem.css("background-color", "green");
    }
  }

  setAllapot() {
    this.allapot = !this.allapot;
    this.setSzin();
  }

  kattintasTrigger() {
    let esemeny = new CustomEvent("lampaFelkapcsol", { detail: this });
    window.dispatchEvent(esemeny);
  }
}

class Jatekter {
  constructor(tomb) {
    this.tomb = tomb;
    const szuloElem = $("article");
    for (let i = 0; i < 9; i++) {
      tomb.push(new Lampa(szuloElem, i));
    }
  }
}
