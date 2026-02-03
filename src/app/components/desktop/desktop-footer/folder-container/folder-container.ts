import { Folder } from '@/app/types/file.type';
import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-folder-container',
  imports: [],
  templateUrl: './folder-container.html',
  styleUrl: './folder-container.css'
})
export class FolderContainer {

  folder = input<Folder>({
    nombre: '',
    uri: ''
  })

  maximizeFolder = output<Folder>()

  imageSize = signal(0)
  constructor() {
    this.imageSize.set(window.outerHeight / 24)
  }

  clickFolder() {
    this.maximizeFolder.emit(this.folder())
  }
}
