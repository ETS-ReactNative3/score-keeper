class Goalie {
  constructor() {
    this.goals = 0;
    this.saves = 0;
    this.savePercentage = 0;
  }

  goalChanged = (value) => {
    const tempGoals = this.goals;
    this.goals = (tempGoals > -1) ? tempGoals + value : tempGoals;
    this.goals = tempGoals + value;
    this.calculateSavePercentage();
  }

  savesChanged = (value) => {
    const tempSaves = this.saves;
    this.saves = (tempSaves > -1) ? tempSaves + value : tempSaves;
    this.calculateSavePercentage();
  }

  calculateSavePercentage = () => {
    const totalShots = this.goals + this.saves;
    const percent = this.saves * 100 / totalShots;
    this.savePercentage = this.roundTo(percent, 2);
  }

  roundTo = (n, digits) => {
    if (digits === undefined) {
        digits = 0;
    }

    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    return (Math.round(n) / multiplicator).toFixed(2);
  }
}

export default Goalie;