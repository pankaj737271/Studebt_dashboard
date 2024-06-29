import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  reports:any[]=[]
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.reports = [
      {
        studentName: 'John Doe',
        avatar: '/assets/img_avatar.png',
        classInfo: 'Class: 10A',
        term: 'Term: Fall 2024',
        reports: [
          { subject: 'Mathematics', grade: 'A' },
          { subject: 'Science', grade: 'B+' },
          { subject: 'English', grade: 'A-' }
        ]
      },
      {
        studentName: 'Jane Smith',
        avatar: '/assets/img_avatar.png',
        classInfo: 'Class: 10B',
        term: 'Term: Spring 2024',
        reports: [
          { subject: 'Mathematics', grade: 'B' },
          { subject: 'Science', grade: 'A' },
          { subject: 'English', grade: 'B+' }
        ]
      }
    ];
  }
  downloadReport(card:any) {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(card.reports);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    XLSX.writeFile(workbook, `${card.studentName}_Report.xlsx`);
  }
}
