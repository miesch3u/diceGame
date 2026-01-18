package com.idmc.api.service;

import com.idmc.api.model.Score;
import com.idmc.api.repository.ScoreRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Data
public class ScoreService {

    @Autowired
    private ScoreRepository scoreRepository;

    public Iterable<Score> findAll(){
        return scoreRepository.findAll();
    }

    public Score findById(Integer id){
        return scoreRepository.findById(id).get();
    }

    public Score save(Score score){
        Integer id = scoreRepository.findMaxId();
        if(id == null) id = 0;
        else id ++;
        score.setId(id);
        System.out.println("saving");
        return scoreRepository.save(score);
    }

    public void deleteById(Integer id){
        scoreRepository.deleteById(id);
    }

    public Iterable<Score> findByNom_joueur(String nom_joueur){
        return scoreRepository.findByNom_joueur(nom_joueur);
    }

    public Iterable<Score> findtop10(){
        return scoreRepository.find10BestScores();
    }
}
