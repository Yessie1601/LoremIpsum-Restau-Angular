import { Component } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private router: Router) {}

  goToMenu() {
    this.router.navigate(['/menu']);
  }

  async downloadPdf() {
    if (location.pathname !== '/menu') {
      await this.router.navigate(['/menu']);
      setTimeout(() => this.generatePdf(), 500);
    } else {
      this.generatePdf();
    }
  }

  private generatePdf() {
    const table = document.querySelector('.menu-table') as HTMLElement;
    if (!table) {
      alert('Menu table not found!');
      return;
    }
    html2canvas(table).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'pt',
        format: 'a4'
      });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth - 40;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      pdf.addImage(imgData, 'PNG', 20, 20, imgWidth, imgHeight);
      pdf.save('menu.pdf');
    });
  }
}
