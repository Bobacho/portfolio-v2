import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-mobile-header',
  imports: [],
  templateUrl: './mobile-header.html',
  styleUrl: './mobile-header.css'
})
export class MobileHeader {
  fechaActual = signal(new Date())

  battery = (Math.random() * 100).toFixed(0)

  fecha = computed(() => {
    const format = new Intl.DateTimeFormat("es-MX", {
      timeStyle: 'short',
    })
    return format.format(this.fechaActual())
  })


}
