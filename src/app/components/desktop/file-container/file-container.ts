import { Component, computed, input, output, signal } from '@angular/core';
import { File } from '@/app/types/file.type';
import { FileManager } from "../../file-manager/file-manager";

@Component({
  selector: 'app-file-container',
  imports: [FileManager],
  templateUrl: './file-container.html',
  styleUrl: './file-container.css'
})
export class FileContainer {
  file = input<File>({
    nombre: '',
    uri: ''
  });
  appendfile = output<File>()
  closefile = output<File>()

  isMaximized = input<boolean>(false)

  shouldMaximize = computed(() => {
    return window.innerWidth < 820 || this.isMaximized()
  })

  fileClicked = signal(false)
  imageSize = signal(0)
  constructor() {
    this.imageSize.set(window.outerHeight / 16)
  }

  clickFileMobile() {
    if (window.innerWidth < 820) {
      this.fileClicked.set(true)
    }
  }
  closeMobile() {
    if (window.innerWidth < 820) {
      this.fileClicked.set(false)
      this.closefile.emit(this.file())
    }
  }

  clickFile() {
    this.fileClicked.set(true)
    this.appendfile.emit(this.file())
  }

  close() {
    this.closefile.emit(this.file())
    this.fileClicked.set(false)
  }

}
