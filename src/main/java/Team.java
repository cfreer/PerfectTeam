package src.main.java;
import java.util.*;

// A Team represents a list of 12 Players that is able to be modified and
// also keeps track of a salary cap.
public class Team {
  private List<Player> players; // 12 players on the team.
  private double totalSalary; // Total salary of the team.
  private double salaryCap; // Maximum salary allowed of the team.

  /**
   * Creates a new Team with the given salary cap.
   * @param salaryCap Maximum salary allowed of the team.
   */
  public Team(double salaryCap) {
    this.players = new ArrayList<Player>();
    this.salaryCap = salaryCap;
    this.totalSalary = 0;
  }

  /**
   * Returns the team's total salary.
   * @return Team's total salary.
   */
  public double getTotalSalary() {
    return this.totalSalary;
  }

  /**
   * Returns the team's players.
   * @return The list of players on the team.
   */
  public List<Player> getPlayers() {
    return players;
  }

  /**
   * If possible, adds the given player to the current team. If not, displays an
   * error to the user.
   * @param player The player to be added to the team.
   * @return True if the player is successfully added to the team and false if not.
   */
  public boolean addPlayer(Player player) {
    double salary = player.getSalary();
    if (this.players.size() < 12) {
      if (this.totalSalary + salary > this.salaryCap) {
        // TODO: display this message to user in UI
        System.out.println("Error: Player cannot be added to the team." +
                           "Player's salary causes the total team salary to exceed the salary cap.");
      } else if (this.players.contains(player)) {
        System.out.println("Error: Player cannot be added to the team." +
                      "Player is already on the team.");
      }
      else {
        this.players.add(player);
        this.totalSalary += salary;
        return true;
      }
    } else {
      System.out.println("Error: Player cannot be added to the team." +
                         "Team already has 12 players.");
    }
    return false;
  }

  /**
   * If on the team, removes the given player to the current team.
   * @param player The player to be removed from the team.
   * @return True if the player is successfully removed from the team and false if not.
   */
  public boolean removePlayer(Player player) {
    return this.players.remove(player);
  }

  public boolean quickAdd(String team) {
    // Query where team = team and player != any players already on team
  }

  /**
   * Sets the salary cap of the team to the given salary cap.
   * @param salaryCap Maximum salary allowed of the team.
   */
  public void setSalaryCap(double salaryCap) {
    this.salaryCap = salaryCap;
  }
}
