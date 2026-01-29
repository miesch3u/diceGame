package com.idmc.api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@Table(name ="score")
public class Score {

    @Id
    private int id;
    private int score;
    private String nom_joueur;
}
