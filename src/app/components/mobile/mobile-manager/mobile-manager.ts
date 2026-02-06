import { File, Folder } from '@/app/types/file.type';
import { Component, input, output } from '@angular/core';
import { FileContainer } from "../../desktop/file-container/file-container";
import { FolderContainer } from "../../desktop/folder-container/folder-container";

@Component({
  selector: 'app-mobile-manager',
  imports: [FileContainer, FolderContainer],
  templateUrl: './mobile-manager.html',
  styleUrl: './mobile-manager.css'
})
export class MobileManager {
  files = input<File[]>([])
  closeFile = output<File>()


  closeFolder(folder: Folder) {
    this.closeFile.emit(folder)
  }
}
