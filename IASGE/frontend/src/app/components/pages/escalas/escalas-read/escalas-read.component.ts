import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatCalendarCellClassFunction, MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
    selector: 'app-escalas-read',
    templateUrl: './escalas-read.component.html',
    styleUrls: ['./escalas-read.component.css'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule],
})
export class EscalasReadComponent implements OnInit {

maxDate: Date = new Date;
selected: any;

ngOnInit(): void {
    const date = new Date();
    const year = date.getFullYear();
    this.maxDate = new Date(year, 11, 31)
}

dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
    const year = cellDate.getFullYear();
    const month = cellDate.getUTCMonth();
    const day = cellDate.getDate();

    if(year === 2023)
    {
        if(month === 11)
        {
        if(day === 3)
        {
            return 'escala-day';
        }
        }
    }
    return '';
    }
    return '';
};
}