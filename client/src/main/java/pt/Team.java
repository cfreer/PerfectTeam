package pt;
import java.util.*;

// A Team represents a list of 12 Players that is able to be modified and
// also keeps track of a salary cap.
public class Team {
  private List<Player> players; // 12 players on the team.
  private int totalSalary; // Total salary of the team.
  // add real salary cap
  private int luxuryTax;
  private final int SALARY_CAP = 112400000; // Maximum salary allowed of the team.

  /**
   * Creates a new Team with the given salary cap.
   */
  public Team() {
    this.players = new ArrayList<Player>();
    this.totalSalary = 0;
  }

  /**
   * Returns the team's total salary.
   * @return Team's total salary.
   */
  public int getTotalSalary() {
    return this.totalSalary;
  }

  /**
   * Returns the team's players.
   * @return The list of players on the team.
   */
  public List<Player> getPlayers() {
    return players;
  }

  public void luxuryTax() {
    double limitOverage = totalSalary - SALARY_CAP;
    if(limitOverage >= 20000000) {
      double currentTax = 3.75;
      for(int i = 0; i < ((int)limitOverage - 20000000)/5000000; i++) {
        luxuryTax += currentTax*5000000;
        currentTax += .5;
      }
      luxuryTax += (limitOverage%5000000) * (currentTax + .5);
    }
    if(limitOverage >= 15000000) {
      luxuryTax += (limitOverage - 15000000)*3.25;
      limitOverage -= limitOverage - 15000000;
    }
    if(limitOverage >= 10000000) {
      luxuryTax += (limitOverage - 10000000)*2.50;
      limitOverage -= limitOverage - 10000000;
    }
    if(limitOverage >= 5000000) {
      luxuryTax += (limitOverage - 5000000)*1.75;
      limitOverage -= limitOverage - 5000000;
    }
    if(limitOverage >= 0) {
      luxuryTax += (limitOverage)*1.50;
    }
  }

  /**
   * If possible, adds the given player to the current team. If not, displays an
   * error to the user.
   * @param player The player to be added to the team.
   * @return True if the player is successfully added to the team and false if not.
   */
  public boolean addPlayer(Player player) {
    int salary = player.getSalary();
    if (this.players.size() < 12) {
      if (this.totalSalary + salary > this.SALARY_CAP) {
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
    return true;
  }
}
