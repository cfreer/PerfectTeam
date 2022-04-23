package classes;
import java.util.*;

// A Team represents a list of 12 Players that is able to be modified and
// also keeps track of a salary cap.
public class Team {
  private List<Player> players;
  private double totalSalary;
  private double salaryCap;

  public Team(double salaryCap) {
    this.players = new ArrayList<Player>();
    this.salaryCap = salaryCap;
    this.totalSalary = 0;
  }
  
  //get totalSalary
  

  public boolean addPlayer(Player player) {
    double salary = player.getSalary();
    if (this.players.size() < 12) {
      if (this.totalSalary + salary > this.salaryCap) {
        // TODO: display this message to user in UI
        System.out.println("Error: Player cannot be added to the team." +
                            "Player's salary causes the total team salary to exceed the salary cap.");
      } else {
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

  public boolean removePlayer(Player player) {
    return this.players.remove(player);
  }

}
