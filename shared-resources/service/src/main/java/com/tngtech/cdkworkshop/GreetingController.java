package com.tngtech.cdkworkshop;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.PutItemRequest;
import com.amazonaws.services.dynamodbv2.model.ScanRequest;
import com.amazonaws.services.dynamodbv2.model.ScanResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.Set;
import java.util.stream.Collectors;

@Controller
public class GreetingController {

    @Value("${table-name}")
    private String tableName;

    final AmazonDynamoDB ddb = AmazonDynamoDBClientBuilder.defaultClient();

    @GetMapping("/greeting")
    public String greeting(@RequestParam(name = "name", required = false, defaultValue = "default-visitor") String name, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("dynamodb", writeToDynamoDB(name));
        model.addAttribute("visitors", scanDynamoDB(name));
        return "greeting";
    }

    public String writeToDynamoDB(String name) {
        try {
            final HashMap<String, AttributeValue> item = new HashMap<>();
            item.put("name", new AttributeValue(name));

            ddb.putItem(new PutItemRequest(tableName, item));

            return "Your visit has been saved to the database.";
        } catch (Exception e) {
            return "Your visit has not been saved to the database. Reason: " + e.toString();
        }
    }

    public String scanDynamoDB(String name) {
        try {
            final Set<String> names = ddb.scan(new ScanRequest(tableName))
                                              .getItems().stream().map(item -> item.get("name").getS())
                                              .collect(Collectors.toSet());

            names.add(name);
            final String namesAsString = String.join(", ", names);

            return "This page has been visited by: " + namesAsString;
        } catch (Exception e) {
            return "Visitors could not be fetched from DB. Reason: " + e.toString();
        }
    }
}
