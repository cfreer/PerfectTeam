//Juan
package src.main.java;
//package org.kodejava.json;

//Here we are converting the data from the csv files to json files to put the data inside of the player objects
//In the CSV file, the first line in the file will be use as the keys to the generated JSON string.
// On the other way around, the JSON string keys will be written on the first line of the CSV file as the column header.

// import org.json.CDL;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Objects;
import java.util.stream.Collectors;

public class CsvFileToJsonFile {
    public static void main(String[] args) {
        // Read csv data file and store it in a string
        InputStream is = CsvFileToJsonFile.class.getResourceAsStream("/data.csv");
        String csv = new BufferedReader(
                new InputStreamReader(Objects.requireNonNull(is), StandardCharsets.UTF_8))
                .lines()
                .collect(Collectors.joining("\n"));

        // TODO: Uncomment and fix CDL problem.
        // try {
        //     // Convert csv text to JSON string, and save it
        //     // to a data.json file.
        //     String json = CDL.toJSONArray(csv).toString(2);
        //     Files.write(Path.of("data.json"), json.getBytes());
        // } catch (IOException e) {
        //     e.printStackTrace();
        // }
    }
}
