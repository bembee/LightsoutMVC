class LightsController {
  constructor() {
    let tomb = [];
    let jatekter = new Jatekter(tomb);
    let model = new LightsoutModel(tomb);


    $(window).on("lampaFelkapcsol", (event) => {
      event.detail.setAllapot();
      let szam = event.detail.id;
      model.ellenorzes(szam);
    });
  }
}
