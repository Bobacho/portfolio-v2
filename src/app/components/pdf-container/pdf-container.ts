import { Component, input } from '@angular/core';
import { File } from '@/app/types/file.type';
import { PdfViewerComponent, PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-pdf-container',
  imports: [PdfViewerModule],
  templateUrl: './pdf-container.html',
  styleUrl: './pdf-container.css'
})
export class PdfContainer {
  file = input<File>({
    nombre: '',
    uri: ''
  })
}
