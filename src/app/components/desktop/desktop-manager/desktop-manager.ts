import { Component, input, output } from '@angular/core';
import { File, Folder } from '@/app/types/file.type';
import { FolderContainer } from '../folder-container/folder-container';
import { FileContainer } from "../file-container/file-container";
@Component({
  selector: 'app-desktop-manager',
  imports: [FolderContainer, FileContainer],
  templateUrl: './desktop-manager.html',
  styleUrl: './desktop-manager.css'
})
export class DesktopManager {
  files = input<File[]>([])
  appendFile = output<File>()
  closeFile = output<File>()
  maximizeFiles = input<File[]>()


  appendFolder(folder: Folder) {
    console.log("folder emited:", folder)
    this.appendFile.emit(folder)
  }

  closeFolder(folder: Folder) {
    this.closeFile.emit(folder)
  }

  isMaximized(file: File) {
    return this.maximizeFiles()?.includes(file) ?? false
  }
}
