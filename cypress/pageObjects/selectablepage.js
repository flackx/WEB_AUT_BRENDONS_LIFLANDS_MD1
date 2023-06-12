import basepage from "./basepage";

class selectablepage extends basepage{

    static get url(){
        return "/selectable";
    }

    static get grid(){
        return cy.get("#demo-tab-grid");
    }

    static get noButton(){
        return cy.get(".list-group-item");
    }

    static get secondButton(){
        return this.noButton.contains("Two");
    }

    static get forthButton(){
        return this.noButton.contains("Four");
    }

    static get sixthButton(){
        return this.noButton.contains("Six");
    }

    static get eightButton(){
        return this.noButton.contains("Eight");
    }

    static get firstButton(){
        return this.noButton.contains("One");
    }

    static get thirdButton(){
        return this.noButton.contains("Three");
    }

    static get fifthButton(){
        return this.noButton.contains("Five");
    }

    static get seventhButton(){
        return this.noButton.contains("Seven");
    }

    static get ninthButton(){
        return this.noButton.contains("Nine");
    }
    static verifyButtonSelected(button) {
        button.should("have.class", "active");
    }

    static verifyButtonNotSelected(button) {
        button.should("not.have.class", "active");
    }
}

export default selectablepage;