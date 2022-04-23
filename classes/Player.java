package classes;
// A Player represents a basketball player that has stats, a PER, winshares,
// salary, and a projcected salary.
public class Player {
  private Stats stats;
  private double per;
  private double winShares;
  private double salary;
  private double projSalary;

  public Player(Stats stats, double per, double winShares, double salary, double projSalary) {
    this.stats = stats;
    this.per = per;
    this.winShares = winShares;
    this.salary = salary;
    this.projSalary = projSalary;
  }
  
  //get stats

  public double getSalary() {
    return this.salary;
  }

  // A Stats represents a player's 3-point attempt rate, assist percentage,
  // total rebound percentage, block percentage, and steal percentage.
  private class Stats {
    private double tpar; // 3-Point Attempt Rate: Percentage of FG Attempts from 3-Point Range
    private double ast; // Assist Percentage: An estimate of the percentage of teammate
                        // field goals a player assisted while they were on the floor.
    private double trb; // Total Rebound Percentage: An estimate of the percentage of
                        // available rebounds a player grabbed while they were on the floor.
    private double blk; // Block Percentage: An estimate of the percentage of opponent two-point
                        // field goal attempts blocked by the player while they were on the floor.
    private double stl; // Steal Percentage: An estimate of the percentage of opponent possessions
                        // that end with a steal by the player while they were on the floor.

    /**
     * Creates a new Stats with the given data.
     * @param tpar 3-Point Attempt Rate
     * @param ast Assist Percentage
     * @param trb Total Rebound Percentage
     * @param blk Block Percentage
     * @param stl Steal Percentage
     */
    public Stats(double tpar, double ast, double trb, double blk, double stl) {
      this.tpar = tpar;
      this.ast = ast;
      this.trb = trb;
      this.blk = blk;
      this.stl = stl;
    }
  }

}
