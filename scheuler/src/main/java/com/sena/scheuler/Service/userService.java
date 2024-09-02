package com.sena.scheuler.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.scheuler.InterfaceService.IuserService;
import com.sena.scheuler.Interfaces.Iuser;
import com.sena.scheuler.Models.user;

@Service
public class userService implements IuserService {
    
    @Autowired
    private Iuser data;

    @Override
    public String save(user user) {
        data.save(user);
        return user.getIdUser();
    }

    @Override
    public List<user> findAll() {
        List<user> listaUser = (List<user>) data.findAll();
        return listaUser;
    }

    @Override
    public List<user> userFilter(String nombres,String tipoDocumento, String correo) {
        List<user> listaUser = data.userFilter(nombres,tipoDocumento,correo);
        return listaUser;
    }

    @Override
    public List<user> cambiarTipoDocumento() {
        List<user> listaUser = data.cambiarTipoDocumento();
        return listaUser;
    }

    @Override
    public List<user> actualizarPassword() {
        List<user> listaUser = data.actualizarPassword();
        return listaUser;
    }

    @Override
    public List<user> inicioSesionNotificar() {
        List<user> listaUser = data.inicioSesionNotificar();
        return listaUser;
    }

    @Override
    public Optional<user> findOne(String id) {
        Optional<user> user =data.findById(id);
        return user;
    }
}
