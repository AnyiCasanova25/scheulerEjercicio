package com.sena.scheuler.Models;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "user")
public class user {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "idUser",nullable = false, length = 36)
    private String idUser;

    @Column(name = "nombres",nullable = false, length = 100)
    private String nombres;

    @Column(name = "apellidos",nullable = false, length = 100)
    private String apellidos;

    @Column(name = "tipoDocumento",nullable = false, length = 36)
    private String tipoDocumento;

    @Column(name = "numDocumento",nullable = false, length = 11)
    private String numDocumento;

    @Column(name = "fechaNacimiento",nullable = false, length = 11)
    private Date fechaNacimiento;

    @Column(name = "correo", nullable = false, length = 100)
    private String correo;

    @Column(name = "estado", nullable = false, length = 36)
    private String estado;

    @Column(name = "password", nullable = false, length = 10)
    private String password;

    @Column(name = "fechaInicio", nullable = false, length = 10)
    private Date fechaInicio;

    @Column(name = "fechaModifi", nullable = false, length = 10)
    private Date fechaModifi;

    @Column(name = "notificacion",nullable = false,length = 10)
    private String notificacion;
}
