package classes;

// A Team represents a list of 12 Players that is able to be modified and
// also keeps track of a salary cap.
public class Team {
  private Player[] players;
  private double salaryCap;

  public Team(Player[] players, double salaryCap) {
    this.players = players;
    this.salaryCap = salaryCap;
  }

}
