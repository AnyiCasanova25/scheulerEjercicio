package com.sena.scheuler.Interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sena.scheuler.Models.user;

@Repository
public interface Iuser extends CrudRepository<user, String> {

    @Query("SELECT u FROM user u WHERE u.nombres LIKE %?1% OR u.correo LIKE %?2%")
    List<user> userFilter(String nombres, String tipoDocumento,String correo);

    //cambiar tipo documento
    @Query("SELECT u FROM user u WHERE TIMESTAMPDIFF(YEAR, u.fechaNacimiento, NOW())>=18 AND u.tipoDocumento = 'TI'")
    List<user> cambiarTipoDocumento();

    @Query("SELECT u FROM user u WHERE DATEDIFF(NOW(), u.fechaModifi) >= 90")
    List<user> actualizarPassword();

    @Query("SELECT u FROM user u WHERE  DATEDIFF(NOW(), u.fechaInicio) >= 30")
    List<user> inicioSesionNotificar();
}
