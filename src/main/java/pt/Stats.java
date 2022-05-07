package pt;
// A Stats represents averages of a player's points, free throws made, offensive rebounds,
// defensive rebounds, assists, turnovers, steals, blocks, blocks against, and personal fouls.
public class Stats {
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
  private double playingTime; //Average playing time.

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
                double turnovers, double steals, double blocks, double blocksAgainst, double personalFouls, double playingTime) {
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
    this.playingTime = playingTime;
  }

  /**
   * Returns the average points.
   * @return Average points.
   */
  public double getPoints() {
    return this.points;
  }

  /**
   * Returns the playing time.
   * @return Playing time of the player.
   */
  public double getPlayingTime() {
    return this.playingTime;
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
