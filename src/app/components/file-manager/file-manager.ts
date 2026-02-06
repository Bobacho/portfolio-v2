import { Component, computed, effect, input, linkedSignal, output, signal } from '@angular/core';
import { File } from '@/app/types/file.type';
import { Position, Size } from '@/app/types/position.type';
import { DoomContainer } from "../doom-container/doom-container";
import { PdfContainer } from '../pdf-container/pdf-container';
import { HtmlContainer } from '../html-container/html-container';

@Component({
  selector: 'app-file-manager',
  imports: [DoomContainer, PdfContainer, HtmlContainer],
  templateUrl: './file-manager.html',
  styleUrl: './file-manager.css'
})
export class FileManager {
  file = input<File>({
    nombre: '',
    uri: ''
  })
  isMaximized = input<boolean>(true)


  minimizedSignal = signal<boolean>(!this.isMaximized())

  closeFile = output()


  currentFile = linkedSignal<File>(() => this.file())
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

  dragFile(event: DragEvent) {
    this.mousePressed.set(true)
    this.difference.x = event.clientX - this.position().x
    this.difference.y = event.clientY - this.position().y
  }
  dropFile(event: DragEvent) {
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

  clickFile(index: number) {

  }

  close() {
    this.closeFile.emit()
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
