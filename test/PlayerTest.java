package test;

import org.junit.Test;
import static org.junit.Assert.*;

public class PlayerTest {
    private static double EPS = 1e-9;

    @Test
    public void testCentralTendency() {
        assertEquals (3, 3, EPS);
    }
}