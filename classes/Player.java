package classes;

// A Player represents a basketball player that has stats, a PER, win shares,
// salary, and a projected salary.
public class Player {
  private Stats stats; // 3-point attempt rate, assist percentage total rebound percentage,
                       // block percentage, and steal percentage.
  private double per; // Player Efficiency Rating: A measure of per-minute
                      // production standardized such that the league average is 15.
  private double winShares; // An estimate of the number of wins contributed by a player.
  private double salary; // Player's salary.
  private double projSalary; // Player's projected salary.

  /**
   * Creates a new Player with the given data.
   * @param stats The player's 3-point attempt rate, assist percentage,
   *              total rebound percentage, block percentage, and steal percentage.
   * @param per Player Efficiency Rating.
   * @param winShares An estimate of the number of wins contributed by a player.
   * @param salary Player's salary.
   * @param projSalary Player's projected salary.
   */
  public Player(Stats stats, double per, double winShares, double salary, double projSalary) {
    this.stats = stats;
    this.per = per;
    this.winShares = winShares;
    this.salary = salary;
    this.projSalary = projSalary;
  }

  /**
   * Returns the player's stats
   * @return Player's stats.
   */
  public Stats getStats() {
    return this.stats;
  }

  /**
   * Returns the player's salary.
   * @return Player's salary.
   */
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
     * @param tpar 3-Point Attempt Rate.
     * @param ast Assist Percentage.
     * @param trb Total Rebound Percentage.
     * @param blk Block Percentage.
     * @param stl Steal Percentage.
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
