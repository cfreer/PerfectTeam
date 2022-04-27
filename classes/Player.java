package classes;
import java.awt.*;

// A Player represents a basketball player that has stats, a PER, win shares,
// salary, a projected salary, profile picture, name, and age.
public class Player {
  private Stats stats; // 3-point attempt rate, assist percentage total rebound percentage,
                       // block percentage, and steal percentage.
  private double per; // Player Efficiency Rating: A measure of per-minute
                      // production standardized such that the league average is 15.
  private double winShares; // An estimate of the number of wins contributed by a player.
  private double salary; // Player's salary.
  private double projSalary; // Player's projected salary.
  private Image proPic; // Player's profile picture.
  private String name; // Player's name in the form "[FirstName] [LastName]".
  private int age; // Player's age.

  /**
   * Creates a new Player with the given data.
   * @param stats Averages of a player's points, free throws made, offensive rebounds, defensive
   *              rebounds, assists, turnovers, steals, blocks, blocks against, and personal fouls.
   * @param per Player Efficiency Rating.
   * @param winShares An estimate of the number of wins contributed by a player.
   * @param salary Player's salary.
   * @param projSalary Player's projected salary.
   * @param proPic Player's profile picture.
   * @param name Player's name in the form "[FirstName] [LastName]".
   * @param age Player's age.
   */
  public Player(Stats stats, double per, double winShares, double salary, double projSalary,
                Image proPic, String name, int age) {
    this.stats = stats;
    this.per = per;
    this.winShares = winShares;
    this.salary = salary;
    this.projSalary = projSalary;
    this.proPic = proPic;
    this.name = name;
    this.age = age;
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

  // A Stats represents averages of a player's points, free throws made, offensive rebounds,
  // defensive rebounds, assists, turnovers, steals, blocks, blocks against, and personal fouls.
  private class Stats {
    private double points; // Average points.
    private double freeThrows; // Average free throws made.
    private double offRebounds; // Average offensive rebounds.
    private double defRebounds; // Average defensive rebounds.
    private double assists; // Average assists.
    private double turnovers; // Average turnovers.
    private double steals; // Average steals.
    private double blocks; // Average blocks.
    private double blocksAgainst; // Average blocks against.
    private double personalFouls; // Average personal fouls.

    /**
     * Creates a new Stats with the given data.
     * @param points Average points.
     * @param freeThrows Average free throws made.
     * @param offRebounds Average offensive rebounds.
     * @param defRebounds Average defensive rebounds.
     * @param assists Average assists.
     * @param turnovers Average turnovers.
     * @param steals Average steals.
     * @param blocks Average blocks.
     * @param blocksAgainst Average blocks against.
     * @param personalFouls Average personal fouls.
     */
    public Stats(double points, double freeThrows, double offRebounds, double defRebounds, double assists,
                 double turnovers, double steals, double blocks, double blocksAgainst, double personalFouls) {
      this.points = points;
      this.freeThrows = freeThrows;
      this.offRebounds = offRebounds;
      this.defRebounds = defRebounds;
      this.assists = assists;
      this.turnovers = turnovers;
      this.steals = steals;
      this.blocks = blocks;
      this.blocksAgainst = blocksAgainst;
      this.personalFouls = personalFouls;
    }

    /**
     * Returns the average points.
     * @return Average points.
     */
    public double getPoints() {
      return this.points;
    }

    /**
     * Returns the average free throws made.
     * @return Average free throws made.
     */
    public double getFreeThrows() {
      return this.freeThrows;
    }

    /**
     * Returns the average offensive rebounds.
     * @return Average offensive rebounds.
     */
    public double getOffRebounds() {
      return this.offRebounds;
    }

    /**
     * Returns the average defensive rebounds.
     * @return Average defensive rebounds.
     */
    public double getDefRebounds() {
      return this.defRebounds;
    }

    /**
     * Returns the average assists.
     * @return Average assists.
     */
    public double getAssists() {
      return this.assists;
    }

    /**
     * Returns the average turnovers.
     * @return Average turnovers.
     */
    public double getTurnovers() {
      return this.turnovers;
    }

    /**
     * Returns the average steals.
     * @return Average steals.
     */
    public double getSteals() {
      return this.steals;
    }

    /**
     * Returns the average blocks.
     * @return Average blocks.
     */
    public double getBlocks() {
      return this.blocks;
    }

    /**
     * Returns the average blocks against.
     * @return Average blocks against.
     */
    public double getBlocksAgainst() {
      return this.blocksAgainst;
    }

    /**
     * Returns the average personal fouls.
     * @return Average personal fouls.
     */
    public double getPersonalFouls() {
      return this.personalFouls;
    }

  }

}
