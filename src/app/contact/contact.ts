import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  enviado = false;

  enviar(evento: Event) {
    evento.preventDefault();   // evita que la página se recargue
    this.enviado = true;       // muestra el mensaje de éxito
  }
}
