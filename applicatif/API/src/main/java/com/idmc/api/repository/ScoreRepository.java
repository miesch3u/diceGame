package com.idmc.api.repository;

import com.idmc.api.model.Score;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ScoreRepository extends CrudRepository<Score,Integer> {

    @Query ("SELECT s FROM Score s WHERE s.nom_joueur = :nom")
    Iterable<Score> findByNom_joueur(@Param("nom") String nomJoueur);

    @Query ("SELECT MAX(id) FROM Score")
    Integer findMaxId();

    @Query ("SELECT s FROM Score s ORDER BY s.score DESC LIMIT 10")
    Iterable<Score> find10BestScores();
}
