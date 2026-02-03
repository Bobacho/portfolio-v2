import { Component, input } from '@angular/core';
import { File } from '@/app/types/file.type'
import { SafePipe } from '@/app/pipes/safe.pipe';

@Component({
  selector: 'app-html-container',
  imports: [SafePipe],
  templateUrl: './html-container.html',
  styleUrl: './html-container.css'
})
export class HtmlContainer {
  file = input<File>({
    nombre: '',
    uri: ''
  })
}
