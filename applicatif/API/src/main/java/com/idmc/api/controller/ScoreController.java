package com.idmc.api.controller;

import com.idmc.api.model.Score;
import com.idmc.api.service.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/score")
public class ScoreController {

    @Autowired
    private ScoreService scoreService;

    @GetMapping(value = "/top", produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<Score> getTop10Scores(){
        return scoreService.findtop10();
    }

    @GetMapping("/all")
    public Iterable<Object> getAllScores(){
        Iterable<Score> scores = scoreService.findAll();
        List<Object> allScores = new ArrayList<>();
        scores.forEach(allScores::add);
        return allScores;
    }

    @GetMapping("/joueur/{nom}")
    public Iterable<Score> findByNom_joueur(@PathVariable String nom){
        return scoreService.findByNom_joueur(nom);
    }

    @PostMapping("/save/{joueur}/{score}")
    public Score saveScore(@PathVariable String joueur, @PathVariable Integer score){
        Score newScore = new Score();
        newScore.setNom_joueur(joueur);
        newScore.setScore(score);
        scoreService.save(newScore);
        return newScore;
    }
}
