package com.sena.scheuler.InterfaceService;

import java.util.List;
import java.util.Optional;

import com.sena.scheuler.Models.user;

public interface IuserService {
    
    public String save(user user);

    public List<user> findAll();

    public List<user> userFilter(String nombres,String tipoDocumento, String correo);
    
    public List<user> cambiarTipoDocumento();

    // public List<user> userDate(Date fechaNacimiento, Date  fechaInicio , Date fechaModifi);
    public List<user> actualizarPassword();

    public List<user> inicioSesionNotificar();

    public Optional<user> findOne(String id);
}
