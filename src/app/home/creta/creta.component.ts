import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import jsPDF from 'jspdf';
import jsPDF from 'jspdf';
import domtoimage from 'dom-to-image'
@Component({
  selector: 'app-creta',
  templateUrl: './creta.component.html',
  styleUrls: ['./creta.component.scss']
})
export class CretaComponent implements OnInit {
  @ViewChild('content') content!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  makePdf() {
    let dashboard:any =document.getElementById('content');
    const dashboardHeight = dashboard.clientHeight;
    const dashboardWidth = dashboard.clientWidth +230;
    const options = { background: 'white', width: dashboardWidth, height: dashboardHeight };

    domtoimage.toPng(dashboard, options).then((imgData:any) => {
         const doc = new jsPDF(dashboardWidth > dashboardHeight ? 'l' : 'p', 'mm', [dashboardWidth, dashboardHeight]);
         const imgProps = doc.getImageProperties(imgData);
         const pdfWidth = doc.internal.pageSize.getWidth();
        // const pdfWidth = 1200;
         const pdfHeight = ((imgProps.height * pdfWidth) / imgProps.width)+200;

         doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
         doc.save('Dashboard for hyperpanels.pdf');
    });
  }
}
