import { Component, computed, effect, input, output, signal } from '@angular/core';
import { interval } from 'rxjs';
import { File, Folder } from '@/app/types/file.type';
import { FolderContainer } from "./folder-container/folder-container";
import { FileContainer } from './file-container/file-container';

@Component({
  selector: 'app-desktop-footer',
  imports: [FolderContainer, FileContainer],
  templateUrl: './desktop-footer.html',
  styleUrl: './desktop-footer.css'
})
export class DesktopFooter {
  fechaActual = signal(new Date())

  files = input<File[]>([])

  maximizeFile = output<File>()

  fecha = computed(() => {
    const format = new Intl.DateTimeFormat("es-MX", {
      timeStyle: 'short',
      dateStyle: 'medium'
    })
    return format.format(this.fechaActual())
  })

  constructor() {
    interval(1000).subscribe({
      next: () => {
        this.fechaActual.set(new Date())
      }
    })
  }

  maximize(file: File) {
    this.maximizeFile.emit(file)
  }
}
