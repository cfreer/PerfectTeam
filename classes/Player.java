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

  private class Stats {
    public Stats() {
      
    }
  }

  private class PER {
    public PER() {

    }
  }

  private class WinShares {
    public WinShares() {

    }

  }

}
