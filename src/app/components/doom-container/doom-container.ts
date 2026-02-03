import { Component, AfterViewInit, OnDestroy, input, effect } from '@angular/core';

declare var Dos: any;

@Component({
  selector: 'app-doom-container',
  templateUrl: './doom-container.html',
  styleUrls: ['./doom-container.css']
})
export class DoomContainer implements AfterViewInit {

  dosbox: any;

  ngAfterViewInit(): void {
    this.dosbox = Dos(document.getElementById("dos"), {
      url: "assets/doom.jsdos",
      autoStart: true,
      thinSidebar: true,
      uiControlsScale: 0.5
    });
    const observer = new MutationObserver(() => {
      const sidebar = document.querySelector(".sidebar-thin")
      const container = document.querySelector(".undefined")
      const svgs = container?.querySelectorAll("svg")
      const text = document.querySelector(".items-center")
      const text2 = document.querySelector(".text-sm")
      if (svgs) {
        svgs[1]?.remove()
      }
      sidebar?.remove()
      text?.remove()
      text2?.remove()

      if (!svgs) { return }
      const svg = svgs[0];

      if (svg) {
        const renderWindow = document.querySelector(".pre-run-window")
        renderWindow?.setAttribute("style", "width: 300px; position: relative; top: 0%, left: 25%;")
      }

      const downText = document.querySelector(".top-6")
      downText?.remove()
      observer.disconnect()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
  ngOnDestroy() {
    this.dosbox.stop()
    this.dosbox.exit()
  }
}

