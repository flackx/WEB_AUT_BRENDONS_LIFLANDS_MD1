import selectablepage from "../pageObjects/selectablepage";

describe("DemoQA spec", () => {
  context("Selectable scenario", () => {
    beforeEach(() => {
      selectablepage.visit();
    });

    it.only("testcase", () =>{
      selectablepage.grid.click();
      selectablepage.secondButton.click();
      selectablepage.forthButton.click();
      selectablepage.sixthButton.click();
      selectablepage.eightButton.click();
      selectablepage.verifyButtonSelected(selectablepage.secondButton);
      selectablepage.verifyButtonSelected(selectablepage.forthButton);
      selectablepage.verifyButtonSelected(selectablepage.sixthButton);
      selectablepage.verifyButtonSelected(selectablepage.eightButton);

      selectablepage.verifyButtonNotSelected(selectablepage.firstButton);
      selectablepage.verifyButtonNotSelected(selectablepage.thirdButton);
      selectablepage.verifyButtonNotSelected(selectablepage.fifthButton);
      selectablepage.verifyButtonNotSelected(selectablepage.seventhButton);
      selectablepage.verifyButtonNotSelected(selectablepage.ninthButton);
    });

  });
});