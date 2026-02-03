import { Component, effect, signal } from '@angular/core';
import { DesktopFooter } from '../../components/desktop/desktop-footer/desktop-footer';
import { DesktopManager } from '../../components/desktop/desktop-manager/desktop-manager';
import { File, Folder } from '@/app/types/file.type'

@Component({
  selector: 'app-desktop',
  imports: [DesktopFooter, DesktopManager],
  templateUrl: './desktop.html',
  styleUrl: './desktop.css'
})
export class Desktop {
  files = signal<File[]>([
    {
      nombre: "sobre mi",
      uri: "aboutme",
      type: 'file',
      mime: 'pdf',
      icon: 'assets/images/pdf_icon.png',
      src: ''
    },
    {
      nombre: 'proyectos',
      uri: 'projects',
      type: 'folder',
      files: [{
        nombre: 'agroplus',
        uri: 'proyectos/agroplus.html',
        type: 'file',
        mime: 'html',
        src: 'https://www.agroplus.com.pe',
        icon: 'assets/images/html_icon.png'
      },
      {
        nombre: 'zootecpro',
        uri: 'proyectos/zootecpro.html',
        type: 'file',
        mime: 'html',
        src: 'https://www.zootecpro.com',
        error: true,
        icon: 'assets/images/html_icon.png'
      },
      {
        nombre: 'agromaq',
        uri: 'proyectos/agromaq.html',
        type: 'file',
        mime: 'html',
        src: 'https://www.agromaq.com',
        error: true,
        icon: 'assets/images/html_icon.png'
      }]
    } as Folder, {
      nombre: 'experiencia',
      uri: 'experience',
      type: 'folder',
      files: [{
        nombre: 'experiencia',
        uri: 'experiencia/experiencia.pdf',
        type: 'file',
        mime: 'pdf',
        icon: 'assets/images/pdf_icon.png'
      }]
    } as Folder,
    {
      nombre: 'educacion',
      type: 'folder',
      uri: 'education',
      files: [{
        nombre: "educacion",
        uri: "educacion/educacion.pdf",
        type: "file",
        mime: "pdf",
        icon: "assets/images/pdf_icon.png"
      }]
    } as Folder,
    {
      nombre: "doom",
      type: 'file',
      uri: './doom.exe',
      icon: 'assets/images/doom.png',
      mime: 'doom'
    }])
  filesOpened = signal<File[]>([])

  maximizeFiles = signal<File[]>([])

  appendFile(file: File) {
    this.filesOpened.update(value => {
      value.push(file)
      return value
    })
  }
  closeFile(file: File) {
    this.filesOpened.update(value => {
      return value.filter(v => v.uri !== file.uri)
    })
  }
  maximizeFile(file: File) {
    this.maximizeFiles.update(value => {
      if (value.some(v => v.uri === file.uri)) {
        return value
      }
      return [...value, file]
    })
  }
}
