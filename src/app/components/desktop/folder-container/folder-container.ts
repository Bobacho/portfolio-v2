import { Folder } from '@/app/types/file.type';
import { Component, computed, EventEmitter, input, output, signal } from '@angular/core';
import { FolderManager } from '../../folder-manager/folder-manager';

@Component({
  selector: 'app-folder-container',
  imports: [FolderManager],
  templateUrl: './folder-container.html',
  styleUrl: './folder-container.css'
})
export class FolderContainer {
  folder = input<Folder>({
    nombre: 'dummy',
    uri: 'dummy'
  })
  appendFolder = output<Folder>()
  closeFolder = output<Folder>()

  isMaximized = input<boolean>(false)
  shouldMaximize = computed(() => {
    return window.innerWidth < 820 || this.isMaximized()
  })

  folderClicked = signal(false)
  imageSize = signal(0)
  constructor() {
    this.imageSize.set(window.outerHeight / 16)
  }

  clickFolderMobile() {
    if (window.innerWidth < 820) {
      this.folderClicked.set(true)
      this.closeFolder.emit(this.folder())
    }
  }

  clickFolder() {
    this.folderClicked.set(true)
    this.appendFolder.emit(this.folder())
  }

  close() {
    this.closeFolder.emit(this.folder())
    this.folderClicked.set(false)
  }
}
