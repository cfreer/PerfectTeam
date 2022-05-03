package src.test.java;

import org.junit.Test;
import src.main.java.Player;
import src.main.java.Stats;
import src.main.java.Team;
import java.util.*;

import javax.swing.ImageIcon;

import static org.junit.Assert.*;

/**
 * Test class for the Team implementation.
 */
public class TeamTest {
  private static double EPS = 1e-9;

  public Stats getStats() {
    return new Stats(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
  }

  public Player getPlayer() {
    return new Player(getStats(), 1, 1, 1, 1, new ImageIcon(), "Player Test", 30);
  }

  @Test
  public void testAddPlayer_LargeTeam() {
    Team team = new Team(1000);
    Stats stats = getStats();
    for (int i = 0; i < 12; i++) {
      team.addPlayer(new Player(stats, 1, 1, 1, 1, new ImageIcon(), "Player " + i, 30));
    }
    Player player = getPlayer();
    assertFalse(team.addPlayer(player));
  }

  @Test
  public void testAddPlayer_PastSalaryCap() {
    Team team = new Team(0);
    Player player = getPlayer();
    assertFalse(team.addPlayer(player));
  }

  @Test
  public void testAddPlayer_DuplicatePlayer() {
    Team team = new Team(100);
    Player player = getPlayer();
    assertTrue(team.addPlayer(player));
    assertFalse(team.addPlayer(player));
  }

  @Test
  public void testAddPlayer_PlayerAdded() {
    Team team = new Team(100);
    Player player = getPlayer();
    assertTrue(team.addPlayer(player));
    assertEquals(Arrays.asList(player), team.getPlayers());
  }

  @Test
  public void testAddPlayer_TotalSalaryUpdated() {
    Team team = new Team(100);
    Player player = getPlayer();
    assertTrue(team.addPlayer(player));
    assertEquals(1, team.getTotalSalary(), EPS);
  }

  @Test
  public void testRemovePlayer() {
    Team team = new Team(100);
    Player player = getPlayer();
    team.addPlayer(player);
    assertTrue(team.removePlayer(player));
    assertEquals(new ArrayList<Player>(), team.getPlayers());
  }
}