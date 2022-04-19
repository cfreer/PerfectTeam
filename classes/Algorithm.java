package classes;

//This is the Alrgorithm class for PerfectTeam.
//This will take any potential 12 person team and predict its potential Win/Loss record over a season.

public class Algorithm {
  private final double averageWinshares = .1025 * 12;
  private final double totalMins = 240.0;
  private double winshares;
  /*  This takes the data from the team and stores it to be used later for calculating winP.
  
      Spec.requires team size to be 12
      Spec.modifies winshares
  */
  public Algorithm(Team team) {
    double ws = 0;
    for(Player p : team) {
      ws += p.getWS;
    }
    this.winshares = ws;
  }
  /*
      This calculates the win percentage using the data gathered from the team.
      This will return a number between 0 and 1.
  */
  public double winPercentage() {
    return (winshares/3)/82;
  }
}
