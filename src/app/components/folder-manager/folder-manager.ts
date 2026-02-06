import { Folder } from '@/app/types/file.type';
import { Position, Size } from '@/app/types/position.type';
import { Component, computed, effect, input, linkedSignal, output, signal } from '@angular/core';
import { FolderContainer } from '../desktop/folder-container/folder-container';
import { FileManager } from '../file-manager/file-manager';

@Component({
  selector: 'app-folder-manager',
  imports: [FileManager],
  templateUrl: './folder-manager.html',
  styleUrl: './folder-manager.css'
})
export class FolderManager {
  folder = input<Folder>({
    nombre: 'dummy',
    uri: 'dummy',
  })

  isMaximized = input<boolean>(true)

  minimizedSignal = signal<boolean>(!this.isMaximized())

  closeFolder = output()

  currentFolder = linkedSignal<Folder>(() => this.folder())
  imageSize = signal(0)

  size = signal<Size>({
    height: 50,
    width: 50
  })
  constructor() {
    this.imageSize.set(window.outerHeight / 25)
    effect(() => {
      if (this.isMaximized()) {
        this.minimizedSignal.set(false)
      }
    })
  }
  ngOnInit() {
    if (this.isMaximized()) {
      this.expandMobile()
    }
  }

  private maximized = false;

  searchInput = signal("")

  mousePressed = signal(false);

  position = signal<Position>({
    x: 0,
    y: 0
  })

  private difference: Position = {
    x: 0,
    y: 0
  }

  displayWindow = computed(() => {
    return this.minimizedSignal() ? `display: none;` : ``
  })

  dragFolder(event: DragEvent) {
    this.mousePressed.set(true)
    this.difference.x = event.clientX - this.position().x
    this.difference.y = event.clientY - this.position().y
  }
  dropFolder(event: DragEvent) {
    this.position.set({ x: event.clientX - this.difference.x, y: event.clientY - this.difference.y })
    this.mousePressed.set(false)
    this.difference.x = 0
    this.difference.y = 0
  }
  changeInput(event: Event) {
    const target = event.target as HTMLInputElement
    const value = target.value
    this.searchInput.set(value)
  }

  clickFolderMobile(index: number) {
    if (window.innerWidth > 820) {
      return
    }
    this.clickFolder(index)
  }

  clickFolder(index: number) {
    const folder = this.folder()
    if (!folder || !folder.files) { return }
    const files = folder.files
    const file = files[index]
    if (!file) { return }
    this.currentFolder.set(file)
  }

  close() {
    this.closeFolder.emit()
  }
  expandMobile() {
    if (!this.maximized) {
      this.position.set({
        x: 0,
        y: 0
      })
      this.size.set({
        height: 100,
        width: 100
      })
    }
    else {
      this.position.set({
        x: 25,
        y: 25
      })
      this.size.set({
        height: 50,
        width: 50
      })
    }
    this.maximized = !this.maximized

  }

  expand() {
    if (window.innerWidth < 820) {
      return
    }
    if (!this.maximized) {
      this.position.set({
        x: 0,
        y: 0
      })
      this.size.set({
        height: 100,
        width: 100
      })
    }
    else {
      this.position.set({
        x: 25,
        y: 25
      })
      this.size.set({
        height: 50,
        width: 50
      })
    }
    this.maximized = !this.maximized
  }

  minimize() {
    if (window.innerWidth < 820) {
      return
    }
    this.minimizedSignal.set(true)
  }
}
