import { AfterViewInit, Component, input, output, signal } from '@angular/core';
import { File } from '@/app/types/file.type';

@Component({
  selector: 'app-file-container',
  imports: [],
  templateUrl: './file-container.html',
  styleUrl: './file-container.css'
})
export class FileContainer implements AfterViewInit {

  file = input<File>({
    nombre: '',
    uri: ''
  })

  maximizeFile = output<File>()

  imageSize = signal(0)
  constructor() {
    this.imageSize.set(window.outerHeight / 24)
  }
  ngAfterViewInit(): void {
    this.imageSize.set(window.outerHeight / 24)
  }

  clickFolder() {
    this.maximizeFile.emit(this.file())
  }
}
