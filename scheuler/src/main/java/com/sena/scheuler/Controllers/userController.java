package com.sena.scheuler.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.scheuler.InterfaceService.IuserService;
import com.sena.scheuler.Models.user;
import com.sena.scheuler.Service.emailService;

@RestController
@RequestMapping("/api/v1/user")
public class userController {
    
    @Autowired
    private IuserService userService;

    @Autowired
    private emailService emailService;


    @PostMapping("/")
    public ResponseEntity<Object> save(@ModelAttribute ("user") user user) {

        if (user.getNombres().equals("")) {
            return new ResponseEntity<>("El campo nombres es obligatorio",HttpStatus.BAD_REQUEST);
        }

        if (user.getTipoDocumento().equals("")) {
            return new ResponseEntity<>("El campo tipo de documento es obligatorio",HttpStatus.BAD_REQUEST);
        }

        if (user.getCorreo().equals("")) {
            return new ResponseEntity<>("El campo correo es obligatorio",HttpStatus.BAD_REQUEST);
        }

       userService.save(user);
       emailService.enviarCorreoRegistro(user.getCorreo());
       return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        var listaUser = userService.findAll();
        return new ResponseEntity<>(listaUser, HttpStatus.OK);
    }

     @GetMapping("/busquedafiltro/{filtro}")
    public ResponseEntity<Object> findFiltro(@PathVariable String filtro) {
        var listaUser = userService.userFilter(filtro, filtro, filtro);
        return new ResponseEntity<>(listaUser, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findOne(@PathVariable String id) {
        var user = userService.findOne(id);
        return new ResponseEntity<>(user,HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @ModelAttribute("user") user userUpdate) {
        var user = userService.findOne(id).get();

        if (user != null) {

            user.setNombres(userUpdate.getNombres());
            user.setApellidos(userUpdate.getApellidos());
            user.setTipoDocumento(userUpdate.getTipoDocumento());
            user.setNumDocumento(userUpdate.getNumDocumento());
            user.setCorreo(userUpdate.getCorreo());
            user.setPassword(userUpdate.getPassword());
            user.setFechaNacimiento(userUpdate.getFechaNacimiento());
            user.setEstado(userUpdate.getEstado());

            userService.save(user);

            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Error usuario NO encontrado", HttpStatus.BAD_REQUEST);
        }
    }
}
