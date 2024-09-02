package com.sena.scheuler.Task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.sena.scheuler.Models.user;
import com.sena.scheuler.Service.emailService;
import com.sena.scheuler.Service.userService;

@Component
public class task {
    // programar una tarea que se ejecute cada 10 segundo
    // milisegundos
    // 1 segundo en milisegundos 1000
    // @Scheduled(fixedRate = 10000) 
    // public void sendNotification10Second() {
    //     SimpleDateFormat formato = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss aa");
    //     long miliseconds = System.currentTimeMillis();
    //     java.sql.Date date = new Date(miliseconds);
    //     String dateFormateada = formato.format(date);
    //     System.out.println("Tarea de 10 segundos tiempo: " + dateFormateada);
    //     System.out.println();
    // }
    // fixedRate=al inicio y luego el tiempo destinado
    // initialDelay=tenga un tiempo espera antes de iniciar
    // @Scheduled(fixedDelay  = 60000,initialDelay = 10000) 
    // public void sendNotificationOneMinute() {
    //     SimpleDateFormat formato = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss aa");
    //     long miliseconds = System.currentTimeMillis();
    //     java.sql.Date date = new Date(miliseconds);
    //     String dateFormateada = formato.format(date);
    //     System.out.println("Tarea de 1 minuto tiempo: " + dateFormateada);
    //     System.out.println();
    // }
    // /*
    //  * 1 segundo=1.000
    //  * 1 minuto=60.000
    //  * 1 hora=3.600.000
    //  * 1 día =86,400,000
    //  */

    //  cron
    //  @Scheduled(cron = "0 13 13 * * *")
    // public void sendNotificationcron() {
    //     SimpleDateFormat formato = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss aa");
    //     long miliseconds = System.currentTimeMillis();
    //     java.util.Date date = new Date(miliseconds);
    //     String dateFormateada = formato.format(date);
    //     System.out.println("Tarea con cron: " + dateFormateada);
    //     System.out.println();
    // }

    @Autowired
    private userService data;

    @Autowired
    private emailService email;

    @Scheduled(cron = "0 30 8 * * *")
    public void sendNotificationcron() {
        var listaUser = data.cambiarTipoDocumento();
        for (user user : listaUser) {
            System.out.println("Usuario que requiere actualizar su documento " + 
            user.getNombres());
            email.cambiarTipoDocumento(user);
        }
    }

    @Scheduled(cron = "0 30 8 * * *")
    public void sendNotificationcronactualizarPassword() {
        var listaUser = data.actualizarPassword();
        for (user user : listaUser) {
            System.out.println("Usuario que requiere actualizar su contraseña " + 
            user.getNombres());
            email.actualizarPassword(user);
        }
    }

    @Scheduled(cron = "0 30 8 * * *")
    public void sendNotificationcroninicioSesionNotificar() {
        var listaUser = data.inicioSesionNotificar();
        for (user user : listaUser) {
            System.out.println("Inicio Sesion"  + 
            user.getNombres());
            email.inicioSesionNotificar(user);
        }
    }
}
