import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  imports:[CommonModule],
  standalone: true,
  styleUrls: ['./pager.component.css']
})
export class PagerComponent {
  @Input() page!: number;
  @Input() totalItems!: number;
  @Input() itemsPerPage!: number;
  @Input() currentPage!: number;
  @Output() pageChanged = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChanged.emit(page);
    }
  }
 
}
