package pt;

// A Player represents a basketball player that has stats, a PER, win shares,
// salary, a projected salary, profile picture, name, and age.
public class Player {
  private Stats stats; //points, assists, defensive rebounds, offensive rebounds, steals, turnovers, personal fouls,
                       //blocks, blocks against, free throws made
  private double per; // Player Efficiency Rating: A measure of per-minute
                      // production standardized such that the league average is 15.
  private double winShares; // An estimate of the number of wins contributed by a player.
  private int salary; // Player's salary.
  private int projSalary; // Player's projected salary.
  private String proPicSrc; // URL of the player's profile picture.
  private String name; // Player's name in the form "[FirstName] [LastName]".
  private int age; // Player's age.
  private String team; // Player's team in an abbreviated 3-letter form. Ex: "CLE".

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
  public Player(Stats stats, double per, double winShares, int salary, int projSalary,
                String proPicSrc, String name, int age) {
    this.stats = stats;
    this.per = per;
    this.winShares = winShares;
    this.salary = salary;
    this.projSalary = projSalary;
    this.proPicSrc = proPicSrc;
    this.name = name;
    this.age = age;
  }

  /**
   * Returns the player's stats.
   * @return Player's stats.
   */
  public Stats getStats() {
    return this.stats;
  }

  /**
   * Returns the player's player efficiency rating.
   * @return Player's player efficiency rating.
   */
  public double getPER() {
    return this.per;
  }

  /**
   * Returns the player's win shares.
   * @return Player's win shares.
   */
  public double getWinShares() {
    return this.winShares;
  }

  /**
   * Returns the player's salary.
   * @return Player's salary.
   */
  public int getSalary() {
    return this.salary;
  }

  /**
   * Returns the player's projected salary.
   * @return Player's projected salary.
   */
  public int getProjSalary() {
    return this.projSalary;
  }

  /**
   * Returns the URL of the player's profile picture..
   * @return URL of the player's profile picture..
   */
  public String getProPicSrc() {
    return this.proPicSrc;
  }

  /**
   * Returns the player's first and last name.
   * @return Player's first and last name.
   */
  public String getName() {
    return this.name;
  }

  /**
   * Returns the player's age.
   * @return Player's age.
   */
  public int getAge() {
    return this.age;
  }

  /**
   * Returns the player's team.
   * @return Player's team.
   */
  public String getTeam() {
    return this.team;
  }

}
